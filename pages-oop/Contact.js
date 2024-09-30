import { PageTemplate } from "./PageTemplate.js"

export class Contact extends PageTemplate{
    constructor(){
        super();
        this.pageTitle = 'Contact';
    }



    main() {  return`  
         <main>
            <section>
                <h1>Contact page</h1>

            </section>
            </main>`;

    }
    
}