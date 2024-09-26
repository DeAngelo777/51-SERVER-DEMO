import { head } from "../components/head.js";
import { footer } from "../components/footer.js";
import { header } from "../components/header.js";


export function pageService(req, h1, p){
    return `
    <!DOCTYPE html>
<html lang="en">
${head()}

 ${header()}
            <main>
                <h1>${h1}</h1>
                <p>${p}</p>
            </main>

${footer()}
</body>
</html>`;


}