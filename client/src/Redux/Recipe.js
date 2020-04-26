var initialState = {
    recipies : [],
    cuisines: [],
    editId: 0,
    editData : {},
    home: false

}

const recipeFunction = (state = initialState,  action) => {
    let stateCopy = JSON.parse(JSON.stringify(state))
    switch(action.type){
        default:
            return stateCopy
        case "get_recipe":
         stateCopy.recipies = action.payload
            return stateCopy
        case "get_cuisines":
         stateCopy.cuisines = action.payload
            return stateCopy
        case "add_recipe":
            return stateCopy
        case "get_edit":
         stateCopy.editId = action.payload
            let data = stateCopy.recipies.filter((e)=>{
                return e.id === stateCopy.editId
            })
         stateCopy.editData = data[0]
            return stateCopy
        case "done":
         stateCopy.home = true
            return stateCopy
        case "got_home":
         stateCopy.home = false
            return stateCopy

    }
} 

export default recipeFunction