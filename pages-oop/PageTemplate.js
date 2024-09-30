import { counter } from "../data/AutomaticCounter.js";

export class PageTemplate {
    constructor() {
        this.pageTitle = 'Home';
        this.pageCssFileList = [];
        this.pageDefaultCssFileList = ['footer', 'header', 'main'];
        this.pageNewCssFileList = [];
        this.pageJs = [];
        this.currentPage = 'home';  // Add currentPage property
    }

    head() {
        let css = '';

        for (const file of this.pageDefaultCssFileList) {
            css += `<link rel="stylesheet" href="./css/components/${file}.css" />\n`;
        }
        for (const file of this.pageNewCssFileList) {
            css += `<link rel="stylesheet" href="./css/components/${file}.css" />\n`;
        }


        return `<head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            ${css}
            <title>${this.pageTitle}</title>
        </head>`;
    }

    header() {
        const isActive = (page) => this.pageTitle.toLowerCase() === page ? 'active' : '';

        return `<header class="main-header">
                <a class="logo" href="/">RaceCars</a>
            <nav>
                <a class="navLink ${isActive('home')}" href="/">Home</a>
                <a class="navLink ${isActive('register')}" href="/register">Register</a>
                <a class="navLink ${isActive('login')}" href="/login">Login</a>
                <a class="navLink ${isActive('contact')}" href="/contact">Contact</a>
            </nav>
        </header>`;
    }

    main() {
        return `<main>
            <p>Template- please edit</p>
        </main>`;
    }

    footer() {
        return `<footer class="main-footer">
            <span class="copyright">&copy; Copyright ${new Date().getFullYear()}, Apsilankymu kiekis:</span> ${counter.value}
        </footer>`;
    }

    script() {
        let HTML = '';
        if (this.pageJs.length > 0) {
            for (const file of this.pageJs) {
                HTML += `<script src="/js/${file}.js"></script>\n            `;
            }
        }
        return HTML;
    }

    render() {
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
