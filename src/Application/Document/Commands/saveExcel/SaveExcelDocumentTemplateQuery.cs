using AutoMapper;
using DKP.InvestmentReview.Application.Common.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using DKP.InvestmentReview.Domain.Entities;
using System.Collections;
using System.Collections.Generic;
using System;
using DKP.InvestmentReview.Application.Document.Queries;
using DKP.InvestmentReview.Application.DocTemplates.Queries;
namespace DKP.InvestmentReview.Application.Document.Commands.saveExcel
{
    public class SaveExcelDocumentTemplateQuery :IRequest<DocumentDTO>
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int DocTemplateId { get; set; }
        public bool Active { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
       public IList<DocumentParameterDTO> Parameters { get; set; }
    }

    public class SaveExcelDocumentTemplateQueryHandler : IRequestHandler<SaveExcelDocumentTemplateQuery, DocumentDTO>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;  
        public SaveExcelDocumentTemplateQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
             _mapper = mapper;
        }

        public async Task<DocumentDTO> Handle(SaveExcelDocumentTemplateQuery request, CancellationToken cancellationToken)
        {
            var entity = new DocumentDTO
            {
                Title = request.Title,
                DocTemplateId =request.DocTemplateId,
                Active =request.Active,
                CreatedDate =request.CreatedDate,
                ModifiedDate =request.ModifiedDate,
            };
            foreach (var item in request.Parameters)
            {
                entity.Parameters.Add(new DocumentParameterDTO{
                        DocumentId = entity.Id,
                        WidgetParameterId = item.WidgetParameterId,
                        Value = item.Value,
                        CreatedDate = item.CreatedDate
                });
            }

            var _dataSaving = _mapper.Map<DKP.InvestmentReview.Domain.Entities.Document>(entity);
            _context.Documents.Add(_dataSaving);
             await _context.SaveChangesAsync(cancellationToken);
            return await Task.FromResult(_mapper.Map<DocumentDTO>(_dataSaving));
        }
    }
}