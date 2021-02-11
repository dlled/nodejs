const fs = require('fs');

const archivo = './db/data.json'

const save = (data) => {

    fs.writeFileSync(archivo, data);

}

const read = () => {
  
    if (!fs.existsSync(archivo)){
        return null;
    }

    const data = fs.readFileSync(archivo, { encoding: 'utf-8'});

    const res = JSON.parse(data);

    console.log(res);
    return res;
}


module.exports = {
    save,
    read
}