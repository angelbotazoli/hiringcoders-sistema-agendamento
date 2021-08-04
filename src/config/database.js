// config, a sintaxe esta no module.exports porque o sequelize só entende essa declaracao
module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'sistema',
    define: {
        timestamps: true,
        undercored: true, //permite que faça uso de underline dentro das tabelas
        undercoredAll: true,
    }
}