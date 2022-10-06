import mysql from 'mysql';
import keys from '../keys';
keys


const connection = mysql.createConnection(keys);

export default connection