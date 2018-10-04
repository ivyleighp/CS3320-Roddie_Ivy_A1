
function quoteHistory() {  

        var clientID = "789432529";
        var gallonsReq = document.getElementById("gallonsReq").value;
        var deliveryDate = document.getElementById("deliveryDate").value;
        var requestDate = "10/31/2018";
        var deliveryLoc = "123 Sea Dr. 78953 Austin, TX";
        var deliveryContactName = "bob";
        var deliveryContactPhone = "234-123-5423";
        var deliveryContactEmail = "jerry@yhdkl.com";    
        var suggestedPrice = document.getElementById("suggestedPrice").value;
        var totalAmountDue = document.getElementById("totalAmountDue").value; 
        var table=document.getElementById("results");

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
        cell6.innerHTML=totalAmountDue ;           
    }
