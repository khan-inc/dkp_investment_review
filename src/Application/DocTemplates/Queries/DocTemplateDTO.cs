using DKP.InvestmentReview.Application.Common.Mappings;
using DKP.InvestmentReview.Domain.Entities;
using System.Collections.Generic;

namespace DKP.InvestmentReview.Application.DocTemplates.Queries
{
    public class DocTemplateDto : IMapFrom<DocTemplate>{
        public int Id { get; set; }
        public string Name { get; set; }
        public IList<WidgetDTO> Widgets { get; set; }
    }
}
