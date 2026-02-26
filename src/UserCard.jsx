function UserCard(){
    const user={
        name:"shivam",
        age:23,
        role:"developer",
        location:"gaziabad"
    };
    return(
    <div className="card">
    <h2>{user.name}</h2> 
    <p>Role: {user.role}</p>
    <p>Location:{user.location}</p>
    </div>

    );
}
export default UserCard;