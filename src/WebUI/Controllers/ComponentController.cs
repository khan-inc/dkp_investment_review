
using DKP.InvestmentReview.Application.Components.Queries;
using DKP.InvestmentReview.Application.Components.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace DKP.InvestmentReview.WebUI.Controllers
{
    public class ComponentController : ApiController
    {

        [HttpGet("template/{templateName}")]
        public Task<ComponentTemplate> GetComponent(string templateName)
        {
            return Mediator.Send(new GetComponentQuery(templateName));
        }

        [HttpGet("template/uiTemplate/{templateName}/{uiTemplateName}")]
        public Task<string> GetComponentUiTemplate(string templateName, string uiTemplateName)
        {
            return Mediator.Send(new GetComponentUiQuery(templateName, uiTemplateName));
        }
    }
}
