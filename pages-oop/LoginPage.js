import { PageTemplate } from "./PageTemplate.js"

export class LoginPage extends PageTemplate{
    constructor() {
        super();
        this.projectName = "Login";
        this.pageNewCssFileList = ['counter', 'gallery', 'style'];


    }
    


    main() {  return`  
         <main>
            <section>
                <h1>Login page</h1>

            </section>
            </main>`;

    }
    
}