require('colors');

const {mostrarMenu, pausa} = require('./helpers/mensajes');
const {save, read} = require('./db/myDB');

const {inquirerMenu, inquirerPause, leerInput, deleteMenu, confirmDelete, completionList} = require('./inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas')


const main = async() => {
    console.log('todo app');

    const misTareas = new Tareas();

    let opt = ''

    const tareasDB = read();

    if (tareasDB){
        Object.assign(misTareas, tareasDB);
    }

    do{
        opt = await inquirerMenu();
        
        switch(opt){
            case '1':
                //Crear nueva tarea
                const desc = await leerInput('Descripción de la tarea');
                misTareas.add(desc);
                
            break;
            case '2': 
                misTareas.getAll();

            break;

            case '3':
                misTareas.getCompletadas();
            break;

            case '4':
                misTareas.getPendientes();
            break;

            case '5':
                const ids = await completionList(Object.values(misTareas._listado));

                ids['ids'].forEach((id) => {
                    let tarea = misTareas._listado[id];
                    tarea.completed = true;
                    misTareas._listado[id] = tarea;
                })
                
            break;


            case '6':
                const remId = await deleteMenu(Object.values(misTareas._listado));

                if( await confirmDelete() ){
                    misTareas.removeOne(remId);
                    console.log(`Tarea con id: ${remId.red} borrada`);
                }
                
            break;
            
        }

        save(JSON.stringify(misTareas));
       
        await inquirerPause();

    } while (opt !== '0');
}

main();