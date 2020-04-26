import axios from 'axios'

export const callRecipies = () => {
    let req = axios.get('http://localhost:3001/recipe')
    return dispatch => {
        req.then(res => {
            dispatch({
                type: 'get_recipe',
                payload: res.data
            })
        })
    }
}

export const callCuisine = () => {
    let req = axios.get('http://localhost:3001/cuisine')
    return dispatch => {
        req.then(res => {
            dispatch({
                type: 'get_cuisines',
                payload: res.data
            })
        })
    }
}

export const postRecipe = (recipeName, cuisineName, instructions, ingredients, image) => {
    var data = {
        recipeName: recipeName,
        CuisineId: cuisineName,
        instructions: instructions,
        ingredients: ingredients
    }

    if (image != 0) {
        var form = new FormData()
        form.append('image', image)

        let req1 = axios.post('http://localhost:3001/recipe/pictures', form)
        return (dispatch) => {
            req1.then(response => {
                data.imageURL = response.data
                axios.post(`http://localhost:3001/recipe`, data)
                dispatch({
                    type: 'done'
                })
            })
        }
    }
    else{
        let req = axios.post(`http://localhost:3001/recipe`, data)
        return dispatch => {
            req.then(res =>
                dispatch({
                    type: 'done'
                })
            )
        }
    }

}

export const selectEdit = (id) => {
    return {
        type: 'get_edit',
        payload: id
    }
}

export const updateRecipe = (recipeName, cuisineName, instructions, ingredients, image, id) => {
    var data = {
        recipeName: recipeName,
        CuisineId: cuisineName,
        instructions: instructions,
        ingredients: ingredients
    }
    if (image != 0) {
        var form = new FormData()
        form.append('image', image)

        let req1 = axios.post('http://localhost:3001/recipe/pictures', form)
        return (dispatch) => {
            req1.then(async response => {
                data.imageURL = response.data
                await axios.put(`http://localhost:3001/recipe/update/${id}`, data)
                dispatch({
                    type: 'done'
                })
            })
        }
    }
    else {
        let req = axios.put(`http://localhost:3001/recipe/update/${id}`, data)
        return dispatch => {
            req.then(res =>
                dispatch({
                    type: 'done'
                })
            )
        }
    }


}

export const setHome = () => {
    return {
        type: 'got_home'
    }
}
