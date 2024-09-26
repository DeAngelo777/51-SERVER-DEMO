import { head } from "../components/head.js";
import { footer } from "../components/footer.js";
import { header } from "../components/header.js";


export function pageSecret(req){
    return `
    <!DOCTYPE html>
<html lang="en">
${head()}

 ${header()}
            <main>
                <h1>Secret page</h1>
            </main>

${footer()}
</body>
</html>`;


}