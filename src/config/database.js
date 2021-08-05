// config, a sintaxe esta no module.exports porque o sequelize só entende essa declaracao
module.exports = {
    //usando docker
    // dialect: 'postgres',
    // host: 'localhost',
    // username: 'postgres',
    // password: 'docker',
    // database: 'sistema',
    // define: {
    //     timestamps: true,
    //     undercored: true, //permite que faça uso de underline dentro das tabelas
    //     undercoredAll: true,
    // }

    //usando ElephantSQL
    dialect: 'postgres',
    host: 'queenie.db.elephantsql.com',
    username: 'hxmjxyaw',
    password: '8OSQ4QNH0wm76p-Nr0E0tdFNCHpiR7iu',
    database: 'hxmjxyaw',
    define: {
        timestamps: true,
        underscored: true, //permite que faça uso de underline dentro das tabelas
        underscoredAll: true,
    }
}