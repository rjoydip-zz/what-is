"use strict"

const path = require('path')
const send = require('send')

module.exports = async (req, res) => {
    await send(req, path.join(__dirname, 'dist', 'index.html')).pipe(res)
}