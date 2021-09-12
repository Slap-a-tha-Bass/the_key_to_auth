import { Request } from "express";

export interface userTable {
    id?: number,
    email?: string,
    password?: string,
    created_at?: Date
}

export interface mySQL_Response {
    affectedRows: number,
    insertId: number
}

export interface ReqUser extends Request {
    user?: userTable | Payload
}

export interface Payload extends userTable {
    userid?: number,
    role?: number
}