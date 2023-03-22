import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'

function FeedbackList({feedback, handleDelete}) {
    if(!feedback || feedback.length === 0 ){
        return <p>No feedback yet</p>
    }

  return (
    <div className="feedback-list">
        {feedback.map((item) => (
            <FeedbackItem 
            key={item.id} 
            item={item} 
            handleDelete={handleDelete}/>
        ))}
    </div>
  )

}


// You can set proptypes to just an array "feedback: PropTypes.array", but this shows you how to define the actual shape of the
FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      recurring: PropTypes.bool.isRequired,
    })
  )
}

export default FeedbackList