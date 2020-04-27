const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/get-filtered-results', controller.getFilteredSensorResults)

router.post('/bp/save-sensor-result', controller.postBloodpressureResult);

router.get('/bp/get-sensor-results', controller.getAllBloodpressureResults);

router.post('/spo2/save-sensor-result', controller.postSpo2Result);

router.get('/spo2/get-sensor-results', controller.getAllSpo2Results);

router.post('/temperature/save-sensor-result', controller.postTemperatureResult);

router.get('/temperature/get-sensor-results', controller.getAllTemperatureResults);

module.exports = router;