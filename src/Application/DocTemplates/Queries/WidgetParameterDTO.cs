using DKP.InvestmentReview.Application.Common.Mappings;
using DKP.InvestmentReview.Domain.Entities;
using DKP.InvestmentReview.Domain.Enums;

namespace DKP.InvestmentReview.Application.DocTemplates.Queries
{
    public class WidgetParameterDTO : IMapFrom<WidgetParameter>{
        public int Id { get; set; }
        public string Name { get; set; }
        public ParameterType Type { get; set; }

        public bool IsRequired { get; set; }
        public int WidgetTemplateId { get; set; }
    }
}   