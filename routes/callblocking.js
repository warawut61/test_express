const express = require('express');
const router = express.Router();
const callblockingController = require('../controller/callblockingController')
/* GET users listing. */
router.post('/', callblockingController.create);
router.get('/', callblockingController.index);
router.get('/:id', callblockingController.show);
router.patch('/:id', callblockingController.update);
router.delete('/:id', callblockingController.destroy);

module.exports = router;
