import { PageTemplate } from "./PageTemplate.js"

export class PageNotFound extends PageTemplate{
    constructor(){
        super();
        this.pageTitle = '';

    }
   


    main() {  return`  
         <main>
            <section>
                <h1>404 Not Found</h1>

            </section>
            </main>`;

    }
    
}