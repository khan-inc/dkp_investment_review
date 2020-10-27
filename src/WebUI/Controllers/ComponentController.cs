using DKP.InvestmentReview.Application.ComponentTemplates;
using DKP.InvestmentReview.WebUI.Examples;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace DKP.InvestmentReview.WebUI.Controllers
{
    public class ComponentController : ApiController
    {
        private readonly BenchmarkReturnsComponentExampeService benchmarkReturnsExample;

        public ComponentController(BenchmarkReturnsComponentExampeService benchmarkReturnsExample)
        {
            this.benchmarkReturnsExample = benchmarkReturnsExample;
        }

        [HttpGet("template/{templateName}")]
        public Task<ComponentTemplate> GetBenchmarkReturnsComponent(string templateName)
        {
            //todo : for now its "Benchmarkreturns"
            return benchmarkReturnsExample.GetComponentTemplateAsync();
        }

        [HttpGet("uiTemplate/{uiTemplateName}")]
        [Produces("text/html")]
        public Task<string> GetComponentUiTemplate(string uiTemplateName)
        {
            return benchmarkReturnsExample.GetComponentUiTemplateAsync(uiTemplateName);
        }
    }
}
