function getFormvalue(event) {
    event.preventDefault();
   
    const firstname = document.querySelector('input[name=fname]');
    const lastname = document.querySelector('input[name=lname]');

    console.log(firstname.value);
    console.log(lastname.value);
}