
using System.Collections.Generic;

namespace DKP.InvestmentReview.Application.ComponentTemplates
{
    public class ComponentTemplate
    {
        public int Id { get; set; }
        public string TemplateName { get; set; }
        public string ComponentName { get; set; }
        public ICollection<Parameter> Parameters { get; set; }
        public ICollection<DataSet> DataSets { get; set; }
        public ICollection<string> UiTemplates { get; set; }
    }
}
