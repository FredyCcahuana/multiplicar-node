const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado : `, colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}




//basico para ingresar valor por consola
//muestra el path
//let argv2 = process.argv;
//console.log('limite: ', argv.limite);

//posicion 30
//let parametro = argv[2];
//separa por un = y muestra la segunda pocision
//let base = parametro.split('=')[1]