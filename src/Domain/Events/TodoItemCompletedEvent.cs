using DKP.InvestmentReview.Domain.Common;
using DKP.InvestmentReview.Domain.Entities;

namespace DKP.InvestmentReview.Domain.Events
{
    public class TodoItemCompletedEvent : DomainEvent
    {
        public TodoItemCompletedEvent(TodoItem item)
        {
            Item = item;
        }

        public TodoItem Item { get; }
    }
}
