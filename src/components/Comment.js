import React, {Component} from 'react'

//Это можно сделать Functional Component, по возможности используй их
class Comment extends Component
{
  constructor() {
    super()
  }

  render(){
    const {comment} = this.props
    return (
      <div>
        <h5> { comment.user } </h5>
        <span> { comment.text } </span>
      </div>
    )
  }
}

export default Comment
