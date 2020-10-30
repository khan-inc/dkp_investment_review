
using DKP.InvestmentReview.Application.Components.Queries;
using DKP.InvestmentReview.Application.Components.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace DKP.InvestmentReview.WebUI.Controllers
{
    public class ComponentController : ApiController
    {

        [HttpGet("template/{componentName}")]
        public Task<ComponentTemplate> GetComponent(ComponentsEnum componentName)
        {
            string templateName = componentName.ToString();
            return Mediator.Send(new GetComponentQuery(templateName));
        }

        [HttpGet("template/uiTemplate/{componentName}/{uiTemplateName}")]
        public Task<string> GetComponentUiTemplate(ComponentsEnum componentName, string uiTemplateName)
        {
            string templateName = componentName.ToString();

            return Mediator.Send(new GetComponentUiQuery(templateName, uiTemplateName));
        }
    }

    public enum ComponentsEnum
    { 
        BenchmarkReturns,
        CapitalStack
    }
    
}
