/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Mail from '@ioc:Adonis/Addons/Mail'
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/send-mail', async () => {
  await Mail.send((message) => {
    message
      .from('c2k2@cha-fa.com')
      .to('c2k2c2k2@gmail.com')
      .subject('New patient signed up referred by you')
      .html(`We are pleased to inform you that a new patient has registered and selected you as their doctor. <br>
                <b>Patient name : C2k2 C2k2</b><br>
                Please approve their status and start assigning therapies.
              `)
  })
})
