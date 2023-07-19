export function InsertParticipantsQuery(id_room, participants) {
    
    const finalString = participants.reduce(
        (acc, value, i) => {
            const char = (participants.length - 1) !== i ? ',' : ''

            return `${acc}(${value}, ${id_room})${char}`
        }, '')

    return `INSERT INTO participants(id_user, id_room) VALUES ${finalString}`
}

export function GetGroupsInboxQuery(id_user, id_idioma) {
    
    return `
    SELECT r.nombre as displayName, r.type, r.id AS id_room, r.photo_url, 
    (SELECT COUNT(id) FROM messages WHERE id > p.id_lastest_messages AND p.id_room = id_room AND id_user != ${id_user} AND id_idioma = ${id_idioma}) as counter,
    (SELECT message FROM messages WHERE id_room = p.id_room AND id_idioma = ${id_idioma} ORDER BY id DESC LIMIT 1) AS message,
    (SELECT id FROM messages WHERE id_room = p.id_room AND id_idioma = ${id_idioma} ORDER BY id DESC LIMIT 1) AS id_message,
    (SELECT created_at FROM messages WHERE id_room = p.id_room AND id_idioma = ${id_idioma} ORDER BY id DESC LIMIT 1) AS created_at
    FROM rooms r
    INNER JOIN participants p
    ON p.id_room = r.id
    WHERE r.type = 1 AND p.id_user = ${id_user}`
}

export function GetSingleGroupInboxQuery(id_room) {
    
    return `SELECT type, nombre AS displayName, type, id AS id_room, photo_url
    FROM rooms
    WHERE id = ${id_room}`
    
    //return `
    //    SELECT m.message, m.id AS id_message, m.created_at, r.type, r.nombre AS displayName, r.type, r.id AS id_room FROM messages m
    //    INNER JOIN rooms r ON m.id_room = r.id 
    //    INNER JOIN participants p ON m.id_room = p.id_room
    //    WHERE r.id = ${id_room}
    //`
}