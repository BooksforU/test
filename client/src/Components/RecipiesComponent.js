import React, { Component } from 'react'
import { connect } from 'react-redux'
import { callRecipies, selectEdit, setHome } from '../Actions/actions'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import CardMedia from '@material-ui/core/CardMedia';
import EditIcon from '@material-ui/icons/Edit';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import Button from '@material-ui/core/Button';


export class Recipies extends Component {
    componentDidMount = () => {
        this.props.callRecipies()
        this.props.setHome()

    }
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Recipies App</h3>
                <Link to="add">
                        <Button variant="outlined" color="blue">
                            ADD
                        </Button>
                            
                    </Link>
                    <br/>
                
                <div className="row">
                    {this.props.recipe.map((e, i) => {
                        return <div className="col-6" key={i}>
                            <div class="card mb-3 shadow" style={{ "max-width": "540px" }}>
                                <div class="row no-gutters">
                                    
                                        <CardMedia
                                                
                                                image="https://www.kindpng.com/picc/m/22-223965_no-profile-picture-icon-circle-member-icon-png.png"
                                                title="Paella dish"
                                          />
                                    
                                      
                                   
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <h5 class="card-title " style={{marginLeft:"40px"}}>Recipie-name:  {e.recipeName}</h5>
                                            <h6 class="card-subtitle mb-2 text-muted" style={{marginLeft:"40px"}}>{e.instructions}</h6>
                                            <ul style={{marginRight:"20px"}}>
                                                {e.ingredients.map((el, ind) => {
                                                   return <  li style={{ listStyleType: "none" }} key={ind}>{el}</li>
                                                })}
                                            </ul>
                                            
                                            <Link to="edit">
                                                
                                                <EditIcon onClick={() => this.props.selectEdit(e.id)}/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    })}
                        
                </div>

            </div>
        )
    }
}

const getState = (state) => {
    return {
        recipe: state.recipies
    }
}

const changeState = (dispatch) => {
    return bindActionCreators({ callRecipies, selectEdit, setHome }, dispatch)
}

export default connect(getState, changeState)(Recipies)
