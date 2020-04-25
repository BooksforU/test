import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getList
} from '../Actions/action'
import { Link } from 'react-router-dom'

class List extends Component {
  

    componentDidMount() {
        this.props.getList()
    }

    render() {
      console.log("hello",this.props.list)
      return (

        <div >
        <br/>   
        <br/>
        <br/>        
        <br/>
        <br/>
     


          
            {this.props.list.map((elem, index) => {

                
                return <div key={index}  className="card border-success text-center bg-dark shadow mt-5 col-2 mx-5 my-3 py-3 hey">
            <div className="card-header bg-transparent border-success text-success">Name:{elem.name}</div>
                <div className="card-body text-success">
            <h5 className="card-title">Ingredients</h5>
            <p className="card-text"> {elem.ingredients}</p>
                </div>
                <div className="card-footer bg-transparent border-success text-success">instructions=> {elem.instructions}</div>
                  </div> 
                
            

            })}

         <div className="col-3 offset-1 my-3">
         
        </div>
</div>
    )

    }
}

const getState = (state) => {

    console.log(state)

    return {
        list: state.list.list,
    }

}

const changeState = (dispatch) => {

    return bindActionCreators({
      getList

    }, dispatch)

}

export default connect(getState, changeState)(List)