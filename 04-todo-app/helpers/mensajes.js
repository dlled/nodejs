require('colors');
const mostrarMenu = () => {

    return new Promise( resolve => {
        console.clear();

        console.log('==========================='.green);
        console.log('  Seleccione una opción'.green)
        console.log('==========================='.green);

        console.log(`${'1.'.blue} Crear tarea`);
        console.log(`${'2.'.blue} Listar tareas`);
        console.log(`${'3.'.blue} Listar completas`);
        console.log(`${'4.'.blue} Listar pendientes`);
        console.log(`${'5.'.blue} Borrar tarea`);
        console.log(`${'6.'.blue} Completar tarea`);
        console.log(`${'0.'.blue} Salir \n`);


        const rd = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        rd.question('Seleccione una opción ', (opt) => {
            rd.close();
            resolve(opt);

        })
    })
    
}

const pausa = () => {
    return new Promise((resolve)=>{
        const rd = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        rd.question( `\nPresione ${'Enter'.red} para continuar\n`, (opt) =>{
            rd.close();
            resolve()
        })
    })
    
}

module.exports = {
    mostrarMenu, 
    pausa
}
