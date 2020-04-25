import React, { Component } from 'react'
import axios from 'axios'

class Concierge extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    // Set the state directly. Use props if necessary.
    this.state = {
      name1:[],
      name: '',
      ingredients:'',
      instructions:''
    }
    this.handleChange = event => {
      this.setState({ name: event.target.value });
    }
   
    this.handleChange1 = event  => {
      this.setState({ ingredients: event.target.value });
    }
    this.handleChange2 = event => {
      this.setState({ instructions: event.target.value });
    }
    this.handleSubmit = event => {
      event.preventDefault();
  
      const Add = {
        
      };
      console.log(Add)
      
      axios.post(`http://localhost:5000/api/recipes`, { 
        name: this.state.name,
        ingredients:this.state.ingredients,
        instructions:this.state.instructions })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
    
  }
    

  componentDidMount(){
    axios.get(` http://localhost:5000/api/cuisines/all`)
    .then(res=>{
      console.log(res)
      
      const name = res.data;
      console.log(name)
      
      this.setState({
        name
      })
      console.log(this.state)
    })
    console.log(this.state.name)
  }
  render() {
    return (
      <div  className="container">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
         <form onSubmit={this.handleSubmit}>
            <h1>Add -</h1>
            <p>Name:</p>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              
            />
            <br/>
            <p>ingredients:</p>
            <input
              type="text"
              
              onChange={this.handleChange1}
            />
            <br/>
            <p>instructions:</p>
            <input
              
              onChange={this.handleChange2}
            />
            <br/>
            <p></p>
            <select>
                {this.state.name1.map(ele=>{
                 return  <option value= {ele.name}>{ele.name}</option>
                })}
            </select>
            <p></p>
            <button  className="btn btn-info form-inline">ADD</button>
          </form>
     
        
      </div>
    )
  }
}
export default Concierge

