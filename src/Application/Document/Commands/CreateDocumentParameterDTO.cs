using DKP.InvestmentReview.Application.Common.Mappings;
using DKP.InvestmentReview.Domain.Entities;

namespace DKP.InvestmentReview.Application.Document.Commands
{
    public class CreateDocumentParameterDTO : IMapFrom<DocumentParameter>
    {
        public int Id { get; set; }
        public int WidgetParameterId { get; set; }

        public string WidgetParameterName { get; set; }
        public string Value { get; set; }
    }
}