import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentList = ( postsId ) => {
    const [comments, setComments] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`http://localhost:4001/posts/${postsId}/comments`);
    
            setComments(res.data);
        };
    
        fetchData();
    }, [postsId]);


    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>;
    });

    return <ul>{renderedComments}</ul>;
    
};

export default CommentList;