const { v4: uuidv4 } = require('uuid');

class Tarea{
    id = '';
    desc = '';
    completed = false;

    constructor( desc ){

        this.id = uuidv4();
        this.desc = desc;
        this.completed = false;
    }

    getDesc(){
        return this.desc;
    }

    complete(){
        this.completed = true;
    }
    pendant(){
        this.completed = false;
    }

}




module.exports = Tarea;