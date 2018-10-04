let clientInformation = {
    
    clientId:888,
    clientName:"John",
    address:"under the bridge",
    phone:"696942069",
    email:"John@FakeEmail.com"



    /*
    get clientId() {
    	return this.clientId;
    }

    get clientName() {
    	return this.clientName;
    }

    get address() {
    	return this.address;
    }

    get phone() {
    	return this.phone;
    }

    get email() {
    	return this.email;
    }

	set clientId(cid) {
    	this.clientId = cid;
    }

    set clientName(cn) {
    	this.clientName = cn;
    }

    set address(add) {
    	this.address = add;
    }

    set phone(ph) {
    	this.phone = ph;
    }

    set email(em) {
    	this.email = em;
    }
    */
};

document.getElementById("name").innerHTML = clientInformation.clientName
document.getElementById("address").innerHTML = clientInformation.address
document.getElementById("phone").innerHTML = clientInformation.phone
document.getElementById("email").innerHTML = clientInformation.email



