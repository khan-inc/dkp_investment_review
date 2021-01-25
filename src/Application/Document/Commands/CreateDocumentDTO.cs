using DKP.InvestmentReview.Application.Common.Mappings;
using DKP.InvestmentReview.Application.DocTemplates.Queries;
using System;
using System.Collections.Generic;

namespace DKP.InvestmentReview.Application.Document.Commands
{
    public class CreateDocumentDTO : IMapFrom<Domain.Entities.Document>
    {
        public int Id { get; set; }

        //public DocTemplateDto DocTemplateDTO { get; set; }
        public int DocTemplateId { get; set; }
        public bool Active { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public IList<CreateDocumentParameterDTO> Parameters { get; set; }
    }
}