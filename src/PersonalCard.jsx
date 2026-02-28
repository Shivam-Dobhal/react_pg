import "./PersonalCard_style.css";
function PersonalCard() {
  const name = "Shivam Dobhal";
  const age = 23;
  const city = "Ghaziabad";
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
  
  return (
    <div className="app-container">
      <div className="personal-card">
        <div className="profile-header">
          <div className="avatar">
            {name.charAt(0)}
          </div>
          <h1>{name}</h1>
        </div>
        
        <div className="info-grid">
          <div className="info-item">
            <span className="icon">📍</span>
            <span className="label">Location</span>
            <span className="value">{city}</span>
          </div>
          
          <div className="info-item">
            <span className="icon">🎂</span>
            <span className="label">Age</span>
            <span className="value">{age} years</span>
          </div>
        </div>
        
        <div className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-badge">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalCard