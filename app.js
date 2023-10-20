
const calculateButtonNode = document.querySelector('#calculate');
const resetButtonNode = document.querySelector('#reset');

calculateButtonNode.addEventListener('click', () => {
    const billAmountInput = parseInt(document.querySelector('#bill-amount').value);
    const percentageTipInput = parseInt(document.querySelector('#percentage-tip').value);

    const tipAmountOutput = document.querySelector('#tip-amount');
    const totalOutput = document.querySelector('#total');

    const tipAmount = billAmountInput * percentageTipInput / 100;
    const total = billAmountInput + tipAmount;

    tipAmountOutput.value = tipAmount;
    totalOutput.value = total;
})

resetButtonNode.addEventListener('click', () => {
    location.reload();
})
