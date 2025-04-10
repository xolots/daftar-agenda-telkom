const express = require('express')
const mongoose = require('mongoose')
const Agenda = require('../models/agendaSchema')
const methodOverride = require('method-override')
const flash = require('connect-flash')
const router = express.Router()
const session = require('express-session')
const { IsLoggedIn } = require('../middleware')

router.get('/:categoryy',IsLoggedIn, async(req, res) => {
    const {categoryy} = req.params
    const category = await Agenda.find({'category': {$regex:`${categoryy}`}})
    const urlPath = req.path.replace('/', '')
    const IsAdmin = req.user.username
    const findNotYet = await Agenda.find({ 'hasil': 'NOT YET' })
    const jumlahAgendaNotYet = findNotYet.length
    res.render('category', {urlPath, category, IsAdmin,findNotYet,jumlahAgendaNotYet, categoryy})
})

module.exports = router