using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using DKP.InvestmentReview.Application.DocTemplates.Queries;

namespace DKP.InvestmentReview.WebUI.Controllers
{
    public class DocumentTemplateController : ApiController{
        
        [HttpGet("{id}")]
        public async Task<ActionResult<DocTemplateDto>> GetDocument(int id){
            return await Mediator.Send(new GetDocTemplateQuery(){DocumentTemplateId = id});
        }
    }
}