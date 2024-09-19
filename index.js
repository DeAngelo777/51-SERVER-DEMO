import express from 'express';

const pageName = {
    firstName: 'Backend',
    secondName: 'Server'
}
const app = express();
const port = 5114;
// Services
app.get('/services', (req, res) => {
    return res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Server Demo ${pageName.secondName}</title>
</head>
<body>
<p>${pageName.firstName}</p>
<h1>Services list</h1>
<nav>
        <a href="/services/js">JS</a>
        <a href="/services/html">HTML</a>
        <a href="/services/css">CSS</a>
        <a href="/services/git">GIT</a>

</nav>
    
</body>
</html>`)})

// Home page
app.get('/', (req, res) => {
    return res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Server Demo ${pageName.secondName}</title>
</head>
<body>
<p>${pageName.firstName}</p>
<h1>Home page</h1>
<nav>
        <a href="/services/">services</a>
        <a href="/services/">services</a>
        <a href="/services/">services</a>
        <a href="/services/">services</a>

</nav>
    
</body>
</html>`)})


app.get('/services/:name', (req, res) => {
    const services = {
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Server Demo ${req.params.name}</title>
</head>
<body>
<p>${req.params.name}</p>
<h1>${req.params.name.toUpperCase()} Page</h1>
<nav>

        <a href="/services/">services</a>
        <a href="/services/">services</a>
        <a href="/services/">services</a>
        <a href="/services/">services</a>

</nav>
    
</body>
</html>`,
        css: 'CSS yra grazu',
        js: 'JS tiesiog yra',
        git: 'Git it'
    };

    if (services[req.params.name]) {
        return res.send(services[req.params.name]);
        
    } else {
        return res.send( req.params.name + ' Paslauga nera teikiama ')

    }
    })
    
app.get('/Login', (req, res) => {
    return res.send('login page')})
    
app.get('/contact', (req, res) => {
        return res.send('Contact page')})
    
app.get('/secret', (req, res) => {
        return res.status(401).send('Secret page')})
                       
app.use((req, res, next) => {
       return  res.status(404).send('404 Not found')
    }
)

app.use((err, req, res, next) => {
    console.error(err.stack);
    return res.status(500).send('Something broke!');
});

app.get('/random', (req, res) => {
res.send ('ab?cd')
})
    
    app.l
app.listen(port, () => {
    console.log(`Serveris sukasis ant http://localhost:${port}`);
})