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
        const response = await pool.query("DELETE FROM connections WHERE id_socket=?", [id_socket])
        
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

/* 
        
        CASO #1 Carga Inicial:
        Al cargar la página inicial se obtiene todos los identificadores de Room
        actuales por lo cual se unirá. También se guardará en la base de datos
        el identificador del socket y el identificador del usuario que esta asociado al socket.

        CASO #2 Nueva conversación
        
        Emisor: 
        El primero que abra el chat por primera vez, 
        enviará su identificador de usuario y su identificador 
        del socket y se unirá al room.
        
        Receptor: 
        Si no encuentra conectados Caso #1
        Si se encuentra conectado encontrar 
*/