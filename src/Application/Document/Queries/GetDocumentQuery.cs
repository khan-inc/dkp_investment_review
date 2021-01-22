using AutoMapper;
using AutoMapper.QueryableExtensions;
using DKP.InvestmentReview.Application.Common.Interfaces;
using DKP.InvestmentReview.Application.DocTemplates.Queries;
using DKP.InvestmentReview.Domain.Enums;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace DKP.InvestmentReview.Application.Document.Queries
{
    public class GetDocumentQuery : IRequest<DocumentVM>
    {
        public int DocumentId { get; set; }
    }

    public class GetDocumentQueryHandler : IRequestHandler<GetDocumentQuery, DocumentVM>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GetDocumentQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<DocumentVM> Handle(GetDocumentQuery request, CancellationToken cancellationToken)
        {
            //var document = _context.Documents.Include(d => d.DocTemplate).ThenInclude(d => d.Widgets).ThenInclude(wid => wid.Parameters).Include(d => d.Parameters).First(d => d.Id == request.DocumentId);
            var document = _context.Documents.Include(d => d.Parameters).First(d => d.Id == request.DocumentId);
            var docTemplate = _context.DocTemplates.Include(d => d.Widgets).ThenInclude(w => w.Parameters).First(d => d.Id == document.DocTemplateId);

            var documentVM = new DocumentVM();

            if(document != null)
            {
                documentVM.docTemplateDTO = _mapper.Map<DocTemplateDto>(document.DocTemplate);
                documentVM.DocumentParameters = _mapper.Map<List<DocumentParameterDTO>>(document.Parameters).ToList();
            }

            return Task.FromResult<DocumentVM>(documentVM);
        }
    }
}
