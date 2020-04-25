  
import axios from 'axios'
export function  getList(){

   let userData = axios({
       method: 'get',
       url: ' http://localhost:5000/api/recipes/all'
   })

   
  
   return (dispatch) => {
       userData.then(res =>{
         console.log("his sjsh",res)
         dispatch({
            
       type: "list-fetch",
       payload: res.data
         })

       })
       
   }

}

export function  getCuisines(){

    let userData = axios({
        method: 'get',
        url: '  http://localhost:5000/api/cuisines/all'
    })
 
    
   
    return (dispatch) => {
        userData.then(res =>{
          console.log("his sjsh",res)
          dispatch({
             
        type: "cuisines-fetch",
        payload: res.data
          })
 
        })
        
    }
 
 }