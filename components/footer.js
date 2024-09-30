import { counter } from "../data/counter.js"
export function footer(count) {
    return `
    <footer>
    &copy; ${ new Date().getFullYear()} Apsilankymu kiekis: ${counter.value};
    </footer>`;
}