'use strict';


// Bank system

function checkForMinus(amount) {
    if (amount < 0) {
        return 'You have a minus please fix it'
    } else {
        return 'you have a good credit card amount but not enough for house'
    }
}

function checkForHomeEntry(amount) {
    if (amount < 1100) {
        return `You have $${amount} on your bank account thats not accepted you can enter only more then $1100`
    } else {
        return `You have $${amount} that good enough for house`
    }
}


function bankAccount(username) {
    const accounts = [
        { name: 'name', amount: 999 },
        { name: 'name', amount: -1 },
        { name: 'name', amount: 2000 }
    ]
    const getInfo = accounts.find(({ name }) => name === username)

    if (getInfo.amount < 1000) {
        return checkForMinus(getInfo.amount)
    } else {
        return checkForHomeEntry(getInfo.amount)
    }
}

const answer = bankAccount('name')
console.log(answer)