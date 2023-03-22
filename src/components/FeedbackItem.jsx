import { FaTimes } from 'react-icons/fa'
import Card from "./shared/Card"
import PropTypes from 'prop-types'

function FeedbackItem({item, handleDelete}) {
  return (
    <Card income={item.income}>
        <div className="num-display">{item.amount}</div>
        <button onClick={() => handleDelete(item.id)} className="close">
          <FaTimes color='black' />
        </button>
        <div className="text-display">{item.description}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem