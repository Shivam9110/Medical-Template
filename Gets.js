import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gets = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState(" ");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setMyData(res.data))
      // console.log(res.data);

      .catch((error) => setIsError(error.message));
  }, []);

  return (
    <div>
      <h1 className='main'>Get API data using Axios.</h1>
      {isError !== " " && <h2>{isError}</h2>}
      <div className="grid">
        {
          myData.map((post) => {
            const { id, title, body } = post;
            return (
              <div className="card" key={id}>

                <h3 className='Title'> {id} . {title.slice(0, 8).toUpperCase()}</h3>
                <p>{body.slice(0, 100)}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Gets;

