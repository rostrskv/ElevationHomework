import { useState, useEffect } from "react";
import { POSTS_URL, POSTS_COUNT } from "./constants";
import "./TopPosts.css"

export default function TopPosts() {
    const [posts, setPosts] = useState(
        /** @type{{userId:number, id:number, title:string, body:string}[]?} */
        (null)
    )

    const getPosts = async () => {
        const postsResponse = await fetch(POSTS_URL)
        if (postsResponse.ok) {
            setPosts(
                (await postsResponse.json()).slice(0, POSTS_COUNT)
            )
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return <div class="top-posts">
        <h2>Top Posts</h2>
        <div class="posts-container">
            {posts?.map(p =>
                <article key={p.id}>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                </article>
            )}
        </div>
    </div>
}