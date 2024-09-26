import { PageTemplate } from "./PageTemplate.js"

export class PageNotFound extends PageTemplate{
    head() { return `<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/components/footer.css" />
        <link rel="stylesheet" href="./css/components/header.css" />
                <link rel="stylesheet" href="./css/main.css" />

        <title>Not found</title>
      
    </head>`;
    }


    main() {  return`  
         <main>
            <section>
                <h1>404 Not Found</h1>

            </section>
            </main>`;

    }
    
}