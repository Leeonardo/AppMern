require('dotenv').config();
const app =  require('./app.js');
require('./database');


async function main() {
               await app.listen(4000);
               console.log('Server on port',app.get('port'));

}

main();