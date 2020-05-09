import axios from 'axios'


export const setDate = (date) => {
    return {
        type: 'set_date',
        payload: String(new Date(String(date)).toDateString())
    }
}

export const addCard = (state, date) => {
    console.log(date)
    let req = axios.post("http://localhost:3001/task", {
        info: state.info,
        link: state.link,
        people: state.people.split(", "),
        date: String(new Date(String(date)).toDateString()),
        time: String(state.time),
        title: state.title
    })
    return (dispatch) => {
        req.then(res => {
            if (res.data == "error") {
                dispatch({
                    type: "error"
                })
            }
            else {
                dispatch({
                    type: 'done'
                })
            }
        })
    }
}

export const unreload = () => {
    return {
        type: 'unreload'
    }
}

export const loadCards = (date) => {
    console.log('hello')
    let req = axios.get(`http://localhost:3001/task/${date}`)
    return (dispatch) => {
        req.then(res => {
            dispatch({
                type: "load_cards",
                payload: res.data
            })
        })
    }

}