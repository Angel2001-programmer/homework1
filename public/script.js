//Grab elements from HTML.
const firstInput = document.getElementById('firstInputField');
const secondInput = document.getElementById('secondInputField');
const result = document.getElementById('result');
let count = 0;
let resultNum = '';

const onCalculate = (event) => {
    //Give User an error if one or both inputfields are null.
    if (firstInput.value == '' || secondInput.value == ''){
        alert('Please enter a number in one of input fields.');
        // Check if inputs have a value less than or equal to 0.
    } else if(firstInput.value <= 0 || secondInput.value <= 0){
        alert('Please enter a positive number in one of input fields.');
        firstInput.value = '';
        secondInput.value = '';
    } else {
        resultNum = parseInt(firstInput.value) + parseInt(secondInput.value)
        result.textContent = "Result: " + resultNum;
        count ++;
    }

    // Testing input from inputfields.
    console.log(count);
    console.log(firstInput.value);
    console.log(secondInput.value);

    // checks how many times user has clicked the button.
    if(count == 1){
        firstInput.value = '';
        secondInput.value = '';
        resultNum = '';
        count = 0;
    }

    //Prevent the browser from refreshing.
    event.preventDefault();
}



