const express = require('express');
const app = express();
const tedious = require('tedious');

// Configuración de la conexión a la base de datos
const config = {
    server: 'C-A-M-A-Y-2001.database.windows.net',
    authentication: {
        type: 'default',
        options: {
            userName: '',
            password: '',
        },
    },
    options: {
        database: 'testdevback',
        encrypt: true,
    },
};

const connection = new tedious.Connection(config);

connection.on('connect', (err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
    } else {
        console.log('Conexión a la base de datos exitosa');
    }
});

app.listen(3000, () => {
    console.log('API en ejecución en el puerto 3000');
});


