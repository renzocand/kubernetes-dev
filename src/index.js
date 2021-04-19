const app = require('./app');

async function main(){
    await app.listen(3000);
    console.log('puerto 3000 async');
}

main();