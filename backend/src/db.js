import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chat-translate',
    port: 3306
})