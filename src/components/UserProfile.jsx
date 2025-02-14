import { useEffect } from "react";
import { useState } from "react";

const UserProfile = () => {
  const [data, setData] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((info) => {
        setData(info);
      });
  }, []);
  return (
    <>
      <div>
        {data.map((datum) => (
          <div key={datum.id}>
            <small>{datum.id}</small>
            <h2>{datum.title}</h2>
            <p>{datum.body}</p>
            <p>user id {datum.userId}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserProfile;

// id: title, body
