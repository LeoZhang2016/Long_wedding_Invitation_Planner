function dian(){

    // console.log('11111');

    // document.getElementById('first-name1').style.background = 'red';
    // document.getElementById('first-name1').style.border = '6px solid green';

    // console.log(document.getElementById('first-name1'));
    
    // '1px solid red';

};

function brideNameChange() {   
    let brideFirstName = document.getElementById("bride-name").value;
    let brideAlpha = brideFirstName.trim().substr(0,1).toUpperCase();
    // console.log(FirstAlpha);
    if(brideAlpha.length === 1){
        document.getElementById("upper-first-names").innerText = brideAlpha + ' & ';  
    }
}

function groomNameChange() {
    let groomFirstName = document.getElementById("groom-name").value;
    let groomAlpha = groomFirstName.trim().substr(0,1).toUpperCase();
    let brideName =  document.getElementById("upper-first-names").innerText;

    console.log("brideName is ",brideName.length);

    if( brideName.length >=4){
        return;
    }

    if(groomAlpha.length === 1){
        document.getElementById("upper-first-names").innerText = brideName +'  ' + groomAlpha;  
    }
}


function brideCoupleName() {
    let brideFirstName = document.getElementById("bride-name").value;
    document.getElementById("bride-couple-name").innerText = brideFirstName;
}


function groomCoupleName() {
    let groomFirstName = document.getElementById("groom-name").value;
    document.getElementById("groom-couple-name").innerText = groomFirstName;
}

function guestNameChange() {
    let guestName = document.getElementById("guest-name").value;
    document.getElementById("guest-name-display").innerText = guestName.trim();

}

function dateWeddingChange() {
    let dateWedding = document.getElementById("date-wedding").value;
    document.getElementById("date-wedding-display").innerText = dateWedding.trim();
}

function locationWeddingChange() {
    let locationWedding = document.getElementById("location-wedding").value;
    document.getElementById("location-wedding-display").innerText = locationWedding.trim();
}

//  style selection

function formalClick() {
    // const clickValue = document.getElementById('formal').innerText;
    // console.log(clickValue);
    
    document.getElementById("display-wrapper").classList.remove("springStyle");
    document.getElementById("display-wrapper").classList.remove("artStyle");
    document.getElementById("display-wrapper").classList.add("display-wrapper-default");
}

function springClick() {
    // const clickValue = document.getElementById('spring').innerText;
    // console.log(clickValue);
    // console.log(typeof clickValue);
    console.log('1111');
    // console.log(document.getElementById("display-wrapper").classList);
    document.getElementById("display-wrapper").classList.remove("display-wrapper-default");
    document.getElementById("display-wrapper").classList.remove("artStyle");
    document.getElementById("display-wrapper").classList.add("springStyle");
     
}

function artClick() {
    document.getElementById("display-wrapper").classList.remove("display-wrapper-default");
    document.getElementById("display-wrapper").classList.remove("springStyle");
    document.getElementById("display-wrapper").classList.add("artStyle");
}