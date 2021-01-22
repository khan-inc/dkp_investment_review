using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using DKP.InvestmentReview.Application.DocTemplates.Queries;
using DKP.InvestmentReview.Application.Document.Queries;
using Microsoft.AspNetCore.Http;
using System.IO;
using System.Linq;

using DKP.InvestmentReview.Application.Common.Interfaces;

namespace DKP.InvestmentReview.WebUI.Controllers
{
    public class DocumentController : ApiController{

        [Route("Upload")]
        [HttpPost]
        public async Task<IActionResult> UploadFile(IFormFile file)
        {
            var formCollection = await Request.ReadFormAsync();
            var fileData = formCollection.Files.First();
            var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), "Files");
            if (fileData.Length > 0)
            {
                var fullPath = Path.Combine(pathToSave, fileData.FileName);

                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    fileData.CopyTo(stream);
                }
                return Ok();
            }
            return BadRequest();
        }
        
        private IExcelToImageService excelService;
        public DocumentController(IExcelToImageService excelrvc) {
            excelService = excelrvc;
        }

        [HttpPost]
        public Task<ActionResult<DocTemplateDto>> CreateDocument(){
            // Step 1: Save document record in database
            // Step 2: Save Excel file in file system
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

    }
}