import mysql from 'mysql';
import SQLConfig from './SQLConfig';

const connection = mysql.createConnection(SQLConfig);

connection.connect();

export default function query(sql: string): Promise<any> {
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) reject(error);
      resolve(results);
    });
  });
}
