import CurrentTime from './CurrentTime';
import TopPosts from './TopPosts';
export default function ReactLifecycle() {
    return (
        <div>
            <details>
                <summary>Ex.1</summary>
                <CurrentTime />
            </details>
            <details open>
                <summary>Ex.2</summary>
                <TopPosts />
            </details>

        </div>
    );
}