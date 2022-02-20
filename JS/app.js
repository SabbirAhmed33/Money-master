
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
    const foodCostValue = foodCost.value;

    // Food Error Handaler
    const positiveFoodNumbers = document.getElementById('usefood-positive-numbers');
    const useOnlyFoodNumbers = document.getElementById('usefood-numbers')
    if(foodCostValue<0){
        positiveFoodNumbers.style.display = 'block';
    }
    else if(isNaN(foodCostValue)){
        useOnlyFoodNumbers.style.display = 'block'; 
    }


    // Get Rent Cost
    const rentCost = document.getElementById('rent');
    const rentCostValue = rentCost.value;

    // Rent Error Handaler
    const positiveRentNumbers = document.getElementById('useRent-positive-numbers');
    const useOnlyRentNumbers = document.getElementById('useRent-numbers')
    if(rentCostValue<0){
        positiveRentNumbers.style.display = 'block';
    }
    else if(isNaN(rentCostValue)){
        useOnlyRentNumbers.style.display = 'block'; 
    }


    // Get Clothes Cost
    const clothesCost = document.getElementById('clothes');
    const clothesCostValue = clothesCost.value;

    // Clothes Error Handaler
    const positiveClothesNumbers = document.getElementById('useClothes-positive-numbers');
    const useOnlyClothesNumbers = document.getElementById('useClothes-numbers')
    if(clothesCostValue<0){
        positiveClothesNumbers.style.display = 'block';
    }
    else if(isNaN(clothesCostValue)){
        useOnlyClothesNumbers.style.display = 'block'; 
    }


    // Get Sum of Total Cost
    const totalCost = document.getElementById('total-cost');
    const totalCostValue = parseFloat(foodCostValue) + parseFloat(rentCostValue) + parseFloat(clothesCostValue);
    // const totalCostValue = totalCost.innerText;
    if(getInput>totalCostValue){
        totalCost.innerText = totalCostValue;
        const balance = document.getElementById('balance');
        balance.innerText = getInput - totalCostValue;
        const balanceOver = balance.innerText;
    }
    else{
        const overCost = document.getElementById('over-cost');
        overCost.style.display = 'block';
        return;
    }
})



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
    const totalSavings = savingsAmountValue;

    // Savings Error Handaler
    const noSavings = document.getElementById('no-savings');
    if(totalSavings>balanceValue){
        noSavings.style.display = 'block';
    }

    // Get Remaining Balance
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = parseFloat(balanceValue - savingsAmountValue);
    console.log(remainingBalance.innerText);
})

