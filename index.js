const express = require('express');
const path = require('path');

const app = express();

// Servir les fichiers statiques depuis le répertoire 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Démarre le serveur sur le port 8080
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
