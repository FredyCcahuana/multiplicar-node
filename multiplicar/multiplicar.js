//requireds-librerias
const fs = require('fs');
const colors = require('colors');
//const fs = require('express');
//esta en algun lugar de nuextro poryecto
//const fs = require(./fs);
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base*i}\n`;
        }
        //con la redirecion de guardado en un lugar especifico
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });


    });
}
let listarTabla = (base, limite) => {
    console.log('========================'.green);
    console.log(`tabla de ${base}`.green);
    console.log('========================'.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`);
    }
}
module.exports = {
    crearArchivo,
    listarTabla

}