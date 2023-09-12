import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AboutPage = (props) => {
  const [users, setUsers] = useState([]);

  const {id} = useParams();


  async function getSample() {
    console.log(id)
    
    const resp = await fetch("/api/sample");
    const result = await resp.json();
    if (result && result.length) {
      setUsers(result);
    }
  }

  useEffect(() => {
    getSample();
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      {users.map((user) => (
        <li key={user._id}>{user.name}</li>
      ))}
    </div>
  );
};

export default AboutPage;
