import { pool } from '../db'

const initialLoadingSocket = ({ id_socket, id_user }) => {
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
}