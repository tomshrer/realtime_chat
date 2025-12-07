import type { HttpContext } from '@adonisjs/core/http'

export default class RoomsController {
  create({ response }: HttpContext) {
    console.log('CREATE A NEW ROOM!')
    return response.redirect().back()
  }
}
