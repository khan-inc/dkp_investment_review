using DKP.InvestmentReview.Application.TodoLists.Queries.ExportTodos;
using System.Collections.Generic;

namespace DKP.InvestmentReview.Application.Common.Interfaces
{
    public interface ICsvFileBuilder
    {
        byte[] BuildTodoItemsFile(IEnumerable<TodoItemRecord> records);
    }
}
