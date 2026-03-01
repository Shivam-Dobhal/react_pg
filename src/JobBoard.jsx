function JobBoard (){
const jobs=[{
id:1,
title:"DATA SCIENCTIST",
company:"Infosys",
Location:"Gurgoan",
Salary:100000,
type:"remote",
experience:"5 year+",
posted:"2 days"

},{
            id:2,
            title:"Python Developer",
            company:"Infosys",
            Location:"Gurgoan",
            Salary:10000,
            type:"contract",
            experience:"5 year+",
            posted:"2 days"
        }
        ,{
            id:3,
            title:"Software Engineer",
            company:"Infosys",
            Location:"Gurgoan",
            Salary:10000,
            type:"remote",
            experience:"5 year+",
            posted:"2 days"
        }
        ,{
            id:4,
            title:"Full-Stack",
            company:"Infosys",
            Location:"Gurgoan",
            Salary:1000,
            type:"fulltime",
            experience:"5 year+",
            posted:"2 days"
        }
        ];

return (

    <div className="job-board">
        <h1>IT JOB ROLES</h1>
        <p>{jobs.length} Job Openings</p>
        <div className="Job-container">
            {jobs.map(job=>(
            <div key={job.id} className="job-card">
                <h2>title {job.title}</h2>
                
                <p className="company">🏢 {job.company}</p>    
            <div className="job-details">
                <p>{job.Location}</p>
                <p>{job.Salary}</p>
                <p>{job.experience}</p>
                <p>{job.posted}</p>
                <span  className={`badge ${job.type.toLowerCase().replace('-','')}`}>{job.type}</span>
                <button className="applt-btn">Apply Now</button>
            </div>
            </div>
            ))}

        </div>
    </div>
)
}
export default JobBoard