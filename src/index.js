const { login } = require('./auth/login');
module.exports.auth = { login };
// Gestionnaire d'erreurs global
function handleError(error) {
    console.error('Error:', error.message);
}
module.exports.handleError = handleError;