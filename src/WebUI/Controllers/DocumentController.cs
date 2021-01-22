using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using DKP.InvestmentReview.Application.DocTemplates.Queries;

using DKP.InvestmentReview.Application.Common.Interfaces;

namespace DKP.InvestmentReview.WebUI.Controllers
{
    public class DocumentController : ApiController{

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