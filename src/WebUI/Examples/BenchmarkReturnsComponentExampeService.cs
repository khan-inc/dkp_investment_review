using DKP.InvestmentReview.Application.ComponentTemplates;
using System.Collections.ObjectModel;
using System.Threading.Tasks;

namespace DKP.InvestmentReview.WebUI.Examples
{
    public class BenchmarkReturnsComponentExampeService
    {
        public Task<ComponentTemplate> GetComponentTemplateAsync()
        {
            return Task.FromResult(new ComponentTemplate
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
                    new DataSet { Id = 1, Fields = { "BenchmarkName", "ReturnEndDate", "BenchmarkReturn" }, Name = "BenchmarkReturnDataSet" }
                }
            });
        }
    }
}
