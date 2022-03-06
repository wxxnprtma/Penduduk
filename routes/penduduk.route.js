const { Router } = require('express')
const express = require('express')
const route = express.Router()
const {checkToken} = require('../auth/token_validation')
const {
    getAllPenduduk,
    getPenduduk,
    postPenduduk,
    deletePenduduk,
    putPenduduk,
    registrasi,
    login
} = require('../controllers/penduduk.controller') 

route.route('/:id').get(getPenduduk).put(putPenduduk).delete(checkToken,deletePenduduk)
route.route('/').get(checkToken, getAllPenduduk).post(postPenduduk)

route.post("/daftar", registrasi)
route.post("/login", login)

module.exports = route
