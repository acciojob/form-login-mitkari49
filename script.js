
function getFormvalue() {
    //Write your code here
	let FirstName = document.querySelector("input[name='fname']")
	let LastName = document.querySelector("input[name='lname']")
    const fname=FirstName.value;
    const lname=LastName.value;
    alert(fname+" "+lname);
}

