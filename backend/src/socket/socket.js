import { pool } from '../db.js'

export const initialLoadingSocket = async ({ id_socket, id_user }) => {
    try {
        const response = await pool.query(`INSERT INTO connections (id_socket, id_user) VALUES ("${id_socket}", ${id_user})`, [id_socket, id_user])
        
        return response
    } catch (error) {
        console.log(error)
    }
}

export const deleteSocket = async id_socket  => {
    try {
        const response = await pool.query(`DELETE FROM connections WHERE id_socket="${id_socket}"`)
        
        return response
    } catch (error) {
        console.log(error)
    }
}

export const findSocketByUsername  = async id_user => {
    try {
        const response = await pool.query("SELECT c.socket_id FROM connections c WHERE INNER JOIN participants p ON p.id_user = c.id_user WHERE ")
    } catch (error) {
        console.log(error)
    }
}
