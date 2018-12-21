const fs = require('fs');

fs.readFile('demo.txt',(error, data)=>{
    if(error)
        console.log(error);
    console.log(data.toString());
});

//2. yöntem

const demoDosyasi = fs.readFileSync('demo.txt');
console.log(demoDosyasi.toString());
console.log('dosya okuma sonlandı');
