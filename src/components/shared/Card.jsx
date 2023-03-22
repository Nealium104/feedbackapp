import PropTypes from 'prop-types'

const Card = ({children, reverse, income}) => {
  return (
    <div className={`card ${reverse ? 'reverse' : ''}`}>
      <div className={income ? 'income' : ''}>{children}</div>
    </div>
  )
}

Card.defaultProps = {
  reverse: false,
  income: false,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
  income: PropTypes.bool,
}

export default Card