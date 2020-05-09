import React, { Component } from 'react'
import Calendarbox from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { connect } from 'react-redux'
import { setDate } from '../Actions/actions'
import { bindActionCreators } from 'redux'

class Calendar extends Component {

  render() {
    return (
      <div>
        <Calendarbox onChange={(date) => this.props.setDate(date)} />
      </div>
    )
  }
}


const getState = (state) => {
  return {
    date: state.date

  }
}
const changeState = (dispatch) => {
  return bindActionCreators({ setDate }, dispatch)
}


export default connect(getState, changeState)(Calendar)