import express from 'express';
import diarioDiBordo from './data/posts.js';

const app = express();

const PORT = process.env.PORT;

const URL = process.env.URL;

app.get('/', (request, response) => {
    response.json({
        messaggio: 'Server del mio blog'
        
    });
});

app.get('/bacheca', (request, response) => {
    const diarioFormattato = diarioDiBordo.map(post => {
        return {
            ...post,
            img: `${URL}${PORT}/imgs/${post.immagine}`
        };
    });
    response.json(diarioFormattato);
});



app.listen(PORT, (error) => {
    if (error){
        console.error('Si è stato un errore: ', error);
    } else {
        console.log(`Server in ascolto alla porta ${PORT}`);
    }
    
});