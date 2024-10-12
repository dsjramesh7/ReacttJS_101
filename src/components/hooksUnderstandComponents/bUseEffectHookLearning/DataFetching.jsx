import { useEffect, useState } from "react";

const DataFetching = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setPostData(data);
        setLoading(false);
      });
  }, []);
  // useEffect will run on first render only

  return (
    <div>
      {loading ? (
        <p>fetching wait for a sec....</p>
      ) : (
        <ul>
          {postData.map((eachPost, i) => (
            <li key={i}>{eachPost.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetching;
