const sql = require('mssql/msnodesqlv8');

module.exports = {
    query1: (req, res, next) => {
        var request = new sql.Request();
        request.query('select * from dbo.usuarios where userId not in (6, 7, 9, 10)', function (err, recordset) {
            if (err) {
                console.error('Error al ejecutar la consulta:', err);
                res.status(500).json({ error: 'Error al ejecutar la consulta' });
            }else{
                //res.send('QUERY 1')
                res.json(recordset.recordset);
            }
        });
    },
    query2: (req, res, next) => {
        var request = new sql.Request();
        request.query('SELECT * FROM empleados WHERE YEAR(FechaIngreso) BETWEEN 2000 AND 2001', function (err, recordset) {
            if (err) {
                console.error('Error al ejecutar la consulta:', err);
                res.status(500).json({ error: 'Error al ejecutar la consulta' });
            }else{
                //res.send('QUERY 2')
                res.json(recordset.recordset);
            }
        });
    },
    query3: (req, res, next) => {
        var request = new sql.Request();
        request.query(`
        SELECT u.Login, u.Nombre + ' ' + u.Paterno + ' ' + u.Materno AS NombreCompleto, e.FechaIngreso
        FROM usuarios u
        INNER JOIN empleados e ON u.userId = e.userId
        WHERE e.Sueldo > 10000 AND u.Paterno LIKE 'T%'
        ORDER BY e.FechaIngreso DESC;
        `, function (err, recordset) {
            if (err) {
                console.error('Error al ejecutar la consulta:', err);
                res.status(500).json({ error: 'Error al ejecutar la consulta' });
            }else{
                //res.send('QUERY 3')
                res.json(recordset.recordset);
            }
        });
    },
    query4: (req, res, next) => {
        var request = new sql.Request();
        request.query(`
        SELECT
            CASE
                WHEN e.Sueldo < 1200 THEN 'Menos de 1200'
                ELSE '1200 o más'
            END AS GrupoSueldo,
            COUNT(*) AS CantidadEmpleados
        FROM empleados e
        GROUP BY
            CASE
                WHEN e.Sueldo < 1200 THEN 'Menos de 1200'
                ELSE '1200 o más'
            END
        `, function (err, recordset) {
            if (err) {
                console.error('Error al ejecutar la consulta:', err);
                res.status(500).json({ error: 'Error al ejecutar la consulta' });
            } else {
                res.json({ message: 'QUERY 4', data: recordset.recordset });
            }
        });
    },

}