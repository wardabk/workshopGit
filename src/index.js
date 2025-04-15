const { login } = require('./auth/login');
module.exports.auth = { login };

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