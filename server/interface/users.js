import Router from 'koa-router'
import Redis from 'koa-redis'
import nodeMailer from 'nodemailer'

import User from '../dbs/models/users'
import Passport from './utils/possport'
import Email from '../dbs/config'
import axios from './utils/axios'


let router = new Router({
  prefix: '/users'
})

let Store = new Redis().client

router.post('/singup', async (ctx) => {
  const {
    username,
    password,
    email,
    code
  } = ctx.body

  if(code){
      
  }
})
