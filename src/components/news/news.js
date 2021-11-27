import React, { useState, useEffect } from "react";
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  title: {
    listStyleType: 'none',
    border: '2px dashed grey',
    padding: {
      left: '10px',
      top: '5px',
      bottom: '5px'
    },  
    '& a': {
      fontSize: 'px',
      color: 'black'
    }  
  },
  
})

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

      fetch("https://jsonplaceholder.typicode.com/posts", { signal: signal })
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("successfully aborted");
        } else {
          setError(err);
        }
      });
    return () => controller.abort();
  }, []);

  const classes = useStyles();
  return (
    <div>
      {!error ? (
        posts.map((post) => (
          <ul key={post.id}>
             <li className={classes.title}>
                <a href={'/news/' + post.id}>{post.title}</a>
              </li>
          </ul>
        ))
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}

export default Post;