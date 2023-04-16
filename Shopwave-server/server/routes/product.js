const axios = require('axios');
const {
  getList, save, update, getDetailById, remove,
} = require('../controllers/product');

module.exports = (router) => {
  router.get('/products', getList);
  router.get('/product/:publicId', getDetailById);
  router.post('/product/save', save);
  router.patch('/product/:publicId/update', update);
  router.delete('/product/:publicId/delete', remove);
  router.post('/bank', (req, res) => {
    console.log(req.body);
    setTimeout(() => {
      axios.post(req.body.callbackApi, {
        success: true,
      });
      res.status(201).send({ success: true });
    }, 10000);
  });
  router.get('/bank/status', (req, res) => {
    console.log(req.body);

    res.status(201).send([ { success: true } ]);
  });
};
