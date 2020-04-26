import React, { Component } from 'react'
import {BrowserRouter, Link, Route, Redirect} from 'react-router-dom'
import Recipies from './Components/RecipiesComponent'
import Add from './Components/AddComponent'
import Edit from './Components/EditComponent'
import Testing from './Components/Testing'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <Route path="/" exact><Redirect to ="/home"/></Route>
        <Route path="/home" component={Recipies} />
        <Route path="/com" component={Testing} />
        <Route path="/add" component={Add}/>
        <Route path="/edit" component={Edit}/>
      </BrowserRouter>
    )
  }
}


