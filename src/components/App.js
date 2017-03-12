import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList/index'
import Chart from './Chart'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, {DateUtils} from "react-day-picker"
import "react-day-picker/lib/style.css"

class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        text: '',
        selected: null,
        from: null,
        to: null
    }

    render() {
        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        const { from, to } = this.state
        return (
            <div>
                Enter your name: <input type="text" value={this.state.text} onChange={this.handleTextChange}/>
                <Select options = {options} value={this.state.selected} onChange = {this.handleSelectChange} multi/>
                <DayPicker numberOfMonths={2} selectedDays={ [from, { from, to }] } initialMonth={ new Date(2017, 1) } onDayClick={this.handleDayClick}/>
                <span>{this.state.from && "From " + this.state.from.toString()}</span>
                <span>{this.state.to && " to " + this.state.to.toString()}</span>
                <ArticleList articles={this.props.articles}/>
                <Chart articles={this.props.articles}/>
            </div>
        )
    }

    handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }

    handleSelectChange = selected => {
        this.setState({ selected })
    }

    handleTextChange = ev => {
        if (ev.target.value.length > 10) return

        this.setState({
            text: ev.target.value
        })
    }
}

export default App