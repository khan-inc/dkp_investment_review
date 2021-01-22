using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using DKP.InvestmentReview.Application.DocTemplates.Queries;
using DKP.InvestmentReview.Application.Document.Queries;
using Microsoft.AspNetCore.Http;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using DKP.InvestmentReview.Application.Document.Commands.saveExcel;
using System;
using System.Collections.Generic;


using DKP.InvestmentReview.Application.Common.Interfaces;

namespace DKP.InvestmentReview.WebUI.Controllers
{
    public class DocumentController : ApiController{

        
        [HttpPost]
        public async Task<ActionResult<DocTemplateDto>> CreateDocument(){
            var formCollection = await Request.ReadFormAsync();
            // Step 1: Save document record in database           
            // Step 2: Save Excel file in file system//////////////
            var fileData = formCollection.Files.First();

            var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), "Files");
            if (fileData.Length > 0)
            {
                var fullPath = Path.Combine(pathToSave, fileData.FileName);

                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    fileData.CopyTo(stream);
                }
               
            }
            return BadRequest();
        private IExcelToImageService excelService;
        public DocumentController(IExcelToImageService excelrvc) {
            excelService = excelrvc;
        }

        [HttpPost]
        public Task<ActionResult<DocTemplateDto>> CreateDocument(){
            // Step 1: Save document record in database
            // Step 2: Save Excel file in file system
            /////////////////////////////////////////////////////////
            // Step 3: Process Excel file to generate the image


           // excelService.ConvertExcelToImage("1/ExampleExcelData_2.xlsx", "Example 3", "B2", "R36", "");
           excelService.ConvertExcelToImage("1/ExampleExcelData_2.xlsx", null);

            return null;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<DocumentVM>> GetDocument(int id){
            return await Mediator.Send(new GetDocumentQuery(){DocumentId = id});
        }
        public void ExcelToImageServiceController(IExcelToImageService service)
        {
            excelService = service;
        }

        [HttpGet]
        [Route("[action]")]
        [Route("api/ExcelToImageService/ConvertExcelToImage")]
        public void ConvertExcelToImage(string fileName, string nameRange)
        {
            excelService.ConvertExcelToImage(fileName, nameRange);
        }
        //public void ConvertExcelToImage(string fileSourceExcelPath, string worksheetName, string frmCell, string toCell, string fileImageStorePath)
        //{
        //    excelService.ConvertExcelToImage(fileSourceExcelPath, worksheetName, frmCell, toCell, fileImageStorePath);
        //}

        public async Task<ActionResult<DocumentDTO>> saveExcelDocument(DocumentDTO _documentDTO)
        {
            var _parameters = new List<DocumentParameterDTO>();
            foreach (var item in _documentDTO.Parameters)
            {
                _parameters.Add(new DocumentParameterDTO{
                        DocumentId = _documentDTO.Id,
                        WidgetParameterId = item.WidgetParameterId,
                        Value = item.Value,
                        CreatedDate = DateTime.Now  
                });
            }
            return await Mediator.Send(new SaveExcelDocumentTemplateQuery(){
                Title = _documentDTO.Title,
                DocTemplateId = _documentDTO.DocTemplateId,
                Active = _documentDTO.Active,
                CreatedDate = DateTime.Now,
                ModifiedDate = DateTime.Now,
                Parameters = _parameters
            });
        }

    }
}