var RegxEmail =/^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;

var Email=document.getElementById('email');
var pswd=document.getElementById('password');
var signIn=document.getElementById('signIn');
var errormsg=document.getElementById('emsg');

signIn.onclick=function() {
	if(!RegxEmail.test(Email.value)){
		errormsg.innerHTML="please enter the valid email";
	}	
	else{
     return true;
	}
}


// get all the mandatory field values except phone number field

//  write a function to check empty fields .
// write a function to validate the entered values 
// write a if condition to check weather 
// 
// else add event event listener to populate the error messages for the empty or incorrect text fields 
	// function to identify empty and incorrect field entry 
		// get all required fields using $('reqfield') on focus event 
		// using the array $('reqfield') check for each input field values using regExp 
		//  

// var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
// // var pswdRegex= /^.{4,8}$/;

// var submitBtn = document.getElementById('signIn');
// submitBtn.onclick = onSubmit;
// var mandatoryFieldElements;
// var errorMsgCarrier ;
// var allReqFields = document.getElementsByClassName('reqfield');
// function checkForValidInput(){
// 	var manFieldEl = document.getElementsByClassName('reqfield');
// 	for(i=0;i< manFieldEl.length;i++){
// 		var nameAttrValue = manFieldEl[i].getAttribute('name');
// 		switch(nameAttrValue){
// 			case 'Email':if(!emailRegex.test(manFieldEl[i].value)){
// 						addErrorMessage(manFieldEl[i], "Enter a valid Email")
// 						}
// 						break;	
// 			// case 'password': if(!pswdRegex.test(manFieldEl[i].value)){
// 			// 			addErrorMessage(manFieldEl[i], "Choose a password")
// 			// 			}
// 			// 			break;																
// 		}	
// 	}

	
// }

// function addErrorMessage(emptyfieldelement,validcharacters){
// 	console.log('error message ');
// 	var elementName = emptyfieldelement.parentNode;
// 	var existingErrMsgCarier = elementName.querySelector('.errormsg');
// 	if(existingErrMsgCarier){
// 		if(validcharacters){
// 			if(!existingErrMsgCarier.innerHTML === "Mandatory Field" || existingErrMsgCarier.innerHTML === ""){
// 				existingErrMsgCarier.innerHTML = validcharacters;
// 			}else{
				
// 			}
			
// 		}

// 	}else{
// 		errorMsgCarrier = document.createElement('span');
// 		errorMsgCarrier.setAttribute('class','errormsg');
// 		if(validcharacters){
// 			errorMsgCarrier.innerHTML = validcharacters
			
// 		}else{
			
// 			errorMsgCarrier.innerHTML = "Mandatory Field"
			
// 		}
// 		emptyfieldelement.parentNode.appendChild(errorMsgCarrier);
// 	}
// }
// function removeErrorMessage(filledelement){
// 	filledParentElement = filledelement.parentNode;
// 	var removeErrorMsg = filledParentElement.querySelector('.errormsg');
// 	removeErrorMsg.innerHTML = '';

// }
// function checkForEmptyFields(){
// 	// check the emptyfield 
// 	// create a span element for each empty field and add error message to it
// 	//
	
// 	mandatoryFieldElements = document.getElementsByClassName('reqfield');
// 	// debugger;
// 	console.log('checkForEmptyFields' + mandatoryFieldElements )
// 	for(i=0 ; i < mandatoryFieldElements.length ; i++){
// 		if(mandatoryFieldElements[i].value === ""){
// 			console.log('empty field element' + mandatoryFieldElements[i] );
// 			addErrorMessage(mandatoryFieldElements[i]);
// 			mandatoryFieldElements[i].onfocusout = function(){
// 				// error message for the 

// 				if(this.value === ""){
// 					addErrorMessage(this);
// 				}else{
// 					removeErrorMessage(this);
// 					debugger;
// 					checkForValidInput();
// 				}
// 			}
// 		}
// 	}

// }
// for(i=0;i<allReqFields.length;i++){
// 	allReqFields[i].onfocusout =  function(){
// 		checkForEmptyFields();
// 		checkForValidInput();
// 	}
// }

// function onSubmit(){
// 	console.log("on submit function");

// 	checkForEmptyFields();
// 	checkForValidInput();
// 	// onkeypress  event run validateEnteredValues 


// }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    

