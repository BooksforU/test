import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addCard} from '../Actions/actions'
import { bindActionCreators } from 'redux'


class Inputs extends Component {
    state = {
        date: "",
        time : "12:00",
        title : "",
        link: "",
        people: "",
        info: ""
    }
    clicked=()=>{
        this.props.addCard(this.state, this.props.date)
        this.setState({
            date: "",
            time : "12:00",
            title : "",
            link: "",
            people: "",
            info: ""
        })
    }


    render() {
        return (
            <div className="mt-3">
                <input className="form-control m-1" value={this.state.time} onChange={(e)=>this.setState({time: e.target.value})} type="time"/>
                <input className="form-control m-1" value={this.state.title} onChange={(e)=>this.setState({title: e.target.value})} type="text" placeholder="Title"/>
                <input className="form-control m-1" value={this.state.link} onChange={(e)=>this.setState({link: e.target.value})} type="text" placeholder="Link"/>
                <input className="form-control m-1" value={this.state.people} onChange={(e)=>this.setState({people: e.target.value})} type="text" placeholder="Users"/>
                <textarea className="form-control m-1" value={this.state.info} onChange={(e)=>this.setState({info: e.target.value})} placeholder="Info"></textarea>
                <button className="btn btn-danger  m-1" onClick={()=>this.clicked()}>Add</button>

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
    return bindActionCreators({addCard}, dispatch)
}


export default connect(getState, changeState)(Inputs)