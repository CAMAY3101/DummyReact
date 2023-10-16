const express = require('express');
const app = express();
const sql = require('mssql/msnodesqlv8');

// Configuración de la conexión a la base de datos
const config = {
    database: 'testdevback',
    server: 'C-A-M-A-Y-2001',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true
    }
};

//connect to your database
sql.connect(config, function (err) {
    if (err) {
        console.log(err);
    }else{
        console.log("Conexión exitosa");
    }
    
});

//Get principal
app.get('/', (req, res, next) => {
    res.send('Pagina Principal Api Clase')
    //res.json({message: 'Hello World'})
})


//Familia de rutas
app.use(require('./routes/routes'))

app.listen(3000, () => {
    console.log('API en ejecución en el puerto 3000');
});


