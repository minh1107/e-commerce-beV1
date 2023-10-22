const { verifyAccessToken, isAdmin } = require('../middlewares/verifyToken')
const routers = require('express').Router()
const controller = require('../controllers/order')

routers.put('/', [verifyAccessToken], controller.createOrder)
routers.put('/:oid', [verifyAccessToken, isAdmin], controller.updateStatus)
routers.get('/allorder', controller.getOrderList)
routers.get('/:oid', [verifyAccessToken], controller.getStatus)
routers.get('/', [verifyAccessToken, isAdmin], controller.getAllStatus)
routers.delete('/:oid', [verifyAccessToken, isAdmin], controller.deleteOrder)


module.exports = routers