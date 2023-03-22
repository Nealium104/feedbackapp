function FeedbackStats({ feedback }) {
  
// Calc rating average
    let total = feedback.reduce((acc, cur) => {
        return acc + (cur.income ? cur.amount : -cur.amount);
    }, 0)

    total = total.toFixed(2)

    return (    
    <div className="feedback-stats">
        <h4>{feedback.length} Changes</h4>
        <h4>Total {isNaN(total) ? 0 : total}</h4>
    </div>
  )
}

export default FeedbackStats