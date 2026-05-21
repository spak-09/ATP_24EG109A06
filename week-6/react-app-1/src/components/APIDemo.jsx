import { use } from "react";
import { useEffect, useState } from "react";

function APIDemo(){
    console.log("API demo rendered")
    let [users,setUsers]=useState([])
    let [loading,setLoading]=useState(false)
    let [error,setError]=useState(null)

    useEffect(()=>{
        //a function to make API request
        async function getData(){
            //set Loading state to true
            setLoading(true)
            try{    
                let res=await fetch("https://jsonplaceholder.typicode.com/comments")
                let UsersList=await res.json()
                //update state
                setUsers(UsersList)
            }catch(err){
                console.log("error is ",err)
                setError(err)
            }
            finally{
                setLoading(false)
            }
            }
            //function call
            getData()
        },[])
        //deal with loading state
        if(loading){
            return <p className="text-center text-4xl ">Loading...</p>
        }

        //deal with error state
        if(error!=null){
            return <p className=" text-center text-4xl text-red-700">{error.message}</p>
        }
        return (
            <div className="text-center mt-4">
                <h1 className="text-4xl text-pink-400">List Of Users</h1>
                <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        users.map((userObj)=>(
                            <div key={userObj.id}>
                                <p>{userObj.name}</p>
                                <p>{userObj.email}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
}



export default APIDemo