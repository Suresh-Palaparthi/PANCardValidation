function validatePAN(event){

    event.preventDefault();
    let panNumber = document.getElementById('pan-number').value;
    let panFormat = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    let correctValidation = "Your PAN will be delivered to your address.";
    let incorrectValidation ="Please enter a valid pan number. Recheck the format."

    let validationMessageElement = document.getElementsByTagName('p')[0];

    if (panFormat.test(panNumber)){
        // alert("Correct");
        document.getElementsByTagName('p')[0].style.color = '';
        validationMessageElement.textContent = correctValidation;
    }

    else{
        // alert('Incorrect PAN Number format');
        document.getElementsByTagName('p')[0].style.color = 'red';
        validationMessageElement.textContent = incorrectValidation;
    }
}

document.getElementById('pan-form').addEventListener('submit', validatePAN);
