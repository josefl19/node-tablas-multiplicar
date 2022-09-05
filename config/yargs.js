const { describe } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Indica la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Lista la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'Limite de la tabla de multiplicar'
    })
    .check((argv, options) => {
        if( isNaN(argv.b) || isNaN(argv.h) ) {
            throw 'Los argumentos base y hasta tiene que ser de tipo number';
        }

        return true;
    })
    .argv;

module.exports = argv;