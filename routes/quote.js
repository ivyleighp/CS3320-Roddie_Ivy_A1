const fs = require('fs');

module.exports = {
    addQuotePage: (req, res) => {
        res.render('add-quote.ejs', {
            title: "Welcome to Fuel | Add a new quote"
            ,message: ''
        });
    },
    addQuote: (req, res) => {
        if (!req.body) {
            return res.status(400).send("No quotes were uploaded.");
        }

        let message = '';

        let clientId = req.body.clientId;
        let gallonsRequested = req.body.gallonsRequested;
        let requestDate = req.body.requestDate;
        let deliveryDate = req.body.deliveryDate;
        let deliveryAddress = req.body.deliveryAddress;
        let deliveryCity = req.body.deliveryCity;
        let deliveryState = req.body.deliveryState;
        let deliveryZipCode = req.body.deliveryZipCode;
        let deliveryContactName = req.body.deliveryContactName;
        let deliveryContactPhone = req.body.deliveryContactPhone;
        let deliveryContactEmail = req.body.deliveryContactEmail;
        let suggestedPrice = req.body.suggestedPrice;
        let totalAmountDue = req.body.totalAmountDue;


        let deliveryAddressQuery = "SELECT * FROM `fuelQuote` WHERE deliveryAddress = '" + deliveryAddress + "'";

        db.query(deliveryAddressQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'Delivery Name already exists';
                res.render('add-quote.ejs', {
                    message,
                    title: "Welcome to Fuel | Add a new quote"
                });
            } else {
                        // send the player's details to the database
                        let query = "INSERT INTO `fuelQuote` (clientId, gallonsRequested, requestDate, deliveryDate, deliveryAddress, deliveryCity, deliveryState, deliveryZipCode, deliveryContactName, deliveryContactPhone, deliveryContactEmail, suggestedPrice, totalAmountDue) VALUES ('" +
                        clientId + "', '" +  gallonsRequested + "', '" + requestDate + "', '" + deliveryDate + "', '" + deliveryAddress + "', '" + deliveryCity + "', '" + deliveryState + "', '" + deliveryZipCode + "', '" + deliveryContactName  + "', '" + deliveryContactPhone + "', '" + deliveryContactEmail + "', '" + suggestedPrice + "', '" + totalAmountDue + "')";
                        db.query(query, (err, result) => {
                            if (err) {
                                return res.status(500).send(err);
                            }
                            res.redirect('/QuoteHistory');
                        });

            }
        });
    },
    editQuotePage: (req, res) => {
        let quoteId = req.params.quoteId;
        let query = "SELECT * FROM `fuelQuote` WHERE quoteId = '" + quoteId + "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-quote.ejs', {
                title: "Edit  Quote"
                ,quote: result[0]
                ,message: ''
            });
        });
    },
    editQuote: (req, res) => {
        let quoteId = req.params.quoteId;
        let clientId = req.body.clientId;
        let gallonsRequested = req.body.gallonsRequested;
        let requestDate = req.body.requestDate;
        let deliveryDate = req.body.deliveryDate;
        let deliveryAddress = req.body.deliveryAddress;
        let deliveryCity = req.body.deliveryCity;
        let deliveryState = req.body.deliveryState;
        let deliveryZipCode = req.body.deliveryZipCode;
        let deliveryContactName = req.body.deliveryContactName;
        let deliveryContactPhone = req.body.deliveryContactPhone;
        let deliveryContactEmail = req.body.deliveryContactEmail;
        let suggestedPrice = req.body.suggestedPrice;
        let totalAmountDue = req.body.totalAmountDue;

        let query = "UPDATE `fuelQuote` SET `clientId` = '" + clientId + "', `gallonsRequested` = '" + gallonsRequested
        + "', `requestDate` = '" + requestDate + "', `deliveryDate` = '"
        + deliveryDate + "', `deliveryAddress` = '" + deliveryAddress
        + "', `deliveryCity` = '" + deliveryCity + "', `deliveryState` = '" + deliveryState
        + "', `deliveryZipCode` = '" + deliveryZipCode + "', `deliveryContactName` = '" + deliveryContactName
        + "', `deliveryContactPhone` = '" + deliveryContactPhone + "', `deliveryContactEmail` = '" + deliveryContactEmail
         + "', `suggestedPrice` = '" + suggestedPrice + "', `totalAmountDue` = '" + totalAmountDue + "' WHERE `fuelQuote`.`quoteId` = '" + quoteId + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/QuoteHistory');
        });
    },
    deleteQuote: (req, res) => {
      let quoteId = req.params.quoteId;
      let deleteUserQuery = 'DELETE FROM fuelQuote WHERE quoteId = "' + quoteId + '"';

  db.query(deleteUserQuery, (err, result) => {
    if (err) {
        return res.status(500).send(err);
    }
    res.redirect('/QuoteHistory');
  });
}
};
