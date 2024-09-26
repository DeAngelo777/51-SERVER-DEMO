import { PageTemplate } from "./PageTemplate.js"

export class Contact extends PageTemplate{
    head() { return `<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/components/footer.css" />
        <link rel="stylesheet" href="./css/components/header.css" />
        <link rel="stylesheet" href="./css/main.css" />

        <title>Contact page</title>
      
    </head>`;
    }


    main() {  return`  
         <main>
            <section>
                <h1>Contact page</h1>

            </section>
            </main>`;

    }
    
}