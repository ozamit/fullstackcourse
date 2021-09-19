

let sendbtn = document.getElementById("sendbtn");
let field_name = document.getElementById('field_name');
let field_email = document.getElementById('field_email');
let field_phone = document.getElementById('field_phone');
let field_age = document.getElementById('field_age');
let msg = document.getElementById('18msg');


let output_name = document.getElementById('output_name');
let output_email = document.getElementById('output_email');
let output_phone = document.getElementById('output_phone');
let output_age = document.getElementById('output_age');



sendbtn.addEventListener( 'click', (event) => {
    let fullname = field_name.value;
    let email = field_email.value;
    let phone = field_phone.value;
    let age = field_age.value;

    if (age > 17){
        msg.style.display = "block";
        output_name.innerText = "Name: " + fullname;
        output_email.innerText = "Email: " + email;
        output_phone.innerText = "Phone: " + phone;
        output_age.innerText = "Age: " + age;
    } else {
        alert("No No, you must be over 18");
    }

    console.log(fullname + email + phone + age);

})
