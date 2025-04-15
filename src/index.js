const { login } = require('./auth/login');
module.exports.auth = { login };
function connect(){
    //Logique de connexion à la base de données

return { status: 'connected' };
}
module.exports = { connect };