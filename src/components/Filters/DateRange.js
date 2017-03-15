import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import {connect} from 'react-redux'
import {updateFilter} from  '../../AC'

class DateRange extends Component {

    handleDayClick = (day) => {
        this.props.updateFilter(DateUtils.addDayToRange(day, this.props.filter))
    }

    render() {
        const { from, to } = this.props.filter;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return { filter: state.filter }
}


export default connect(mapStateToProps, { updateFilter })(DateRange)