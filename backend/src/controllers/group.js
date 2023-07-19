import { pool } from "../db.js"
import { GetSingleGroupInboxQuery, InsertParticipantsQuery, GetGroupsInboxQuery } from "../querys/group.js"

export const addGroup = async body => {
    try {
        const { name, id_user, participants } = body
        const respRooms = await pool.query(`INSERT INTO rooms(nombre, type) VALUES("${name}", 1)`)
        const id_room = respRooms[0].insertId

        await pool.query(InsertParticipantsQuery(id_room, participants))

        const result = await pool.query(GetSingleGroupInboxQuery(id_room))

        return result[0]
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
}

export const getInboxGroup = async (id, id_idioma) => {
    try {
        const res = await pool.query(GetGroupsInboxQuery(id, id_idioma))

        const result = res[0]        
        return result
    } catch (error) {
        console.log(error)
    }
}

//async function main() {
//    const r = await getInboxGroup(1, 1)
//    console.log(r)
//}

//main()