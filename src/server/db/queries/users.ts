import { Query } from "../index";
import { userTable, mySQL_Response } from "../../../../types";

const find = (column: string, value: string) => Query<userTable[]>('SELECT * FROM users WHERE ?? = ?', [column, value]);
const insert = () => Query<mySQL_Response>('');

export default {
    find,
    insert
}