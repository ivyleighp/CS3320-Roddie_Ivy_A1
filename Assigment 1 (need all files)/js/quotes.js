function randomDate(start, end) {
var d =  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  return d.toDateString();
}


    var storage = [];
function quoteHistory() {

        var clientID = Math.floor((Math.random()*1000)+1);
        var gallonsReq = document.getElementById("gallonsReq").value;
        var deliveryDate = randomDate(new Date(2024, 0, 1), new Date());
        var requestDate = randomDate(new Date(2018, 0, 1), new Date());
        var deliveryLoc = "123 Sea Dr. 78953 Austin, TX";
        var deliveryContactName = "bob";
        var deliveryContactPhone = "234-123-5423";
        var deliveryContactEmail = "jerry@yhdkl.com";
        var suggestedPrice = document.getElementById("suggestedPrice").value;
        var totalAmountDue = document.getElementById("totalAmountDue").value;
        var table=document.getElementById("results");
        var quote = [];

        quote[clientID] = {
          "Gallond Requested" : gallonsReq,
          "Delivery Date" : deliveryDate,
          "Request Date" : requestDate,
          "Delivery Date" : deliveryDate,
          "Delivery Contact Name" : deliveryContactName,
          "Delivery Contact Phone" : deliveryContactPhone,
          "Delivery Contact Email" : deliveryContactEmail,
          "Suggested Price" : suggestedPrice,
          "Total Amount Due" : totalAmountDue
        }
       storage.push(quote);


        var row=table.insertRow(-1);
        var cell1=row.insertCell(0);
        var cell2=row.insertCell(1);
        var cell3=row.insertCell(2);
        var cell4=row.insertCell(3);
        var cell5=row.insertCell(4);
        var cell6=row.insertCell(5);

        cell1.innerHTML=clientID;
        cell2.innerHTML=requestDate;
        cell3.innerHTML=deliveryDate;
        cell4.innerHTML=gallonsReq;
        cell5.innerHTML=suggestedPrice;
        cell6.innerHTML=totalAmountDue;
    }

function hardcodeQuotes(){

      var quote =[
        {
          "CLIENT": "12345",
          "REQD": "10/31/2018",
          "DELD": "01/27/2019",
          "GALR": "1000",
          "SUGP": "2.00",
          "TAP": "2000.00"
        },
        {
          "CLIENT": "547647",
          "REQD": "10/31/2018",
          "DELD": "01/27/2019",
          "GALR": "1000",
          "SUGP": "2.00",
          "TAP": "2000.00"
        },
        {
          "CLIENT": "24356",
          "REQD": "10/31/2018",
          "DELD": "01/27/2019",
          "GALR": "1000",
          "SUGP": "2.00",
          "TAP": "2000.00"
        },
        {
          "CLIENT": "34",
          "REQD": "10/31/2018",
          "DELD": "01/27/2019",
          "GALR": "1000",
          "SUGP": "2.00",
          "TAP": "2000.00"
        },
        {
          "CLIENT": "87",
          "REQD": "10/31/2018",
          "DELD": "01/27/2019",
          "GALR": "1000",
          "SUGP": "2.00",
          "TAP": "2000.00"
        }
      ]

      var col = [];
              for (var i = 0; i < quote.length; i++) {
                  for (var key in quote[i]) {
                      if (col.indexOf(key) === -1) {
                          col.push(key);
                      }
                  }
              }

              // CREATE DYNAMIC TABLE.
              var table = document.createElement("table");

              // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

              var tr = table.insertRow(-1);                   // TABLE ROW.

              for (var i = 0; i < col.length; i++) {
                  var th = document.createElement("th");      // TABLE HEADER.
                  th.innerHTML = col[i];
                  tr.appendChild(th);
              }

              // ADD JSON DATA TO THE TABLE AS ROWS.
              for (var i = 0; i < quote.length; i++) {

                  tr = table.insertRow(-1);

                  for (var j = 0; j < col.length; j++) {
                      var tabCell = tr.insertCell(-1);
                      tabCell.innerHTML = quote[i][col[j]];
                  }
              }

              // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
              var divContainer = document.getElementById("showData");
              divContainer.innerHTML = "";
              divContainer.appendChild(table);
}
