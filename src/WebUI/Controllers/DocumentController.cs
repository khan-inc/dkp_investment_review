using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using DKP.InvestmentReview.Application.DocTemplates.Queries;
using DKP.InvestmentReview.Application.Document.Queries;
using Microsoft.AspNetCore.Http;
using System.IO;
using System.Linq;

using DKP.InvestmentReview.Application.Common.Interfaces;
using DKP.InvestmentReview.Application.Document.Commands;
using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using Microsoft.Extensions.Configuration;

namespace DKP.InvestmentReview.WebUI.Controllers
{
    public class DocumentController : ApiController{

        private IExcelToImageService excelService;
        private IConfiguration configService;
        public DocumentController(IExcelToImageService excelrvc, IConfiguration configSrvc) {
            excelService = excelrvc;
            configService = configSrvc;
        }

        [HttpPost]
        public async Task<ActionResult<int>> CreateDocument(){
            var formCollection = await Request.ReadFormAsync();
            // Step 1: Save document record in database           
            //CreateDocumentCommand
            var paramList = new List<CreateDocumentParameterDTO>();
            foreach (var item in formCollection)
            {
                if (item.Key != "templateId" && item.Key != "fileParameterId")
                {
                    paramList.AddRange(JsonConvert.DeserializeObject<List<CreateDocumentParameterDTO>>(item.Value));
                }
            }
            var createDocumentCommand = new CreateDocumentCommand() { 
                Document = new CreateDocumentDTO()
                {
                    Active = false,
                    CreatedDate = DateTime.Now,
                    ModifiedDate = DateTime.Now,
                    Parameters = paramList,
                    DocTemplateId = int.Parse(formCollection["templateId"])
                }
            };

            var namedRange = paramList.Find(x => x.WidgetParameterName == "Named Range");
            var document = await Mediator.Send(createDocumentCommand);

            //Process excel widget in Document
            ProcessExcelWidgets(formCollection, document, (namedRange != null ? namedRange.Value : string.Empty));

            return document.Id;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<DocumentVM>> GetDocument(int id){
            return await Mediator.Send(new GetDocumentQuery(){DocumentId = id});
        }

        private void ProcessExcelWidgets(IFormCollection formCollection, CreateDocumentDTO document, string namedRange)
        {
            var fileNameToSave = string.Empty;
            var fileData = formCollection.Files.First();
            if (fileData.Length > 0 && formCollection.ContainsKey("fileParameterId"))
            {
                int fileParameterId;
                if (int.TryParse(formCollection["fileParameterId"], out fileParameterId))
                {
                    var docParaId = document.Parameters.First(p => p.WidgetParameterId == fileParameterId);
                    var recievedFileName = fileData.FileName.Split(".");
                    var fileExt = recievedFileName.Length > 1 ? recievedFileName[recievedFileName.Length-1] : string.Empty;
                    fileNameToSave = $"{docParaId.Id}.{fileExt}";

                    var filePath = configService.GetValue<string>("ExcelPath");
                    var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), filePath, fileNameToSave);

                    //var fullPath = Path.Combine(pathToSave, fileNameToSave);

                    using (var stream = new FileStream(pathToSave, FileMode.Create))
                    {
                        fileData.CopyTo(stream);
                    }
                }
            }

            excelService.ConvertExcelToImage(fileNameToSave, namedRange);
        }

    }
}