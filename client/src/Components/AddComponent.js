import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { callCuisine, postRecipe } from '../Actions/actions'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'



export class Add extends Component {
    state = {
        recipeName: '',
        cuisineName: '',
        instructions: '',
        ingredients: '',
        image: 0
    }
    componentDidMount = () => {
        this.props.callCuisine()
    }
    changeRecipeName = (val) => {
        this.setState({
            recipeName: val

        })
    }
    changeIngredients = (val) => {
        this.setState({
            ingredients: val
        })
    }
    changeInstructions = (val) => {
        this.setState({
            instructions: val
        })
    }
    changeImage = (file) => {
        this.setState({
            image: file

        })
    }
    changeCuisine = (val) => {
        this.setState({
            cuisineName: val

        })
    }
    postRecipe = () => {
        this.props.postRecipe(this.state.recipeName, this.state.cuisineName, this.state.instructions, this.state.ingredients, this.state.image)
    }
    render() {

        return (
            <div className="container">
                { (this.props.home)
                   ? <Redirect to='/home' />
                   : ""
                }
                <h3>ADD</h3>
                
                Recipe Name: <input className="form-control w-100 mb-3" type="text" onChange={(e) => this.changeRecipeName(e.target.value)} />
                Ingredients: <input className="form-control w-100 mb-3" type="text" onChange={(e) => this.changeIngredients(e.target.value)} />
                Instructions: <input className="form-control w-100 mb-3" type="text" onChange={(e) => this.changeInstructions(e.target.value)} />
                Image: <input className="form-control w-100 mb-3" type="file" onChange={(e) => this.changeImage(e.target.files[0])} />
                Cuisine: <select className="form-control w-100 mb-3" onChange={(e) => this.changeCuisine(e.target.value)}>
                    {this.props.cuisines.map((e, i) => {
                        return <option value={e.id} key={i}>{e.cuisineName}</option>
                    })}
                </select>
                <Button variant="outlined" color="blue" onClick={() => this.postRecipe()}>
                            ADD
                </Button>
                <Link to="/">

                <Button variant="outlined" color="blue" className="ml-5" onClick={() => this.postRecipe()}>
                            Back to Home
                </Button>
                </Link>


            </div>
        )
    }
}

const getState = (state) => {
    const {cuisines, home} = state
    return {
        cuisines: cuisines,
        home: home
    }
}

const changeState = (dispatch) => {
    return bindActionCreators({ callCuisine, postRecipe }, dispatch)
}

export default connect(getState, changeState)(Add)

