import React, { Component } from 'react'
import Calendar from './Components/Calendar'
import Inputs from './Components/Input'
import Cards from './Components/Cards'
import { connect } from 'react-redux'
import {loadCards, unreload} from './Actions/actions'
import { bindActionCreators } from 'redux'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';


class App extends Component {
  
  componentDidMount = () => {
    this.props.loadCards(this.props.date)
    this.props.unreload()
  }
  componentDidUpdate = (prevProps, prevState) => {
    if(prevProps.date != this.props.date){
      this.componentDidMount()
    }

    if(this.props.reload){
      this.componentDidMount()
    }
    if(this.props.error){
      alert("Task has already been assigned in this time slot")
    }
    
  }
  render() {
    return (
      <div className="col">
        <h4 className="text-center mt-2"><CalendarTodayIcon/>Meeting calendar</h4>
        <div className="row">
          <div className="col-3 mt-5 shadow ">
            <Calendar />
            <Inputs/>
          
          </div>
          <div className="col-9 mt-5">
            <div className="row">
                {this.props.cards.map((e,i)=>{
                  return <div key="i" className="col-3 ml-2 ">
                    <Cards elem={e} index={i} />
                  </div>
                })}
              
            </div>
          </div>
        </div>
      </div>

    )
  }
}


const getState = (state) => {
  return {
      date: state.date,
      cards: state.cards,
      reload: state.reload,
      error:state.error

  }
}
const changeState = (dispatch) => {
  return bindActionCreators({loadCards, unreload}, dispatch)
}


export default connect(getState, changeState)(App)
