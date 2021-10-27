import React from 'react'
import '../index.css'

function Blog(props) {

    const sidebar = props.post.map((sidebars) => <li>{sidebars.title}</li>);

    const content = props.post.map((post) =>
        <li id="txtdecor" key={post.id} >
            <div>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
        </li>);
    return (
        <div>
            <h1> hy this is advaced key concept little bit</h1>
            <ul>{sidebar}</ul>
            <hr />
            <ul>{content}</ul> 
        </div>
    );
}

export default Blog;