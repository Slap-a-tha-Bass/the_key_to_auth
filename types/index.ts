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