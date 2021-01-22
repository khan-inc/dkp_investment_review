using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using DKP.InvestmentReview.Application.DocTemplates.Queries;
using DKP.InvestmentReview.Application.Document.Queries;
using Microsoft.AspNetCore.Http;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;


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
            /////////////////////////////////////////////////////////
            // Step 3: Process Excel file to generate the image
            return null;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<DocumentVM>> GetDocument(int id){
            return await Mediator.Send(new GetDocumentQuery(){DocumentId = id});
        }

    }
}