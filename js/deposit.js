document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositInputValue = getInputValueById('deposit-input');
    if (Number.isNaN(newDepositInputValue)) {
        document.getElementById('deposit-input').value = '';

        alert('Please enter a valid value');
    } else {
        document.getElementById('deposit-input').value = '';

        const prevDeposit = getElementValueById('deposit-amount');
        const totalDepositAmount = prevDeposit + newDepositInputValue;
        setElementInnerTextById('deposit-amount', totalDepositAmount);

        const prevBalanceAmount = getElementValueById('balance-amount');
        const newBalanceAmount = prevBalanceAmount + newDepositInputValue;
        setElementInnerTextById('balance-amount', newBalanceAmount);
    }
})