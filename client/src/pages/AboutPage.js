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
      <h1>About</h1>
        <p>lorem ipsum</p>
    </div>
  );
};

export default AboutPage;
