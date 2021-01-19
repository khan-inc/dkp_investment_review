
using System.Collections.Generic;

namespace DKP.InvestmentReview.Domain.Entities
{
    public class DocTemplate
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IList<WidgetTemplate> Widgets { get; set; } = new List<WidgetTemplate>();
    }
}
