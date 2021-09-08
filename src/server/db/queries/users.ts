import { Query } from "../index";
import { userTable, mySQL_Response } from "../../../../types";

const find = () => Query<userTable[]>('', []);
const insert = () => Query<mySQL_Response>('');

export default {
    find,
    insert
}