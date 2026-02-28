function PersonalInfoCard(){
    const student={
        name:"shivam",
        age:23,
        city:"Delhi",
        Skills:["html","css","javascript","Learning-react"]
    };
    return (
    <div className="container">
    <h1>{student.name}</h1>
    <p> Location:{student.city}</p>
    <p>Age:{student.age}</p>
    <h2>Skills</h2>
    <ul>{student.Skills.map((skill,index)=>(
    <li key={index}>{skill}</li>
))}
</ul>
    </div>


    )
}
export default PersonalInfoCard