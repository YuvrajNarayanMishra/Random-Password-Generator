//generate random password using for loop
document.getElementById("btn").addEventListener("click", function() {
	var chars = "ABCDEFGHIJKL_+?<>MNOPQRSTUVWXYZ!@#$%0123456^&*()789abcdefghijklmn{}[]:opqrstuvwxyz";
	var passwordLength = 10;
	var password = "";
	for (var i = 0; i < passwordLength; i++) {
		var randomChar = Math.floor(Math.random() * chars.length)
		password += chars.charAt(randomChar);
	}
	document.getElementById("password").value = password;
  });

//copy to clipboard
clipboard.onclick = function() {

	password.select();

	document.execCommand("copy");
}
 
