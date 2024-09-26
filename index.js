import express from 'express';
import { pageContactUs } from './pages/pageContactUs.js';
import { pageHome } from './pages/pageHome.js';
import { pageLogin} from './pages/pageLogin.js';
import { pageRegister } from './pages/pageRegister.js';
import { pageSecret } from './pages/pageSecret.js';
import { pageNotFound } from './pages/pageNotFound.js';
import { pageServices } from './pages/pageServices.js';
import { pageService } from './pages/pageService.js';
import { pageServiceNotFound} from './pages/pageServiceNotFound.js';
import { reqLog } from './middleware/reqLog.js';

import { PageHome } from './pages-oop/PageHome.js';
import { PageNotFound } from './pages-oop/PageNotFound.js';
import { LoginPage } from './pages-oop/LoginPage.js';
import { RegisterPage } from './pages-oop/RegisterPage.js';
import { Contact } from './pages-oop/contact.js';


const app = express();
const port = 5114;

app.use(express.static('public'));

app.use(reqLog)
// Home page
app.get('/', (req, res) => res.send(new PageHome().render()));
// app.get('/', (req, res) => res.send(pageHome(req)));
// app.get('/contact', (req, res) => res.send(pageContactUs(req)));
app.get('/contact', (req, res) => res.send(new Contact().render()));

// Services page
app.get('/services', (req, res) => res.send(pageServices(req)));


// 1 Service 
app.get('/services/:name', (req, res) => {
    const services = {
        html: 'Html yra cool',
        css: 'CSS yra grazu',
        js: 'JS tiesiog yra',
        git: 'Git it'
    };

    if (services[req.params.name]) {
        return res.send(pageService(req, req.params.name, services[req.params.name]));
    } else {
        return res.send(pageServiceNotFound(req, req.params.name));
    }
});
    
// app.get('/login', (req, res) => res.send(pageLogin(req)))
app.get('/login', (req, res) => res.send(new LoginPage().render()))
// app.get('/register', (req, res) => res.send(pageRegister(req)))
app.get('/register', (req, res) => res.send(new RegisterPage().render()))

app.get('/secret', (req, res) =>  res.status(401).send(pageSecret(req)))
// app.get('*', (req, res) =>  res.status(404).send(pageNotFound(req)))
app.get('*', (req, res) =>  res.status(404).send(new PageNotFound().render()))


                       
app.use((req, res, next) => {
       return  res.status(404).send("Sorry, can't find that")
    }
)

app.use((err, req, res, next) => {
    console.error(err.stack);
    return res.status(500).send('Something broke!');
});
    
    app.l
app.listen(port, () => {
    console.log(`Serveris sukasis ant http://localhost:${port}`);
})