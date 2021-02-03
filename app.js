const express =require('express');
const app = express();
const path= require('path');

app.use('/static', express.static(__dirname + '/public'));

app.get('/', (require,response)=>{
    response.sendFile(__dirname + '/views/index.html');
});    

app.get('/flexbox', (require,response)=>{
    response.sendFile(__dirname + '/views/flexbox.html');
});

app.get('/registro', (require,response)=>{
    response.sendFile(path.join(__dirname + '/views/registro.html')
)});

app.get('/login', (require,response)=>{
    response.sendFile(path.join(__dirname + '/views/login.html')
)});

app.get('/carrito', (require,response)=>{
    response.sendFile(path.join(__dirname + '/views/carrito.html')
)});

app.get('/ofertas', (require,response)=>{
    response.sendFile(path.join(__dirname + '/views/ofertas.html')
)});

app.get('/tiendas-oficiales', (require,response)=>{
    response.sendFile(path.join(__dirname + '/views/tiendas-oficiales.html')
)});

app.get('/vender', (require,response)=>{
    response.sendFile(path.join(__dirname + '/views/vender.html')
)});

app.get('/ayuda', (require,response)=>{
    response.sendFile(path.join(__dirname + '/views/ayuda.html')
)});


app.listen(process.env.PORT || 3001, ()=>{
    console.log('servidor escuchando');
    });

