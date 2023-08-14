import { POSTS_URL, POSTS_COUNT } from "../constants"

/**
 * Get lists of posts from API
 * @returns {Promise<{userId:number, id:number, title:string, body:string}[]>}
 */
export async function getPosts() {
    const postsResponse = await fetch(POSTS_URL)
    return (await postsResponse.json()).slice(0, POSTS_COUNT)
}
