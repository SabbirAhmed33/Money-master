
document.getElementById('calculate-button').addEventListener('click', function(){
    // Get Income value
    const totalIncome = document.getElementById('income');
    const getInput = totalIncome.value;
    
    // Input Error Handaler
    const positiveNumbers = document.getElementById('use-positive-numbers');
    const useOnlyNumbers = document.getElementById('use-numbers')
    if(getInput<0){
        positiveNumbers.style.display = 'block';
    }
    else if(isNaN(getInput)){
        useOnlyNumbers.style.display = 'block'; 
    }
   
    // Get Food Cost
    const foodCost = document.getElementById('food');
    const foodCostValue = parseFloat(foodCost.value);
    // Get Rent Cost
    const rentCost = document.getElementById('rent');
    const rentCostValue = parseFloat(rentCost.value);
    // Get Clothes Cost
    const clothesCost = document.getElementById('clothes');
    const clothesCostValue = parseFloat(clothesCost.value);

    // Get Sum of Total Cost
    const totalCost = document.getElementById('total-cost');
    totalCost.innerText = parseFloat(foodCostValue + rentCostValue + clothesCostValue);
    const totalCostValue = totalCost.innerText;

    // Get Balance After Cost
    const balance = document.getElementById('balance');
    balance.innerText = parseFloat(getInput - totalCostValue);
    const balanceValue = balance.innerText;
})

 // Balance Error Handaler
    /* const balanceOver = document.getElementById('balace');
    const balanceOverValue = balanceOver.innerText;
    const overCost = document.getElementById('over-cost');
    if(balanceOverValue<0){
        overCost.style.display = 'block';
    } */

// Get Savings And Remaining Balance
document.getElementById('save-button').addEventListener('click', function(){
    // Get balance Value
    const balance = document.getElementById('balance');
    const balanceValue = balance.innerText;

    // Get Income value
    const totalIncome = document.getElementById('income');
    const getInput = totalIncome.value;
    // Get Savings
    const savingParsent = document.getElementById('savings-parsent');
    const savingParsentValue = savingParsent.value;
    const savingsAmount = document.getElementById('total-savings');
    const savingsAmountValue = parseFloat((savingParsentValue / 100)*getInput);
    savingsAmount.innerText = savingsAmountValue;

    // Get Remaining Balance
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = parseFloat(balanceValue - savingsAmountValue);
    console.log(remainingBalance.innerText);
})

