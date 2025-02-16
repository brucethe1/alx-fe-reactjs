const UserProfile =(props)=>{
  return(
    <>
    <h2>{props.name}</h2>
    <p>age:{props.age}</p>
    <p>Bio:{props.bio}</p>
    </>
  );
}
export default UserProfile;