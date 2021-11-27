import React, { useState} from "react";
import { useParams } from 'react-router-dom';

const Post = () => {
    let { id } = useParams();
    const [posts, setPosts] = useState({});

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(json => setPosts(json));

    return(
        <div>
            <h2>{posts.title}</h2>
            <p>{posts.body}</p>
        </div>
    )
};

export default Post;