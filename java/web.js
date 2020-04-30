var count= 2;

function validate()
{
    
	var un = document.login.username.value;
	var pw = document.login.password.value;
	var valid = false;
	var usernameArray = ["Dominik","Leonardo","Tomislav","Lovro"];
	var passwordArray = ["UNINhakerija","UNINhakerija","UNINhakerija","UNINhakerija"];
	for (var i = 0; i < usernameArray.length; i++)
 {

	if ((un == usernameArray[i]) && (pw == passwordArray[i]))
	{
		valid = true;
		break;
	}
}
	if (valid)
	{
		window.open("stranice/prva.html");
		return false;
	}
	var again = " tries";
	if (count ==1)
	{
		again = " try"
	}
	if (count >= 1)
	{
		alert("Kriva lozinka ili Ime ");
		count--;
	}
	else
	{
		alert("Incorrect password or username you are now blocked");
		document.login.username.value = "You are now Blocked";
		document.login.password.value = "Fool you can't see this";
		document.login.username.disabled = true;
		document.login.password.disabled = true;
		return false;
	}
}

