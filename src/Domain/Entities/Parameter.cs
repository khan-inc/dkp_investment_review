namespace DKP.InvestmentReview.Domain.Entities
{
    public class Parameter
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public object Value { get; set; }
    }
}