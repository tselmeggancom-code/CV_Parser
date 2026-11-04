import cv from './mocks/cv.json';

//Lists cv.skills array from keys and values to avoid hard coding (allows flexibility)
const listDetails = Object.entries(cv.skills).map(user=> {
  // Converts the skills value from String[] to string 
  const value = user[1].join(", ") 
  // Formats the list ouput
  return <li key = {user[0]}>{user[0]}: {value} </li>;

});

function App() {
  return (
    <div>
      <h1>CV Viewer</h1>
      <h1>Your Details: </h1>
      <p>Name: {cv.name}</p>
      <p>Email: {cv.email}</p>
      <ul>{listDetails}</ul>
    </div>
  );
}

export default App;