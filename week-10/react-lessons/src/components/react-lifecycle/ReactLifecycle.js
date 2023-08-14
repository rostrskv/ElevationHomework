import CurrentTime from './CurrentTime';
import TopPosts from './TopPosts';
export default function ReactLifecycle() {
    return (
        <div>
            <details>
                <summary>Ex. 1: Current time</summary>
                <CurrentTime />
            </details>
            <details open>
                <summary>Ex. 2: Top Posts</summary>
                <TopPosts />
            </details>

        </div>
    );
}