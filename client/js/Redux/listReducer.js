import { createStore } from 'redux'

let listState = {
    list:[],
}

export function listReducer(state=listState,action){
  

    let stateCopy = JSON.parse(JSON.stringify(state))

   
    switch (action.type) {
        case "list-fetch":
            
            stateCopy.list = action.payload
            console.log(stateCopy)
            return stateCopy
        default:
            return stateCopy

    }

}




const store = createStore(listReducer)

export default store