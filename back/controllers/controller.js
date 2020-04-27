const Spo2 = require('../models/spo2');
const Bloodpressure = require('../models/bloodpressure');
const Temperature = require('../models/temperature');

exports.getFilteredSensorResults = (req, res, next) => {
    const error = new Error('Could not find the results.');
    error.statusCode = 404;

    //const start = parseInt(req.query.start);
    let start = 0;
    let from = req.query.from;
    let to = req.query.to;
    let sensor = req.query.sensor;

    if (from == null) from = new Date('1980-01-01T00:00:00');
    if (to == null) to = new Date();
    if (sensor == null) sensor = "spo2";
    console.log(new Date(to));
    let mongoQuery = {$and: [{"createdAt":{$gt: new Date(from)}}, {"createdAt":{$lt: new Date(to)}}]};

    // sensor == "spo2" | sensor == "bp"
    if (sensor == "spo2") {
        Spo2
            .find(mongoQuery)
            .sort( { createdAt: -1 } )
            .limit(100)
            .skip(start)
            .then(result => {
                if (!result) {
                    throw error;
                }
                res.status(200).json({ message: 'found', sensor: "spo2", results: result });
            })
            .catch(err => {
                const error = new Error('Not found. Invalid query.');
                error.statusCode = 401;
                return next(error);
            });
    } else if (sensor == "bp") {
        Bloodpressure
            .find(mongoQuery)
            .limit(100)
            .skip(start)
            .then(result => {
                if (!result) {
                    throw error;
                }
                res.status(200).json({ message: 'found', sensor: "bp" , results: result });
            })
            .catch(err => {
                const error = new Error('Not found. Invalid query.');
                error.statusCode = 401;
                return next(error);
            });
    } else if (sensor == "temperature") {
        Temperature
            .find(mongoQuery)
            .limit(100)
            .skip(start)
            .then(result => {
                if (!result) {
                    throw error;
                }
                res.status(200).json({ message: 'found', sensor: "temperature" , results: result });
            })
            .catch(err => {
                const error = new Error('Not found. Invalid query.');
                error.statusCode = 401;
                return next(error);
            });
    }
}

exports.postBloodpressureResult = (req, res, next) => {
    const bloodpressure = new Bloodpressure();
    Object.assign(bloodpressure, req.body);

    bloodpressure
        .save(req.body)
        .then(result => {
            res.status(201).json({
                message: 'Result added!',
                result: result
            });
        })
        .catch(err => {
            res.status(500).json({ message: err });
        })
}

exports.postTemperatureResult = (req, res, next) => {
    const temperature = new Temperature();
    Object.assign(temperature, req.body);

    temperature
        .save(req.body)
        .then(result => {
            res.status(201).json({
                message: 'Result added!',
                result: result
            });
        })
        .catch(err => {
            res.status(500).json({ message: err });
        })
}

exports.getAllBloodpressureResults = (req, res, next) => {
    Bloodpressure
        .find()
        .then(result => {
            res.status(200).json({
                sensor_results: result
            });
        })
        .catch(err => {
            res.status(500).json({ message: err });
        });
}

exports.postSpo2Result = (req, res, next) => {
    const spo2 = new Spo2();
    Object.assign(spo2, req.body);

    spo2
        .save(req.body)
        .then(result => {
            res.status(201).json({
                message: 'Result added!',
                result: result
            });
        })
        .catch(err => {
            res.status(500).json({ message: err });
        })
};

exports.getAllSpo2Results = (req, res, next) => {
    Spo2
        .find()
        .then(result => {
            res.status(200).json({
                sensor_results: result
            });
        })
        .catch(err => {
            res.status(500).json({ message: err });
        });
}

exports.getAllTemperatureResults = (req, res, next) => {
    Temperature
        .find()
        .then(result => {
            res.status(200).json({
                sensor_results: result
            });
        })
        .catch(err => {
            res.status(500).json({ message: err });
        });
}
