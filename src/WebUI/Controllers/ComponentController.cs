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

        [HttpGet("benchmarkReturns")]
        public Task<ComponentTemplate> GetBenchmarkReturnsComponent()
        {
            return benchmarkReturnsExample.GetComponentTemplateAsync();
        }
    }
}
