// using DKP.InvestmentReview.Application.Common.Interfaces;
// using DKP.InvestmentReview.Domain.Entities;
// using MediatR;
// using System.Collections.Generic;
// using System.Threading;
// using System.Threading.Tasks;

// namespace DKP.InvestmentReview.Application.Document.Commands
// {
//     public class CreateDocumentCommand : IRequest<int>
//     {
//         public string Title { get; set; }
//         IList<DocumentParameterDTO> Parameters;
//     }

//     public class CreateDocumentCommandCommandHandler : IRequestHandler<CreateDocumentCommand, int>
//     {
//         private readonly IApplicationDbContext _context;

//         public CreateDocumentCommandCommandHandler(IApplicationDbContext context)
//         {
//             _context = context;
//         }

//         public async Task<int> Handle(CreateDocumentCommand request, CancellationToken cancellationToken)
//         {
//             // var entity = new TodoList();

//             // entity.Title = request.Title;

//             // _context.TodoLists.Add(entity);

//             // await _context.SaveChangesAsync(cancellationToken);

//             return 0;
//         }
//     }
// }
