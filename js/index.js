const a= document.querySelector.bind(document);
const aa= document.querySelectorAll.bind(document);

let Value1 = 0;
let Value2 = 0;
let Value3 = 0;
let Result = 0;


let GetButton1value = () => {
    try {
        let TValue = parseInt(a('.value1').dataset.value);
        Value1 += TValue;
        let GetInput = a('.one');
        GetInput.placeholder = `${Value1} `;
        
    } catch (error) {
        console.log(error.message)
        alert(error.message)
    }
}
let GetButton2value = () => {
    try {
        let TValue = parseInt(a('.value2').dataset.value);
        Value2 += TValue;
        let GetInput = a('.two');
        GetInput.placeholder = `${Value2} `;
        
    } catch (error) {
        console.log(error.message)
        alert(error.message)
    }
}
let GetButton3value = () => {
    try {
        let TValue = parseInt(a('.value3').dataset.value);
        Value3 += TValue;
        let GetInput = a('.three');
        GetInput.placeholder = `${Value3} `;
        
    } catch (error) {
        console.log(error.message)
        alert(error.message)
    }
}
let CalculateThePrice = () => {
    try {
        console.log(Value1);
        console.log(Value2);
        console.log(Value3);
      
        if (Value1 !== 0) {
            Result = Result + Value1
        }
        if (Value2 !== 0) {
            Result = Result + Value2
        }
        if (Value3 !== 0) {
            Result = Result + Value3
        }
        
        // console.log(Result);
         let ResultDiv = document.querySelector('.showMyResult');
         ResultDiv.innerHTML = `
         <style>
         </style>
         <h1>${Result}</h1>
         `
        
    } catch (error) {
        console.log(error.message)
    }
}