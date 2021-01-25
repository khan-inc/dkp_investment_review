using AutoMapper;
using DKP.InvestmentReview.Application.Common.Interfaces;
using DKP.InvestmentReview.Application.DocTemplates.Queries;
using DKP.InvestmentReview.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace DKP.InvestmentReview.Application.Document.Commands
{
    public class CreateDocumentCommand : IRequest<CreateDocumentDTO>
    {
        public CreateDocumentDTO Document { get; set; }
    }

    public class CreateDocumentCommandCommandHandler : IRequestHandler<CreateDocumentCommand, CreateDocumentDTO>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;

        public CreateDocumentCommandCommandHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<CreateDocumentDTO> Handle(CreateDocumentCommand request, CancellationToken cancellationToken)
        {
            var document = new Domain.Entities.Document
            {
                DocTemplateId = request.Document.DocTemplateId,
                Active = request.Document.Active,
                CreatedDate = request.Document.CreatedDate,
                ModifiedDate = request.Document.ModifiedDate
            };

            foreach (var item in request.Document.Parameters)
            {
                document.Parameters.Add(new DocumentParameter()
                {
                    Value = item.Value,
                    WidgetParameterId = item.WidgetParameterId
                });
            }

            _context.Documents.Add(document);
            await _context.SaveChangesAsync(cancellationToken);

            var createDocumentDTO = _mapper.Map<CreateDocumentDTO>(document);
            return createDocumentDTO;
        }
    }
}
