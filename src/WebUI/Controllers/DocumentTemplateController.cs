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
        
        [HttpGet]
        public async Task<ActionResult<List<pptLinkTemplateDTO>>> GetPPTTemplate(){
            return await Mediator.Send(new GetPPTTemplateQuery());

        [HttpGet]
        public async Task<ActionResult<List<DocTemplateListDTO>>> Get(){
            return await Mediator.Send(new GetDocTemplateListQuery());
        }
    }
}