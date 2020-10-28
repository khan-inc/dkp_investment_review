
using System.Collections.Generic;

namespace DKP.InvestmentReview.Domain.Entities
{
    public class DocumentTemplate
    {
        public int Id { get; set; }
        public string TemplateName { get; set; }
        public string ComponentName { get; set; }
        public bool IsActive { get; set; }
        public ICollection<Parameter> Parameters { get; set; }
        public ICollection<ComponentTemplate> Components { get; set; }
    }
}
