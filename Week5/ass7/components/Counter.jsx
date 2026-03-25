import {userState} from 'react'

function Counter(){
    const [count,setCount]=userState(0);
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
    console.log("counter component")
    return(
        <div className="text-center p-10 border">
            <h1 className="text-6xl">Count:{count}</h1>
        </div>
    )
}
export default Counter