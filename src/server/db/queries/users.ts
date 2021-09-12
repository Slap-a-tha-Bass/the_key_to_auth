import { Query } from "../index";
import { userTable, mySQL_Response } from "../../../../types";

const find = (column: string, value: string) =>
    Query<userTable[]>('SELECT * FROM users WHERE ?? = ?', [column, value]);
const insert = (newUser: { email: string, password: string }) =>
    Query<mySQL_Response>('INSERT INTO users SET ?', newUser);

export default {
    find,
    insert
}