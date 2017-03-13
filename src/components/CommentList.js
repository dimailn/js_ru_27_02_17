import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {

    static propTypes = {
        comments: PropTypes.array
    }

    static defaultProps = {
        comments: []
    }

    componentDidUpdate() {
        this.size = this.container.getBoundingClientRect()
    }

    //форму стоит вынести в отдельный компонент
    state = {
        name: '',
        comment: ''
    }

    render() {
        const {isOpen, toggleOpen} = this.props
//        console.log('---', this.size)
        return (
            <div ref={this.getContainerRef}>
                <a href="#" onClick={toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
                <br />
                Имя <input value={this.state.name} onChange={this.handleChangeName} />
                <br />
                Комментарий <textarea value={this.state.comment} onChange={this.handleChangeComment}/>
                {this.getBody()}
            </div>
        )
    }

    handleChangeName = ev => {
        const name = ev.target.value
        if(name.length > 10) return
        this.setState(
            {
                name: name,
                comment: this.state.comment
            }
        )
    }

    handleChangeComment = ev => {
        const comment = ev.target.value
        if(comment.length > 150) return
        this.setState(
            {
                name: this.state.name,
                comment: comment
            }
        )
    }

    getContainerRef = (ref) => {
        this.container = ref
        if (ref) {
            this.size = ref.getBoundingClientRect()
        }
    }

    getBody() {
        const {comments, isOpen} = this.props
        if (!isOpen) return null

        if (!comments.length) {
            return <div>
                <h3>
                    No comments yet
                </h3>
            </div>
        }

        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)
        return (
            <div>
                <ul>
                    {commentItems}
                </ul>
            </div>
        )
    }
}

export default toggleOpen(CommentList)
