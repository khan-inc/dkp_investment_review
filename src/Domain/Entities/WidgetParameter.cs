using DKP.InvestmentReview.Domain.Enums;

namespace DKP.InvestmentReview.Domain.Entities
{
    public class WidgetParameter
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ParameterType Type { get; set; }

        public bool IsRequired { get; set; }
        public int WidgetTemplateId { get; set; }
        public WidgetTemplate WidgetTemplate { get; set; }
    }
}