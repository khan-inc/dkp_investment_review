using DKP.InvestmentReview.Domain.Common;
using DKP.InvestmentReview.Domain.Entities;

namespace DKP.InvestmentReview.Domain.Events
{
    public class TodoItemCreatedEvent : DomainEvent
    {
        public TodoItemCreatedEvent(TodoItem item)
        {
            Item = item;
        }

        public TodoItem Item { get; }
    }
}
