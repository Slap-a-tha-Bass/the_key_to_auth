import { Request } from "express";
import React from "react";

export interface userTable {
    id?: number,
    email?: string,
    password?: string,
    created_at?: Date
}

export interface ContentProps {
    message?: string
}

export interface PrivateRouteProps {
    path: string,
    exact?: boolean,
    children: React.ReactNode,
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