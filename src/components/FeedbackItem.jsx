import { useState } from "react"
import { FaTimes } from 'react-icons/fa'
import Card from "./shared/Card"
import PropTypes from 'prop-types'

function FeedbackItem({item}) {
  return (
    <Card>
        <div className="num-display">{item.amount}</div>
        <button onClick={() => console.log(item.id)} className="close">
          <FaTimes color='black' />
        </button>
        <div className="text-display">{item.description}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem