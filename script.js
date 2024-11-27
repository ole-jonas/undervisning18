 // TASK
 // 1.Create a constant variable that retrives the HTML element with ID inputData
 // and log the variable to the console

 
 
 
 
 
 
 const inputData = document.querySelector("#inputData");
 console.log(inputData);

 // 2. Create a constant variable that retrives




 // 7. Create a constant variable called displayedData that retrives the HTML element with the ID displayed data inside the function
 // And log out the variable to verify that it is correct.

 // 8. Create a constant variable called listData with the .createElement method inside the function.


 // 9. Give the variable listData content from inputDataValue with the .textContent method.

 // 10. Add the new element listData to the element displayedData with the .appendChild() method.


 

 function displayData() {
    console.log("im working"); 

    const inputDataValue = inputData.value;
    console.log(inputDataValue); 

    const displayedData = document.querySelector("#displayedData");
    console.log(displayedData);

    const listData = document.createElement("li");
    console.log(listData);

    listData.textContent = inputDataValue;

    displayedData.appendChild(listData);
};



submitData.addEventListener("click", displayData);