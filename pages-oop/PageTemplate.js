export class PageTemplate {
    constructor() {
        this.projectName = "";
        this.pageTitle = 'Home';
        this.pageCssFileList = [];
        this.pageDefaultCssFileList = ['footer', 'header', 'main'];
        this.pageNewCssFileList = [];
    }

    head() {
        let css = '';

        for (const file of this.pageDefaultCssFileList) {
            css += `<link rel="stylesheet" href="./css/components/${file}.css" />\n`;
        }
        for (const file of this.pageNewCssFileList) {
            css += `<link rel="stylesheet" href="./css/components/${file}.css" />\n`;
        }

        const title = this.projectName === "" ? this.pageTitle : this.projectName;

        return `<head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            ${css}
            <title>${title}</title>
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

    main() {
        return `<main>
            <p>Template- please edit</p>
        </main>`;
    }

    footer() {
        return `<footer class="main-footer">
            &copy; ${new Date().getFullYear()} Apsilankymu kiekis: 0;
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
