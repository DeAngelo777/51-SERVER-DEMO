export class PageTemplate {
    constructor() {


    }

    head() { return `<head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./css/components/counter.css" />
            <link rel="stylesheet" href="./css/components/footer.css" />
            <link rel="stylesheet" href="./css/components/gallery.css" />
            <link rel="stylesheet" href="./css/components/header.css" />
            <link rel="stylesheet" href="./css/style.css" />
            <link rel="stylesheet" href="./css/main.css" />

            <title>${pageTitle}</title>
          
        </head>`;
    }

    header() {
        return `<header class="main-header">
        <a href="/"> <img class="logo" src="img/logo.png"></a>
        <nav>
        <a href="/">Home</a>
        <a href="/register">Register</a>
        <a href="/login">Login</a>
        <a href="/contact">Contact</a>
        </nav>

</header>`;

    }

    main () {
        return`   <main>
             <p>Template- please edit</p>
            </main>`;

    }

    footer () {
        return`<footer class="main-footer">
    &copy; ${ new Date().getFullYear()} Apsilankymu kiekis: 0;
    </footer>`

    }

    script () {
        
return`<script src="/js/home.js"></script>
`
    }

    render(){
        return `
        <!DOCTYPE html>
        <html lang="en">
        ${this.head()}
        <body>
            ${this.header()}
            ${this.main()}
            ${this.footer()}
            ${this.script()}
        </body>
        </html>`;
    }
    
}