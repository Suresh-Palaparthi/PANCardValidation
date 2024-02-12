function validatePAN(){

    let panNumber = document.getElementById('pan-number').value;
    let panFormat = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

    if (panFormat.test(panNumber)){
        alert("Correct");
    }

    else{
        alert('Incorrect PAN Number format');
    }
}