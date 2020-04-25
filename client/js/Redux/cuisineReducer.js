import { createStore } from 'redux'

let CuisinState = {
    Cuisin:[],
}

export function CuisinReducer(state=CuisinState,action){
  

    let stateCopy = JSON.parse(JSON.stringify(state))

   
    switch (action.type) {
        case "cuisins-fetch":
            
            stateCopy.Cuisin = action.payload
            console.log(stateCopy)
            return stateCopy
        default:
            return stateCopy

    }

}




const store = createStore(listReducer)

export default store