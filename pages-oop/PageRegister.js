import { PageTemplate } from "./PageTemplate.js"

export class RegisterPage extends PageTemplate{
    constructor() {
        super();
        this.pageTitle = "Register";
        this.pageNewCssFileList = ['counter', 'gallery'];

    }
    


    main() {  return`  
         <main>
            <section>
                <h1>Register page</h1>

            </section>
            </main>`;

    }
    
}