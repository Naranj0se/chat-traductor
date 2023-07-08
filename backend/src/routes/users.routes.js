import express from 'express'
import { getUserByUsername } from '../controllers/username.js'

const router = express.Router()

router.get('/:username', getUserByUsername)

export default router