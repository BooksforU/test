let initialState = {
    date : String(new Date().toDateString()),
    cards : [],
    reload : false,
    error: false
}

function appReducer(state=initialState, action){
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type){
        default:
            return newState
        case "set_date":
            newState.date = action.payload
            return newState
        case "load_cards":
            console.log(action.payload)
            newState.cards = action.payload
            return newState
        case "done":
            newState.reload = true
            newState.error=false
            return newState
        case "unreload":
            newState.reload = false
            return newState
        case "error":
            newState.error = true
            return newState
    
    }
}

export default appReducer