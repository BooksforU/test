import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Cards extends Component {
    render() {
        return (
    
            <div className="card  mb-3  shadow" style={{"minHeight": "18rem", "maxHeight": "15rem"}}>
            <div className="card-header bg-transparent border-danger text-center "><span className="float-left">{this.props.elem.date},{this.props.elem.time}</span></div>
            <strong className="ml-3">{this.props.elem.title}</strong>
            <div className="card-body text-danger">
            <h5 className="card-title mr-2">{this.props.elem.people.map((elem)=>{
                return <span className="badge badge-danger mr-2">{elem} </span>
            })}</h5>
            <p className="card-text text-dark">{this.props.elem.info}</p>   
            </div>
            <div className="card-footer bg-transparent border-info">Meeting Link: <a href={this.props.elem.link}  className="card-link">{this.props.elem.link}</a></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)