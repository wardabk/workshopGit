const { login } = require('./auth/login');
module.exports.auth = { login };
// Utilitaires
function formatDate(date) {
    return date.toISOString();
}
module.exports.utils = { formatDate };