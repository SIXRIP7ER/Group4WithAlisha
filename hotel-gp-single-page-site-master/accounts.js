var admin = {
	email: "admin@gmail.com",
	password: "admin"
}

var customers = [
	{
		first_name: "joe",
		last_name: "bakhtiari",
		email: "joe_bakhtiari@gmail.com",
		password: "qwerty124"
	},
	{
		first_name: "harry",
		last_name: "voldemort",
		email: "harry_voldemort@hotmail.com",
		password: "harry_voldemort123"
	}
]


function useless() {
	console.log("your username is " + first_name)
	console.log(admin.email)
	admin.email = "admin@yahoo.com"
	console.log(admin.email)
}

function registerUser() {
	var first_name = document.getElementById("signup_first_name").value
	var last_name = document.getElementById("signup_last_name").value
	var dob = document.getElementById("signup_dob").value
	var email = document.getElementById("signup_email").value
	var password = document.getElementById("signup_password").value
	var passwordCon = document.getElementById("signup_passwordCon").value
	
	var failed = 0

	if(password.length < 8) {
		alert("Your password is less then 8 digits")
		failed = 1
	}

	if(password!=passwordCon) {
		alert("your passwords do not match")
		failed = 1
	}

	for(i = 0; i < customers.length; i++) {
		if(email == customers[i].email) {
			alert("Sorry " + first_name + " you already have a account with us")
			failed = 1
			break
		}
		//console.log("Yep this email does not exist with us")
	}

	if(failed==0) {
		var newCustomer = {
			first_name,
			last_name,
			email,
			password
		}
		customers.push(newCustomer)
		alert("successfull sign up")
	}
}