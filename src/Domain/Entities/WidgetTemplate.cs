
using System.Collections.Generic;

namespace DKP.InvestmentReview.Domain.Entities
{
    public class WidgetTemplate
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int DocTemplateId { get; set; }
        public DocTemplate DocTemplate { get; set; }
        public IList<WidgetParameter> Parameters { get; set; } = new List<WidgetParameter>();
    }
}
