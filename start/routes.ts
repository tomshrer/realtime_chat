/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('home')

const RoomsController = () => import('#controllers/rooms_controller')

router.post('/create', [RoomsController, 'create']).prefix('room')
