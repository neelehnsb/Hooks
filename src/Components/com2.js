import { UserContext } from "./com1"
import { useContext } from "react"

function Com2(){
    const user = useContext(UserContext);

    return(
        <div className="border-4 border-black text-center">

            <p className="text-red-500 text-3xl font-extrabold">Component 2</p>
            <p className="text-blue-300">Nested Within Component 1</p>


            {user.map(User=><p key={User}>{User}</p>)}
        </div>
    )
}

export default Com2

