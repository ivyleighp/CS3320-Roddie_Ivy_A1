module.exports = {
    getQuoteHomePage: (req, res) => {
      let query = "SELECT * FROM `fuelQuote` ORDER BY quoteId ASC"; // query database to get all the players

      // execute query
      db.query(query, (err, result) => {
          if (err) {
              res.redirect('/QuoteHistory');
          }
          res.render('indexQuote.ejs', {
              title: "Welcome to fuel | View Quote History"
              ,quote: result
          });
      });
  },
};
