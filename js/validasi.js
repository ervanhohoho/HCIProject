function register(e){
	e.preventDefault()

	var fullName = document.getElementById('txtFullname').value
	var email= document.getElementById('txtEmail').value
	var maleRB = document.getElementById('Male')
	var femaleRB = document.getElementById('Female')
	var address = document.getElementById('txtAddress').value
	var donation = document.getElementById('txtAmount').value
	var agreed = document.getElementById('agreement')
	var errmsg = ""
	var flag=true
	for(var i=0; i<fullName.length; i++){
		if(isNaN(fullName.charAt(i))==false&&fullName.charAt(i)!=' '){
			flag = false
			errmsg+="Name must contains only alphabet or space"
			break
		}
	}
	if(fullName=="")
	{
		errmsg+='<br>Please enter your name'
		flag=false
	}
	if(email=="")
	{
		errmsg+='<br>Please enter your email'
		flag=false;
	}
	if(!maleRB.checked  && !femaleRB.checked){
		errmsg+='<br>Choose your gender'
		flag = false
	}
	if(address.length==0)
	{
		errmsg+='<br>Please enter your address'
		flag=false
	}
	if(donation <= 0)
	{		
		errmsg+='<br>Please enter a valid donation amount'
		flag=false

	}
	if(!agreed.checked)
	{
		errmsg+= '<br>Please accept the terms and conditions'
		flag=false
	}
	if(!flag)
	{
		var temp = document.getElementById('errMsg')
		temp.innerHTML = errmsg
	}
	else{
		// kalo sukses
		errmsg=""
		var temp = document.getElementById('errMsg')
		temp.innerHTML = errmsg
		var message = "Name: " + fullName + "\nEmail: " + email + "\nDonation Amount: $"+donation;
		var registerForm = document.getElementsByClassName('registerForm')[0]
		temp = document.getElementById('donationReport')
		alert(message)
	}
}