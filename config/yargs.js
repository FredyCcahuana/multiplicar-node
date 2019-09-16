const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de mutiplicar', opts)
    .command('crear', 'genera un archiva con la tabla multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}