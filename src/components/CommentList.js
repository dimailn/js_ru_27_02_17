import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import { loadAllComments } from '../AC/'
import { connect } from 'react-redux'
import Loader from './Loader'

class CommentList extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired
    }

    componentDidUpdate() {
        this.size = this.container.getBoundingClientRect()
    }

    render() {
        const {isOpen, toggleOpen} = this.props
//        console.log('---', this.size)
        return (
            <div ref={this.getContainerRef}>
                <a href="#" onClick={this.toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
                {this.getBody()}
            </div>
        )
    }

    toggleOpen = (e) => {
        this.props.toggleOpen(e)
        if(!this.props.loaded) this.props.loadAllComments()
    }

    getContainerRef = (ref) => {
        this.container = ref
        if (ref) {
            this.size = ref.getBoundingClientRect()
        }
    }

    getBody() {
        const {article, isOpen, loading} = this.props
        if (!isOpen) return null

        if (loading) return <Loader />

        if (!article.comments || !article.comments.length) {
            return <div>
                <h3>
                    No comments yet
                </h3>
                <NewCommentForm articleId={article.id} />
            </div>
        }

        const commentItems = article.comments.map(id => <li key={id}><Comment id={id} /></li>)
        return (
            <div>
                <ul>
                    {commentItems}
                </ul>
                <NewCommentForm articleId={article.id} />
            </div>
        )
    }
}

const mapStateToProps = (state) => { 
    return {
        loading: state.comments.loading,
        //ты загрузил для одной статьи, а если вторую откроешь?
        loaded: state.comments.loaded
    }
}
export default connect(mapStateToProps, { loadAllComments })(toggleOpen(CommentList))
