const express = require('express')
const mongoose = require('mongoose')
const Agenda = require('../models/agendaSchema')
const methodOverride = require('method-override')
const flash = require('connect-flash')
const router = express.Router()
const session = require('express-session')
const { IsLoggedIn } = require('../middleware')


router.get('/januari', IsLoggedIn, async(req, res) => {
    const bulan = await Agenda.find({ 'month': 'Januari' })
    // if(!Agustus.length){
    //     req.flash('success', 'Data tidak ada')
    //     return res.redirect('/dashboard')
    // }
    const findNotYet = await Agenda.find({ 'hasil': 'NOT YET' })
    const jumlahAgendaNotYet = findNotYet.length
    const urlPath = req.path.replace('/j', 'J')
    const IsAdmin = req.user.username

    res.render('month', { bulan, urlPath, IsAdmin,findNotYet,jumlahAgendaNotYet })
})

router.get('/februari',IsLoggedIn, async(req, res) => {
    const bulan = await Agenda.find({ 'month': 'Februari' })
    // if(!Agustus.length){
    //     req.flash('success', 'Data tidak ada')
    //     return res.redirect('/dashboard')
    // }
    const findNotYet = await Agenda.find({ 'hasil': 'NOT YET' })
    const jumlahAgendaNotYet = findNotYet.length
    const urlPath = req.path.replace('/f', 'F')
    const IsAdmin = req.user.username


    res.render('month', { bulan,urlPath, IsAdmin,findNotYet,jumlahAgendaNotYet })
})

router.get('/maret',IsLoggedIn, async(req, res) => {
    const bulan = await Agenda.find({ 'month': 'Maret' })
    // if(!Agustus.length){
    //     req.flash('success', 'Data tidak ada')
    //     return res.redirect('/dashboard')
    // }
    const findNotYet = await Agenda.find({ 'hasil': 'NOT YET' })
    const jumlahAgendaNotYet = findNotYet.length
    const urlPath = req.path.replace('/m', 'M')
    const IsAdmin = req.user.username


    res.render('month', { bulan,urlPath, IsAdmin,findNotYet,jumlahAgendaNotYet })
})

router.get('/april',IsLoggedIn, async(req, res) => {
    const bulan = await Agenda.find({ 'month': 'April' })
    // if(!Agustus.length){
    //     req.flash('success', 'Data tidak ada')
    //     return res.redirect('/dashboard')
    // }
    const findNotYet = await Agenda.find({ 'hasil': 'NOT YET' })
    const jumlahAgendaNotYet = findNotYet.length
    const urlPath = req.path.replace('/a', 'A')
    const IsAdmin = req.user.username


    res.render('month', { bulan,urlPath, IsAdmin,findNotYet,jumlahAgendaNotYet })
})

router.get('/mei',IsLoggedIn, async(req, res) => {
    const bulan = await Agenda.find({ 'month': 'Mei' })
    // if(!Agustus.length){
    //     req.flash('success', 'Data tidak ada')
    //     return res.redirect('/dashboard')
    // }
    const findNotYet = await Agenda.find({ 'hasil': 'NOT YET' })
    const jumlahAgendaNotYet = findNotYet.length
    const urlPath = req.path.replace('/m', 'M')
    const IsAdmin = req.user.username

    res.render('month', { bulan,urlPath, IsAdmin,findNotYet,jumlahAgendaNotYet })
})

router.get('/juni',IsLoggedIn, async(req, res) => {
    const bulan = await Agenda.find({ 'month': 'Juni' })
    // if(!Agustus.length){
    //     req.flash('success', 'Data tidak ada')
    //     return res.redirect('/dashboard')
    // }
    const findNotYet = await Agenda.find({ 'hasil': 'NOT YET' })
    const jumlahAgendaNotYet = findNotYet.length
    const urlPath = req.path.replace('/j', 'J')
    const IsAdmin = req.user.username

    res.render('month', { bulan,urlPath, IsAdmin,findNotYet,jumlahAgendaNotYet })
})

