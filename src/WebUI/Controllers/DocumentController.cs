using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using DKP.InvestmentReview.Application.DocTemplates.Queries;
using DKP.InvestmentReview.Application.Document.Commands;

namespace DKP.InvestmentReview.WebUI.Controllers
{
    public class DocumentController : ApiController{
        
        [HttpPost]
        public Task<ActionResult<DocTemplateDto>> CreateDocument(){
            // Step 1: Save document record in database
            // Step 2: Save Excel file in file system
            // Step 3: Process Excel file to generate the image
            return null;
        }
    }
}