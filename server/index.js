// E - Express

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const Villa = require('./models/villas.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
// const { default: Villas } = require('../client/src/pages/Villas')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/Trivy-admin')

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try{
        const newPassword = await bcrypt.hash(req.body.password, 10)
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: newPassword,
        })
        res.json({ status: 'ok' })
    } catch (err) {
        res.json({ status: 'error', error: [{ msg: 'Duplicate Email' }] })
    }
})

app.post('/api/login', async (req, res) => {
    console.log(req.body)
        const user = await User.findOne({
            email: req.body.email,
        })

        if(!user){
            return { status: 'error', error: [{ msg: 'Invalid Login' }] }
        }

        const isPasswordValid = await bcrypt.compare(req.body.password, user.password)

        if (user) {
            const token = jwt.sign({
                name: user.name,
                email: user.email,
            }, 'secret123')

            return res.json({ status: 'ok', user: token })
        } else {
            res.json({ status: 'error', user: false })
        }
        res.json({ status: 'ok' })
        
})

app.post('/api/villas', async (req, res) => {
    console.log(req.body)
    try{
        await Villa.create({
            
        })
        res.json({status: 'ok'})
    } catch (err) {
        res.json({status: 'error'})
    }
    
})

app.listen(1337, () => {
    console.log('Server started on 1337')
})