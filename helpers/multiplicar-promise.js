const fs = require('fs');

const crearArchivo = (base = 1) => {
    return new Promise((resolve, reject) => {
        let salida = '';
    
        for (let i = 1; i <= 10; i++) {
            salida += `${base} * ${i} = ${base * i}\n`;
        }

        console.log(salida);
    
        fs.writeFileSync(`tabla${base}.txt`, salida);
    
        resolve(`tabla${base}.txt`)
    });
}

module.exports = {
    crearArchivo
}
