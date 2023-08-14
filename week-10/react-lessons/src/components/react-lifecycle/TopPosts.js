import { useState, useEffect } from "react";
import "./TopPosts.css"
import { getPosts } from "./sevices/posts";

export default function TopPosts() {
    const [posts, setPosts] = useState(
        /** @type{{userId:number, id:number, title:string, body:string}[]} */
        ([])
    )
    useEffect(() => {        
        getPosts().then(setPosts)
    }, [])

    return <div className="top-posts">
        <h2>Top Posts</h2>
        <div className="posts-container">
            {posts.map(p =>
                <article key={p.id}>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                </article>
            )}
        </div>
    </div>
}