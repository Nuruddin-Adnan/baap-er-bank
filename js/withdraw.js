document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdrawInputValue = getInputValueById('withdraw-input');
    if (Number.isNaN(newWithdrawInputValue)) {
        document.getElementById('withdraw-input').value = '';
        alert('pleas enter a valid value');
    } else {
        document.getElementById('withdraw-input').value = '';
        const prevWithdrawAmount = getElementValueById('withdraw-amount');
        const totalWithdrawAmount = prevWithdrawAmount + newWithdrawInputValue;

        const prevBalanceAmount = getElementValueById('balance-amount');
        const totalBalanceAmount = prevBalanceAmount - newWithdrawInputValue;

        if (prevBalanceAmount < newWithdrawInputValue) {
            alert('Baper bank e eto taka nai');
            return;
        }

        setElementInnerTextById('withdraw-amount', totalWithdrawAmount);
        setElementInnerTextById('balance-amount', totalBalanceAmount);
    }
});