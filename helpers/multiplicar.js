const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 1, listar = false, hasta = 10) => {
    try {
        let salidaConsola, salidaTexto = '';

        for (let i = 1; i <= hasta; i++) {
            salidaConsola += `${colors.bold.blue(base)} ${colors.green('*')} ${i} = ${colors.bold.bgWhite(base * i)}\n`;
            salidaTexto += `${base} * ${i} = ${base * i}\n`;
        }

        if(listar) {
            console.log(salidaConsola);
        }
        
        /*fs.writeFile(`tabla${base}.txt`, salidaConsola, (err) => {
            if(err) throw err;

            console.log('Archivo creado correctamente');
        })*/

        fs.writeFileSync(`./salida/tabla${base}.txt`, salidaTexto);
        return `tabla${base}.txt`;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}