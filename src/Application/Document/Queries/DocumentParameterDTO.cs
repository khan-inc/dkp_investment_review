using DKP.InvestmentReview.Domain.Entities;
using DKP.InvestmentReview.Application.Common.Mappings;

namespace DKP.InvestmentReview.Application.Document.Queries
{
    public class DocumentParameterDTO : IMapFrom<DocumentParameter>
    {
        public int Id { get; set; }
        public int WidgetPArameterId { get; set; }
        public string Value { get; set; }        
    }
}