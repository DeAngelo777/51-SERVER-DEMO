import { PageTemplate } from "./PageTemplate.js";

export class PageHome extends PageTemplate{
    constructor() {
        super();

        this.pageTitle = 'Home';
        this.pageNewCssFileList = ['counter', 'gallery'];
        this.pageJs  = ['manualCounter'];

    }





    main() {  return`  
         <main>
            <section>
                <h1>${this.pageTitle}</h1>

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
                    <img src="img/car/5.jpg"  alt="1">
                    <img src="img/car/6.jpg" alt="1">
                    <img src="img/car/7.jpg" alt="1">
                    <img src="img/car/8.jpg" alt="1">
                    <img src="img/car/9.jpg" alt="1">

                    

            </section>
            </main>`;

    }
    
    
}