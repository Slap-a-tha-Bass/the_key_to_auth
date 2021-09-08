import * as mysql from 'mysql';
import { userConfig } from '../config/users'

const pool = mysql.createPool(userConfig);

export const Query = <T = any>(queryString: string, values?: any) => {
    return new Promise<T>((resolve, reject) => {
        pool.query(queryString, values, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};