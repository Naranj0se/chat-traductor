function getInboxChatsByIdQuery(id) {
    return `SELECT u1.*, u.username, u.displayName, u.id, u.photo_url FROM (SELECT p.id_room,
        (SELECT COUNT(id) FROM messages WHERE id > p.id_lastest_messages AND p.id_room = id_room) as counter,
        (SELECT message FROM messages WHERE id_room = p.id_room ORDER BY id DESC LIMIT 1) AS message,
        (SELECT id FROM messages WHERE id_room = p.id_room ORDER BY id DESC LIMIT 1) AS id_message,
        (SELECT created_at FROM messages WHERE id_room = p.id_room ORDER BY id DESC LIMIT 1) AS created_at
        FROM participants p
        WHERE id_user = ${id}) as u1
        INNER JOIN participants p
        ON p.id_room = u1.id_room
        INNER JOIN users u
        ON p.id_user = u.id
        WHERE p.id_user != ${id}`
}

function getMessagesByIdRoomQuery(id_room) {
    return `SELECT * FROM messages WHERE id_room = ${id_room}`
}

function insertMessageQuery(body) {
    const { message, id_user, id_room } = body
    return `INSERT INTO messages (message, id_user, id_room) VALUES ("${message}", ${id_user}, ${id_room})`
}

function LoginAuthQuery(username) {
    return `SELECT * FROM users WHERE username="${username}"`
}

function UpdatedLastestMessageQuery(body) {
    const { id_user, id_message, id_room } = body
    return `UPDATE participants SET id_lastest_messages = ${id_message} WHERE id_user=${id_user} AND id_room = ${id_room}`
}

export { getInboxChatsByIdQuery, getMessagesByIdRoomQuery, insertMessageQuery, LoginAuthQuery, UpdatedLastestMessageQuery }