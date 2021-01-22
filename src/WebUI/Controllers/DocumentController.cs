using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using DKP.InvestmentReview.Application.DocTemplates.Queries;
using DKP.InvestmentReview.Application.Document.Queries;
using Microsoft.AspNetCore.Http;
using System.IO;
using System.Linq;

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

        [HttpPost]
        public Task<ActionResult<DocTemplateDto>> CreateDocument(){
            // Step 1: Save document record in database
            // Step 2: Save Excel file in file system
            // Step 3: Process Excel file to generate the image
            return null;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<DocumentVM>> GetDocument(int id){
            return await Mediator.Send(new GetDocumentQuery(){DocumentId = id});
        }

        [HttpGet("{docId}")]
        public async Task<ActionResult<DocumentDTO>> GetDocumentDTO(int docId)
        {
            return null;
        }
    }
}