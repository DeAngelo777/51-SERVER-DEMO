import { head } from "../components/head.js";
import { footer } from "../components/footer.js";
import { header } from "../components/header.js";


export function pageRegister(req){
    return `
    <!DOCTYPE html>
<html lang="en">
${head()}

 ${header()}
            <main>
                <h1>Register page</h1>
            </main>

${footer()}
</body>
</html>`;


}