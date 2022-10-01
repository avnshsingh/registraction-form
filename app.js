'use strict';

/*  Code to select all the fields   */
let firstNameValidation = document.querySelector('#firstNameValidation');
let lastNameValidation = document.querySelector('#lastNameValidation');
let mailValidation = document.querySelector('#mailValidation');
let passwordValidation = document.querySelector('#passwordValidation');
let confirmPassValidation = document.querySelector('#confirmPassValidation');
let checkboxValidation = document.querySelector('#checkboxValidation');

/*  Code to select all the feedback containers   */
let firstNameValid = document.querySelector('#firstNameValid');
let firstNameInvalid = document.querySelector('#firstNameInvalid');
let lastNameValid = document.querySelector('#lastNameValid');
let lastNameInvalid = document.querySelector('#lastNameInvalid');
let mailValid = document.querySelector('#mailValid');
let mailInvalid = document.querySelector('#mailInvalid');
let passwordValid = document.querySelector('#passwordValid');
let passwordInvalid = document.querySelector('#passwordInvalid');
let confirmPassValid = document.querySelector('#confirmPassValid');
let confirmPassInvalid = document.querySelector('#confirmPassInvalid');
let tcInvalid = document.querySelector('#tcInvalid');

let submittedOnce = false;

const validate = submitBtnClicked => {
  /*  Code to check whether the form is submitted using submit button. 
  If so, submittedOnce is set to true to validate the form for every key press thereafter   */
  if (submitBtnClicked) {
    submittedOnce = true;
  }

  /*  Code to extract all the values from the input fields   */
  let firstName = firstNameValidation.value;
  let lastName = lastNameValidation.value;
  let mail = mailValidation.value;
  mail = mail.trim(); // Code to remove the extra spaces for more accurate validation
  let password = passwordValidation.value;
  let confirmPassword = confirmPassValidation.value;
  let checkboxState = checkboxValidation.checked;
  let errorExists = false;
  /*  Code to check if the form is submitted at least once to avoid initial
   error feedbacks before the user even enters any values   */
  if (submittedOnce) {
    if (firstName.length >= 3) {
      firstNameValid.style.display = 'block';
      firstNameInvalid.style.display = 'none';
    } else {
      firstNameValid.style.display = 'none';
      firstNameInvalid.style.display = 'block';
      errorExists = true;
    }
    if (lastName.length >= 3) {
      lastNameValid.style.display = 'block';
      lastNameInvalid.style.display = 'none';
    } else {
      lastNameValid.style.display = 'none';
      lastNameInvalid.style.display = 'block';
      errorExists = true;
    }
    if (
      !mail.startsWith('@') &&
      mail.includes('@') &&
      mail.includes('.') &&
      mail.length - mail.lastIndexOf('.') >= 3
    ) {
      mailValid.style.display = 'block';
      mailInvalid.style.display = 'none';
    } else {
      mailValid.style.display = 'none';
      mailInvalid.style.display = 'block';
      errorExists = true;
    }
    let validatedPass = false;
    if (
      password.length >= 8 &&
      ['$', '#', '@'].some(val => password.includes(val)) &&
      ['1', '2', '3', '4'].some(val => password.includes(val))
    ) {
      passwordValid.style.display = 'block';
      passwordInvalid.style.display = 'none';
      validatedPass = true;
    } else {
      passwordValid.style.display = 'none';
      passwordInvalid.style.display = 'block';
      validatedPass = false;
      errorExists = true;
    }
    if (confirmPassword === password && validatedPass) {
      confirmPassValid.style.display = 'block';
      confirmPassInvalid.style.display = 'none';
    } else {
      confirmPassValid.style.display = 'none';
      confirmPassInvalid.style.display = 'block';
      errorExists = true;
    }
    if (checkboxState) {
      tcInvalid.style.display = 'none';
    } else {
      tcInvalid.style.display = 'block';
      errorExists = true;
    }
    if (errorExists === false && submitBtnClicked === true) {
      window.alert('Your details have been saved successfully!');
      resetFields();
    }
  }
};

const resetFields = () => {
  /*  Code to reset input fields   */
  firstNameValidation.value = '';
  lastNameValidation.value = '';
  mailValidation.value = '';
  passwordValidation.value = '';
  confirmPassValidation.value = '';
  checkboxValidation.checked = false;

  /*  Code to reset feedbacks   */
  firstNameValid.style.display = 'none';
  lastNameValid.style.display = 'none';
  mailValid.style.display = 'none';
  passwordValid.style.display = 'none';
  confirmPassValid.style.display = 'none';

  submittedOnce = false;
};
