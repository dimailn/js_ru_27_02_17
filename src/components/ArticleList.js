import React, {PropTypes, Component} from 'react'
import Article from './Article'
import accordeon from './../decorators/accordeon.js'



class ArticleList extends Component {

    render() {
      return this.renderBody(this.props.enumerableComponent)
    }

    renderBody = (enumerableComponent = this.enumerableComponent) => {
      const {articles} = this.props

      const articleComponents = articles.map(article => <li key={article.id}>
        { enumerableComponent(article) }
      </li>)

      return (
          <ul>
              {articleComponents}
          </ul>
      )
      
    }

    enumerableComponent(article) {
      return (
        <Article article={article}
           isOpen={true}/>
      )
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    enumerableComponent: PropTypes.func
}

export default accordeon(ArticleList)