import { useState, createContext } from "react"
import Com2 from "./com2";
export const UserContext = createContext()

function Com1() {
    // let inputVal = "";
    let [inputVal, setInputVal] = useState("");

    const [user, setUser] = useState([])
    const add = (event) => {
        inputVal !== "" && user.indexOf(inputVal) === -1 ? setUser([...user, String(inputVal)]) : alert("not a valid action")
        setInputVal("");
    }

    const change = (event) => {
        setInputVal(event.target.value)

    }

    const remove = () => {
        let ind = user.indexOf(inputVal)
        if (ind !== -1) {
            user.splice(ind, 1)
        } else {
            alert("item not found in database please input correct details")
        }

        setUser([...user])
        setInputVal("");
    }
    return (
        <div>
            <div className="flex justify-center gap-12 border-x-4 border-t-4 border-black w-[80%] mx-auto p-2">
                <div className=" flex flex-col items-center">
                    <input className="w-[400px] h-10 bg-blue-100 border-2 border-black" placeholder="Enter Something" onChange={change} value={inputVal}></input>
                    <button className='border-2 max-h-10 max-w-[100px] mt-4 px-3  py-2' onClick={add} >add</button>
                    <button className='border-2 max-h-10 max-w-[100px] mt-4 px-3  py-2' onClick={remove} >remove</button>
                </div>



                <div>{
                    user.map(name => <p key={name}>{name}</p>)
                }
                </div>

            </div>

            <UserContext.Provider value={user}>
                <Com2 />
            </UserContext.Provider>
        </div>


    )
}
export default Com1
