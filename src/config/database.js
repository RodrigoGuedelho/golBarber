module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'postgres',
  password: 'admin',
  database: 'golbarber',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredall: true
  }
}
