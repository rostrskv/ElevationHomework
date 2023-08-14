import { useState, useEffect } from "react";
import "./TopPosts.css"
export default function TopPosts() {
    const [posts, setPosts] = useState([
        {
            "userId": NaN,
            "id": NaN,
            "title": "",
            "body": ""
        }
    ])
    const POSTS_URL = "https://jsonplaceholder.typicode.com/posts"

    const getPosts = async () => {
        const postsResponse = await fetch(POSTS_URL)
        if (postsResponse.ok) {
            setPosts(
                (await postsResponse.json()).slice(0, 10)
            )
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return <div class="top-posts">
        <h2>Top Posts</h2>
        <div class="posts-container">
            {posts.map(p =>
                <article key={p.id}>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                </article>
            )}
        </div>
    </div>
}