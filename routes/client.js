const fs = require('fs');

module.exports = {
    addClientPage: (req, res) => {
        res.render('add-client.ejs', {
            title: "Welcome to Fuel | Add a new client"
            ,message: ''
        });
    },
    addClient: (req, res) => {
        if (!req.body) {
            return res.status(400).send("No clients were uploaded.");
        }

        let message = '';
        let fullName = req.body.fullName;
        let address= req.body.address;
        let city = req.body.city;
        let state = req.body.state;
        let zipCode = req.body.zipCode;
        let phone = req.body.phone;
        let email = req.body.email;

        let fullNameQuery = "SELECT * FROM `clientInformation` WHERE address = '" + address + "'";

        db.query(fullNameQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'Name already exists';
                res.render('add-client.ejs', {
                    message,
                    title: "Welcome to Fuel | Add a new client"
                });
            } else {
                        // send the player's details to the database
                        let query = "INSERT INTO `clientInformation` (fullName, address, city, state, zipCode, phone, email) VALUES ('" +
                            fullName + "', '" + address + "', '" + city + "', '" + state + "', '" + zipCode + "', '" + phone + "', '" + email + "')";
                        db.query(query, (err, result) => {
                            if (err) {
                                return res.status(500).send(err);
                            }
                            res.redirect('/');
                        });
            }
        });
    },
    editClientPage: (req, res) => {
        let clientId = req.params.clientId;
        let query = "SELECT * FROM `clientInformation` WHERE clientId = '" + clientId + "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-client.ejs', {
                title: "Edit  Client"
                ,client: result[0]
                ,message: ''
            });
        });
    },
    editClient: (req, res) => {
        let clientId = req.params.clientId;
        let fullName = req.body.fullName;
        let address= req.body.address;
        let city = req.body.city;
        let state = req.body.state;
        let zipCode = req.body.zipCode;
        let phone = req.body.phone;
        let email = req.body.email;

        let query = "UPDATE `clientInformation` SET `fullName` = '" + fullName + "', `address` = '" + address + "', `city` = '" + city + "', `state` = '" + state + "', `zipCode` = '" + zipCode + "', `phone` ='" + phone + "', `email` = '" + email + "' WHERE `clientInformation`.`clientId` = '" + clientId + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
    },

    deleteClient: (req, res) => {
        let clientId = req.params.clientId;
        let deleteUserQuery = 'DELETE FROM clientInformation WHERE clientId = "' + clientId + '"';

    db.query(deleteUserQuery, (err, result) => {
      if (err) {
          return res.status(500).send(err);
      }
      res.redirect('/');
    });
  }
};
