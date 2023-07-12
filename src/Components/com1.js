import { useState } from "react"



let inputVal = ""

function Com1(){

    const [state, setState] = useState([])
    const add=()=>{
        inputVal!=="" && state.indexOf(inputVal) == -1 ? setState([...state, String(inputVal)]): alert("not a valid action")
        inputVal = "";
        inputVal=""
    }

    const change = (event) => {
        inputVal = event.target.value
    }

    const remove = () => {
        let ind = state.indexOf(inputVal)
        if(ind!==-1){
            state.splice(ind,1)
        }else{
            alert("item not found in database")
        }

        setState([...state])
    }
    return (

       
        <div className="flex justify-center gap-12 ">
            <div className=" flex flex-col items-center">
                <input className="w-[400px] h-10 bg-blue-100 border-2 border-black" placeholder="Enter Something" onChange={change}></input>
                <button className = 'border-2 max-h-10 max-w-[100px] mt-4 px-3  py-2'onClick={add} >add</button>
                <button className = 'border-2 max-h-10 max-w-[100px] mt-4 px-3  py-2'onClick={remove} >remove</button>
            </div>
            
            <div>{
                state.map(name=><p>{name}</p>)
                }
            </div>
        </div>
    )
}

export default Com1