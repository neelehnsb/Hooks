import { useState, createContext } from "react"
import { useReducer } from "react";
export const UserContext = createContext()

const reducer = (state, action) =>{

    // console.log(action)
    switch(action.type){
        case "update_name":{
            
            return{
                inputVal : action.nextName,
                user : [...state.user]
            }
        }
        case "ADD":{
            state.inputVal!=="" && state.user.indexOf(state.inputVal)==-1 ? state.user.push(state.inputVal):console.log("Added")
            return{
                inputVal:"",
                user:[...state.user]
                

            }
        }
        case "REMOVE":{
            state.inputVal!=="" && state.user.indexOf(state.inputVal)!==-1? state.user.splice(state.user.indexOf(state.inputVal),1):console.log('Removed')
            return{
                inputVal:"",
                user:[...state.user]
                
            }
        }
        default:
            return{
                inputVal:state.inputVal,
                user:state.user

            }
            
    }
}

function Com3() {
    let initialState = {inputVal:"", user:[]}
    let [state, dispatch] = useReducer(reducer, initialState)

    const add = () => {
        dispatch({
            type: 'ADD'
        })
    }

    const change = (event) => {
        console.log("hello")
        dispatch({
            type: 'update_name',
            nextName: event.target.value
        })
    }

    const remove = () => {
        dispatch({
            type: "REMOVE"
        })
    }
    return (
        <div>
            <div className=" mt-2 flex justify-center gap-12 border-4 border-black w-[80%] mx-auto p-2">
                <div className=" flex flex-col items-center">
                    <input className="w-[400px] h-10 bg-blue-100 border-2 border-black" placeholder="Enter Something" onChange={change} value={state.inputVal}></input>
                    <button className='border-2 max-h-10 max-w-[100px] mt-4 px-3  py-2' onClick={add} >add</button>
                    <button className='border-2 max-h-10 max-w-[100px] mt-4 px-3  py-2' onClick={remove} >remove</button>
                </div>



                <div>{
                    state.user.map(name => <p key={name}>{name}</p>)
                }
                </div>

            </div>

            
        </div>


    )
}
export default Com3
