import express from 'express'
import { getInboxChatsById } from '../controllers/Inbox.js'

const router = express.Router()

router.get('/', getInboxChatsById)

export default router