router.get('/Juli',IsLoggedIn, async(req, res) => {
    const bulan = await Agenda.find({ 'month': 'Juli' })
    // if(!Agustus.length){
    //     req.flash('success', 'Data tidak ada')
    //     return res.redirect('/dashboard')
    // }
    const findNotYet = await Agenda.find({ 'hasil': 'NOT YET' })
    const jumlahAgendaNotYet = findNotYet.length
    const urlPath = req.path.replace('/j', 'J')
    const IsAdmin = req.user.username

    res.render('month', { bulan,urlPath, IsAdmin,findNotYet,jumlahAgendaNotYet })
})

router.get('/agustus',IsLoggedIn, async(req, res) => {
    const bulan = await Agenda.find({ 'month': 'Agustus' })
    // if(!Agustus.length){
    //     req.flash('success', 'Data tidak ada')
    //     return res.redirect('/dashboard')
    // }
    const findNotYet = await Agenda.find({ 'hasil': 'NOT YET' })
    const jumlahAgendaNotYet = findNotYet.length
    const urlPath = req.path.replace('/a', 'A')
    const IsAdmin = req.user.username

    res.render('month', { bulan,urlPath, IsAdmin,findNotYet,jumlahAgendaNotYet  })
})

router.get('/september',IsLoggedIn, async(req, res) => {
    const bulan = await Agenda.find({ 'month': 'September' })
    // if(!Agustus.length){
    //     req.flash('success', 'Data tidak ada')
    //     return res.redirect('/dashboard')
    // }
    const findNotYet = await Agenda.find({ 'hasil': 'NOT YET' })
    const jumlahAgendaNotYet = findNotYet.length
    const urlPath = req.path.replace('/s', 'S')
    const IsAdmin = req.user.username

    res.render('month', { bulan,urlPath, IsAdmin,findNotYet,jumlahAgendaNotYet })
})

router.get('/oktober',IsLoggedIn, async(req, res) => {
    const bulan = await Agenda.find({ 'month': 'Oktober' })
    // if(!Agustus.length){
    //     req.flash('success', 'Data tidak ada')
    //     return res.redirect('/dashboard')
    // }
    const findNotYet = await Agenda.find({ 'hasil': 'NOT YET' })
    const jumlahAgendaNotYet = findNotYet.length
    const urlPath = req.path.replace('/o', 'O')
    const IsAdmin = req.user.username

    res.render('month', { bulan,urlPath, IsAdmin,findNotYet,jumlahAgendaNotYet })
})

router.get('/november',IsLoggedIn, async(req, res) => {
    const bulan = await Agenda.find({ 'month': 'November' })
    // if(!Agustus.length){
    //     req.flash('success', 'Data tidak ada')
    //     return res.redirect('/dashboard')
    // }
    const findNotYet = await Agenda.find({ 'hasil': 'NOT YET' })
    const jumlahAgendaNotYet = findNotYet.length
    const urlPath = req.path.replace('/n', 'N')
    const IsAdmin = req.user.username

    res.render('month', { bulan,urlPath, IsAdmin,findNotYet,jumlahAgendaNotYet })
})

router.get('/desember',IsLoggedIn, async(req, res) => {
    const bulan = await Agenda.find({ 'month': 'Desember' })
    // if(!Agustus.length){
    //     req.flash('success', 'Data tidak ada')
    //     return res.redirect('/dashboard')
    // }
    const findNotYet = await Agenda.find({ 'hasil': 'NOT YET' })
    const jumlahAgendaNotYet = findNotYet.length
    const urlPath = req.path.replace('/d', 'D')
    const IsAdmin = req.user.username

    res.render('month', { bulan,urlPath, IsAdmin,findNotYet,jumlahAgendaNotYet })
})


module.exports = router