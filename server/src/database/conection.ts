import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true,
});

export default connection;

// points (pontos de coleta)
//   image, email, whatsapp, latitude, longitude, city, state
// items (items para coleta)
//   image
//   name
// N-N (Pivot)
// point_items(Relacionamento dos itens que um ponto coleta)
//   point_id
//   item_id