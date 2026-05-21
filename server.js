import express from 'express';

const app = express();

const PORT = process.env.PORT;

const URL = process.env.URL;

app.get('/', (request, response) => {
    response.json({
        messaggio: 'Server del mio blog'
        
    });
});





app.listen(PORT, (error) => {
    if (error){
        console.error('Si è stato un errore: ', error);
    } else {
        console.log(`Server in ascolto alla porta ${PORT}`);
    }
    
});