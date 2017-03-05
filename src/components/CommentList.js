import React, {Component} from 'react'
import Comment from './Comment'
class CommentList extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: true
        }
    }

    render() {
        const comments = this.props.comments || []
        const commentsBody = comments.map((comment) => <Comment comment={comment} key={comment.id}/>)
        const nothing = <p>Здесь пока ничего нет. Ваш комментарий будет первым.</p>
        const body = commentsBody.length ? commentsBody : nothing
        const toggleButtonText = this.state.isOpen ? 'Скрыть комментарии' : 'Показать комментарии'
        
        const commentsBlock = <div>
            <h4>Комментарии</h4>
            {body}
        </div>
        
        return (
            <div>
                <br/>
                <button onClick={this.toggleComments}>{toggleButtonText}</button>
                {this.state.isOpen ? commentsBlock : null}
            </div>
        )
    }

    toggleComments = ()=> {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList