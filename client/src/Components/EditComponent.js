import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { callCuisine, updateRecipe } from '../Actions/actions'
import { Redirect,Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

export class Edit extends Component {
    state = {
        recipeName: this.props.recipe.recipeName,
        cuisineName: this.props.recipe.cuisineId,
        instructions: this.props.recipe.instructions,
        ingredients: this.props.recipe.ingredients.join(),
        image: null
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
    updateRecipe = () => {
        this.props.updateRecipe(this.state.recipeName, this.state.cuisineName, this.state.instructions, this.state.ingredients, this.state.image, this.props.recipe.id)
    }
    render() {
        return (
            <div className="container">
                { (this.props.home)
                   ? <Redirect to='/home' />
                   : ""
                }

                <h3>Edit</h3>


                Recipe Name: <input className="form-control w-100 mb-3" type="text" value={this.state.recipeName} onChange={(e) => this.changeRecipeName(e.target.value)} />
                Ingredients: <input className="form-control w-100 mb-3" type="text" value={this.state.ingredients} onChange={(e) => this.changeIngredients(e.target.value)} />
                Instructions: <input className="form-control w-100 mb-3" type="text" value={this.state.instructions} onChange={(e) => this.changeInstructions(e.target.value)} />
                Image: <input className="form-control w-100 mb-3" type="file" onChange={(e) => this.changeImage(e.target.files[0])} />
                Cuisine: <select className="form-control w-100 mb-3" value={this.state.cuisineName} onChange={(e) => this.changeCuisine(e.target.value)} >
                    {this.props.cuisines.map((e, i) => {
                        return <option value={e.id} key={i}>{e.cuisineName}</option>
                    })}
                </select>
                <Button variant="outlined" color="blue" onClick={() => this.updateRecipe()}>
                Edit
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
    const {editData, cuisines, home} = state
    return {
        recipe: editData,
        cuisines: cuisines,
        home: home
    }
}

const changeState = (dispatch) => {
    return bindActionCreators({ callCuisine, updateRecipe }, dispatch)
}

export default connect(getState, changeState)(Edit)

