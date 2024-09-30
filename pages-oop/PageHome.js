import { PageTemplate } from "./PageTemplate.js";

export class PageHome extends PageTemplate{
    constructor() {
        super();

        this.pageTitle = 'xxx';
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