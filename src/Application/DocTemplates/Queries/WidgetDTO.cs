using DKP.InvestmentReview.Application.Common.Mappings;
using DKP.InvestmentReview.Domain.Entities;
using System.Collections.Generic;

namespace DKP.InvestmentReview.Application.DocTemplates.Queries
{
    public class WidgetDTO : IMapFrom<WidgetTemplate>{
        public int Id { get; set; }
        public string Name { get; set; }
        public int DocTemplateId { get; set; }
        public IEnumerable<WidgetParameterDTO> Parameters { get; set; }
    }
}