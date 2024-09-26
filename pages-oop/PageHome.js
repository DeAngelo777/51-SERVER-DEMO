import { PageTemplate } from "./PageTemplate.js";

export class PageHome extends PageTemplate{
    head() { return `<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/components/counter.css" />
        <link rel="stylesheet" href="./css/components/footer.css" />
        <link rel="stylesheet" href="./css/components/gallery.css" />
        <link rel="stylesheet" href="./css/components/header.css" />
                <link rel="stylesheet" href="./css/main.css" />

        <title>Home page</title>
      
    </head>`;
    }


    main() {  return`  
         <main>
            <section>
                <h1>Home page</h1>

                <div class="counter">
                    <button class="firstBtn">-</button>
                    <p class="value">0</p>
                    <button class="secondBtn">+</button>
                </div>

            </section>
                          
            <section class="gallery">
                    <img src="img/car/1.jpg"  alt="1">
                    <img src="img/car/2.jpg" alt="1">
                    <img src="img/car/3.jpg" alt="1">
                    <img src="img/car/4.jpg" alt="1">

            </section>
            </main>`;

    }
    
    
}