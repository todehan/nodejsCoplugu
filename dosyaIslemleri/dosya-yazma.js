const fs = require('fs');

fs.appendFile('demo.txt', 'deneme yazısı', (err) => {
    if(err)
        throw err;
    console.log('dosyaya ekleme yapıldı');
});