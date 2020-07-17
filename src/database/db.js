// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose();

// criar objeto que fará operações no bd
const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;
// utilizar o objeto de bd para operações
// db.serialize(() => {
  // // Com comandos SQL:

  // //Criar uma tabela
  // db.run(`
  //   CREATE TABLE IF NOT EXISTS places (
  //     id INTEGER PRIMARY KEY AUTOINCREMENT,
  //     name TEXT,
  //     image TEXT,
  //     address TEXT,
  //     address2 TEXT,
  //     state TEXT,
  //     city TEXT,
  //     items TEXT
  //   );
  // `);

  // // Inserir dados na tabela
  // const query = `
  //   INSERT INTO places (
  //     name,
  //     image,
  //     address,
  //     address2,
  //     state,
  //     city,
  //     items
  //   ) VALUES (?,?,?,?,?,?,?);
  // `;

  // const values = [
  //   "Papersider",
  //   "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
  //   "Ruy Carneiro, Tambaú",
  //   "Número 420",
  //   "João Pessoa",
  //   "Paraíba",
  //   "Papéis e Papelões"
  // ];

  // function afterInsertData(err) {
  //   if(err) {
  //     return console.log(err);
  //   }

  //   console.log("Cadastrado com sucesso");
  //   console.log(this);
  // }

  // db.run(query, values, afterInsertData);

  // // Consultar dados da tabela
  // db.all(`SELECT * FROM places`, function(err, rows) {
  //   if(err) {
  //     return console.log(err);
  //   }

  //   console.log("Registros: ");
  //   console.log(rows);
  // });

  // Deletar um dado na tabela
//   db.run(`DELETE FROM places WHERE id = ?`, [4], function(err) {
//     if(err) {
//       return console.log(err);
//     }

//     console.log("Registro deletado com sucesso");
//   });
// });
