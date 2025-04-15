const { login } = require('./auth/login');
module.exports.auth = { login };

function connect(){
    //Logique de connexion à la base de données

return { status: 'connected' };
}
module.exports = { connect };


// Utilitaires
function formatDate(date) {
    return date.toISOString();
}
module.exports.utils = { formatDate };

// Gestionnaire d'erreurs global
function handleError(error) {
    console.error('Error:', error.message);
}
module.exports.handleError = handleError;

// Ajout de commentaires
//Encore des commentaires

