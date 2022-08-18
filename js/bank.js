// Deposit
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositInputValue = parseFloat(depositInput.value);

    const deposiAmount = document.getElementById('deposit-amount');
    const prevDeposit = parseFloat(deposiAmount.innerText);

    if (isNaN(newDepositInputValue)) {
        alert('please enter a valid deposit amount');
        depositInput.value = '';
        return;
    } else {
        deposiAmount.innerText = prevDeposit + newDepositInputValue;
        depositInput.value = '';

        const balanceAmount = document.getElementById('balance-amount');
        const prevBalanceAmount = parseFloat(balanceAmount.innerText);
        balanceAmount.innerText = prevBalanceAmount + newDepositInputValue;
    }
})

// Withdraw add
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawInputValue = parseFloat(withdrawInput.value);

    const withdrawAmount = document.getElementById('withdraw-amount');
    const prevWithdraw = parseFloat(withdrawAmount.innerText);

    if (isNaN(newWithdrawInputValue)) {
        alert('please enter a valid withdraw amount');
        withdrawInput.value = '';
        return;
    } else {
        withdrawInput.value = '';
        const balanceAmount = document.getElementById('balance-amount');
        const prevBalanceAmount = parseFloat(balanceAmount.innerText);

        if (newWithdrawInputValue > prevBalanceAmount) {
            alert('Baper bank e eto taka nai');
            return;
        }
        withdrawAmount.innerText = prevWithdraw + newWithdrawInputValue;
        balanceAmount.innerText = prevBalanceAmount - newWithdrawInputValue;
    }
})