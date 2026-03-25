function UserList(props){
    const {userObj}=props
    return(
        <div className="text-center p-5 shadow-2xl rounded-2xl shadow-gray-400">
            <img src={userObj.image} alt="" className= "block m-auto rounded-2xl"   />
            <h3 className="text-3xl text-red-400">{userObj.name}</h3>
            <h4 className="font-bold mt-5">{userObj.email}</h4>
        </div>
    )

}
export default UserList