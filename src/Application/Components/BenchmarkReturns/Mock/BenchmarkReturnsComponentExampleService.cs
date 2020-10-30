using DKP.InvestmentReview.Application.Components.Models;
using System;
using System.Collections.ObjectModel;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace DKP.InvestmentReview.Application.Components.Mock
{

    public class BenchmarkReturnsComponentExampleService : IComponentService
    {
        public string ServiceName => "BenchmarkReturns";

        public Task<ComponentTemplate> GetComponentTemplateAsync(CancellationToken cancellationToken)
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
                    new DataSet {
                        Id = 1,
                        Fields = new Collection<string> { "BenchmarkName", "ReturnEndDate", "BenchmarkReturn" },
                        Name = "BenchmarkReturnDataSet" }
                },
                UiTemplates = new Collection<string> {
                    "barChartTemplate",
                    "pieChartTemplate"
                }
            };
            return Task.FromResult(ct);
        }

        public Task<string> GetComponentUiTemplateAsync(string uiTemplateName, CancellationToken cancellationToken)
        {
            var uiTemplatePath = $@"{Environment.CurrentDirectory}\ui-templates\BenchmarkReturns\{uiTemplateName}.html";

            if (!File.Exists(uiTemplatePath))
                throw new InvalidOperationException($"Unknown ui template \"{uiTemplateName}\"");

            var html = File.ReadAllText(uiTemplatePath);
            return Task.FromResult(html);
        }
    }
}
