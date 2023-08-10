import Exercise1 from './Exercise1';
import Exercise2 from './Exercise2';
import SpotCheck from './SpotCheck';

export default function ReactInput() {
    return (
        <>
            <details open><summary>Spot Check</summary>
                <SpotCheck />
            </details>
            <details open><summary>Exercise 1</summary>
                <Exercise1 />
            </details>
            <details open><summary>Exercise 2</summary>
                <Exercise2 />
            </details>
        </>
    );
}
