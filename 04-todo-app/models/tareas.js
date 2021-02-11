const Tarea = require("./tarea");
require('colors');


class Tareas {

    _listado = {};

    constructor(){
        this._listado = {};
    }

    add(tarea = '') {
        const newtarea = new Tarea(tarea);

        this._listado[newtarea.id] = newtarea;
    }
    getAll(){
        const allTareas = Object.values(this._listado).map((obj) => {
            return [obj.desc, obj.completed];
        });

        allTareas.forEach((tarea,i)=>{
            let state = tarea[1] ? 'Completada'.green : 'Pendiente'.red;
            let tareaF = `${i}`.green+ ` ${tarea[0]} ||| Estado: ${state}`;
            console.log(tareaF);
        })

    }

    getPendientes(){
        const allTareas = Object.values(this._listado).map((obj) => {
            return [obj.desc, obj.completed];
        });
        allTareas.forEach((tarea,i)=>{
            if(!tarea[1]){
                let state = tarea[1] ? 'Completada'.green : 'Pendiente'.red;
                let tareaF = `${i}`.green+ ` ${tarea[0]} ||| Estado: ${state}`;
                console.log(tareaF);
            }
        })
    }
    getCompletadas(){
        const allTareas = Object.values(this._listado).map((obj) => {
            return [obj.desc, obj.completed];
        });
        allTareas.forEach((tarea,i)=>{
            if(tarea[1]){
                let state = tarea[1] ? 'Completada'.green : 'Pendiente'.red;
                let tareaF = `${i}`.green+ ` ${tarea[0]} ||| Estado: ${state}`;
                console.log(tareaF);
            }
        })
    }
    removeOne(id){
        if(this._listado[id]){
            delete this._listado[id];
        }  
    }

}


module.exports = Tareas;


