import { pool } from "../db.js"
import { getInboxChatsByIdQuery, getMessagesByIdRoomQuery, insertMessageQuery, LoginAuthQuery, UpdatedLastestMessageQuery } from "../querys.js"

export const getInboxChatsById = async id => {
    try {
        const res = await pool.query(getInboxChatsByIdQuery(id))  
        
        return res[0]
    } catch(error) {
        console.log(error)
        return error
    }
}

export const getMessagesForIdRoom = async id => {
    try {
        const res = await pool.query(getMessagesByIdRoomQuery(id))

        return res[0]
    } catch (error) {
        console.log(error)
        return error
    }
}

export const AddMessage = async body => {
    try {
        const res = await pool.query(insertMessageQuery(body))
        const lastID = res[0].insertId
        const message = await pool.query(`SELECT * FROM messages WHERE id = ${lastID}`)

        return message[0]
    } catch (error) {
        console.log(error)
    }
}

export const LoginAuth = async body => {
    try {
        const { username, password } = body
        const res = await pool.query(LoginAuthQuery(username))
        const user = res[0][0]

        if(!user) return ({ status: "error", message: "El usuario no existe"})
        if(!(user.password === password)) return ({ status: "error", message: "Contraseña incorrecta"})

        return {status: "ok", user}
    } catch (error) {
        console.log(error)
    }
}

export const updatedLastestMessage = async body => {
    try {
        const res = await pool.query(UpdatedLastestMessageQuery(body))

        return ({status: "ok", message: "Done"})
    } catch (error) {
        console.log(error)
    }
} 