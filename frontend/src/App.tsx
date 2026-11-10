import cv from './mocks/cv.json';

//Lists cv.skills array from keys and values to avoid hard coding (allows flexibility)
const listDetails = Object.entries(cv.skills).map(user=> {
  // Converts the skills value from String[] to string 
  const value = user[1].join(", ") 
  // Formats the list ouput
  return <li key = {user[0]}>{user[0]}: {value} </li>;

});

const listEducation = (cv.education).map((user,index)=> {
    //Maps user.bullets seperately due to it being a string[]
    return (
    <li key={index}>
      <h3>{user.qualification}</h3>
      <p>{user.institution} ({user.startDate} – {user.endDate})</p>
      <ul>
        {user.bullets.map(bullet => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </li>
  );
})

const listProjects = (cv.projects).map((user,index)=> {
  return <li key = {index}>{user.name}: {user.description} </li>;

});

const listExperience = (cv.experience).map((user,index)=>{
  return (
    <li key={index}>
      <h3>{user.role}</h3>
      <h4>{user.company}</h4>
      <p>({user.startDate} – {user.endDate})</p>
      <ul>
        {user.bullets.map(bullet => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </li>
  );
})



function App() {
  return (
    <div>
      <h1>CV Viewer</h1>
      <h1>Your Details: </h1>
      <p>Name: {cv.name}</p>
      <p>Email: {cv.email}</p>
      <p>Phone: {cv.phone}</p>
      <p>Location: {cv.location}</p>
      <h2>Skills: </h2>
      <ul>{listDetails}</ul>
      <h2>Education: </h2>
      <p>{listEducation}</p>
      <h2>Projects: </h2>
      <p>{listProjects}</p>
      <h2>Experience: </h2>
      <p>{listExperience}</p>
    </div>
  );
}

export default App;