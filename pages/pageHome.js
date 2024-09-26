import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";

export function pageHome(req) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head()}
        <body>
            ${header()}
            <main>
                                <section>
                <h1>Home page</h1>
                <button class="btn" type="button">-</button>
                    <a href="">0</a>
                <button class="btn" type="button">+</button>

                    </section>
            </main>

            ${footer()}
        </body>
        </html>`;
}