using DKP.InvestmentReview.Application.ComponentTemplates;
using System;
using System.Collections.ObjectModel;
using System.Threading.Tasks;

namespace DKP.InvestmentReview.WebUI.Examples
{
    public class BenchmarkReturnsComponentExampeService
    {
        public Task<ComponentTemplate> GetComponentTemplateAsync()
        {
            var ct = new ComponentTemplate
            {
                Id = 123,
                ComponentName = "BenchmarkReturns",
                Parameters = new Collection<Parameter> {
                    new Parameter { Id = 1, Name = "AccountName", Type = ParameterTypeConstants.STRING, Value = null },
                    new Parameter { Id = 2, Name = "StartDate", Type = ParameterTypeConstants.DATETIME, Value = null },
                    new Parameter { Id = 3, Name = "EndDate", Type = ParameterTypeConstants.DATETIME, Value = null },
                    new Parameter { Id = 4, Name = "Frequency", Type = ParameterTypeConstants.STRING, Value = null }
                },
                DataSets = new Collection<DataSet> {
                    new DataSet { Id = 1, Fields = new Collection<string> { "BenchmarkName", "ReturnEndDate", "BenchmarkReturn" }, Name = "BenchmarkReturnDataSet" }
                },
                UiTemplates = new Collection<string> {
                    @"barChartTemplate",
                    @"pieChartTemplate",
                }
            };
            return Task.FromResult(ct);
        }

        internal Task<string> GetComponentUiTemplateAsync(string uiTemplateName)
        {
            var currentDir = Environment.CurrentDirectory;
            var html = System.IO.File.ReadAllText($@"{currentDir}\ui-templates\BenchmarkReturns\{uiTemplateName}.html");

            return Task.FromResult(html);
        }
    }
}
