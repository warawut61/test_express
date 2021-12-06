const models = require('../models/index')

function index(req, res) {
    models.phone.findAll().then(result => {
        res.status(200).json(result)
    }).catch(error => {
        res.status(400).json({
            message: "Someting went wrong"
        });
    });
}

function create(req, res) {
    const phone = {
        phonenumber: req.body.phonenumber,
        owner: req.body.owner,
        status: req.body.status
    }
    models.phone.create(phone).then(result => {
        res.status(201).json({
            message: "Create successfully",
            phone: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });
}

function show(req, res) {
    const id = req.params.id;

    models.phone.findByPk(id).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(400).json({
            message: "Someting went wrong"
        })
    });
}

function update(req, res) {
    const id = req.params.id;
    const updatephone = {
        phonenumber: req.body.phonenumber,
        owner: req.body.owner,
        status: req.body.status
    }


    models.phone.update(updatephone, { where: { id: id} }).then(result => {
        res.status(200).json({
            message: "Update Successflly",
            phone: updatephone
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });
}

function destroy(req, res) {
    const id = req.params.id;

    models.phone.destroy({ where: { id: id} }).then(result => {
        res.status(200).json({
            message: "Deleted successfully",
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });
}

module.exports = {
    create: create,
    index: index,
    show: show,
    update: update,
    destroy: destroy
}