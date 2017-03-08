import React, {PropTypes} from 'react'

function Comment(props) {
    const { text, user } = props.comment
    return (
        <div>
            <p>{text} <b>by {user}</b></p>
        </div>
    )
}

Comment.propTypes = {
  text: PropTypes.string,
  user: PropTypes.string
}

export default Comment