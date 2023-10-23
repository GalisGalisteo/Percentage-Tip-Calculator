
const calculateButtonNode = document.querySelector('#calculate');
const resetButtonNode = document.querySelector('#reset');
const billAmountInput = document.querySelector('#bill-amount');
const percentageTipInput = document.querySelector('#percentage-tip');
const tipAmountOutput = document.querySelector('#tip-amount');
const totalOutput = document.querySelector('#total');

calculateButtonNode.addEventListener('click', () => {
    const billAmountInputValue = +billAmountInput.value;
    const percentageTipInputValue = +percentageTipInput.value;

    const tipAmount = billAmountInputValue * percentageTipInputValue / 100;
    const total = billAmountInputValue + tipAmount;

    tipAmountOutput.value = tipAmount;
    totalOutput.value = total;
})

resetButtonNode.addEventListener('click', () => {
    billAmountInput.value = '';
    percentageTipInput.value = '';
    tipAmountOutput.value = '';
    totalOutput.value = '';
})
