const Tool = require("readline/promises");
const input = Tool.createInterface({
    input: process.stdin,
    output: process.stdout
});

const accounts = [
    {
        owner: "Alice",
        address: "GALICE",
        balances: {
            XLM: 5000,
            USDC: 1000
        }
    },
    {
        owner: "Bob",
        address: "GBOB",
        balances: {
            XLM: 3000,
            USDC: 500
        }
    },
    {
        owner: "Ken",
        address: "GKEN",
        balances: {
            XLM: 8000,
            USDC: 2000
        }
    }
];

const lendingPositions = [
    {
        address: "GALICE",
        collateral: 1000,
        debt: 200
    },
    {
        address: "GBOB",
        collateral: 500,
        debt: 0
    },
    {
        address: "GKEN",
        collateral: 2000,
        debt: 500
    }
];

const transactionHistory = [];

const NETWORK_FEE = 0.01;

function FindAccount(address) {
    return accounts.find(acc => acc.address === address);
}

function FindPosition(address) {
    return lendingPositions.find(pos => pos.address === address);
}

function ConnectWallet(address) {
    return FindAccount(address);
}

function ShowLendingPosition(address) {
    const account = FindAccount(address);
    const position = FindPosition(address);
    if (position === undefined) {
        console.log("Lending position not found");
        console.log();
        return;
    }
    console.log("Owner:", account.owner);
    console.log("Address:", address);
    console.log("Wallet XLM:", account.balances["XLM"]);
    console.log("Wallet USDC:", account.balances["USDC"]);
    console.log("Collateral XLM:", position.collateral);
    console.log("Debt USDC:", position.debt);
    console.log("Maximum Debt:", position.collateral * 0.5);
    console.log("Available to Borrow:", position.collateral * 0.5 - position.debt);
    console.log();
}

function ValidateDeposit(account, amount) {
    if (amount <= 0 || Number.isNaN(amount)) {
        console.log("Invalid amount");
        console.log();
        return false;
    }
    if (account.balances["XLM"] < amount + NETWORK_FEE) {
        console.log("Insufficient balances");
        console.log();
        return false;
    }
    return true;
}

function UpdateDeposit(account, position, amount) {
    account.balances["XLM"] -= amount + NETWORK_FEE;
    position.collateral += amount;
}

function SaveDeposit(account, amount) {
    transactionHistory.push({
        id: transactionHistory.length + 1,
        owner: account.owner,
        address: account.address,
        type: "DEPOSIT",
        collateral: "XLM",
        amount: amount,
        fee: NETWORK_FEE,
        status: "SUCCESS"
    });
}

async function Deposit(account, position) {
    const amount = Number((await input.question("Enter amount: ")).trim());
    if (!ValidateDeposit(account, amount)) {
        return;
    }
    UpdateDeposit(account, position, amount);
    SaveDeposit(account, amount);
    console.log("Deposit collateral successfully");
}

function ValidateBorrow(account, position, amount) {
    if (amount <= 0 || Number.isNaN(amount)) {
        console.log("Invalid amount");
        console.log();
        return false;
    }
    if (position.collateral * 0.5 < position.debt + amount) {
        console.log("Debt must not exceed 50% of the collateral");
        console.log("Please deposit more collateral");
        console.log();
        return false;
    }
    if (account.balances["XLM"] < NETWORK_FEE) {
        console.log("You dont have enough XLM to pay fee");
        console.log();
        return false;
    }
    return true;
}

function UpdateBorrow(account, position, amount) {
    account.balances["XLM"] -= NETWORK_FEE;
    account.balances["USDC"] += amount;
    position.debt += amount;
}

function SaveBorrow(account, amount) {
    transactionHistory.push({
        id: transactionHistory.length + 1,
        owner: account.owner,
        address: account.address,
        type: "BORROW",
        asset: "USDC",
        amount: amount,
        fee: NETWORK_FEE,
        status: "SUCCESS"
    });
}

async function Borrow(account, position) {
    const amount = Number((await input.question("Enter amount: ")).trim());
    if (!ValidateBorrow(account, position, amount)) {
        return;
    }
    UpdateBorrow(account, position, amount);
    SaveBorrow(account, amount);
    console.log("Borrow successfully\n");
}

function ValidateRepay(account, position, amount) {
    if (Number.isNaN(amount) || amount <= 0) {
        console.log("Invalid amount");
        console.log();
        return false;
    }
    if (position.debt === 0) {
        console.log("You don't have debt");
        console.log();
        return false;
    }
    if (position.debt < amount) {
        console.log("Repay amount exceeds current debt");
        console.log();
        return false;
    }
    if (account.balances["USDC"] < amount) {
        console.log("You don't have enough USDC to pay debt");
        console.log();
        return false;
    }
    if (account.balances["XLM"] < NETWORK_FEE) {
        console.log("You don't have enough XLM to pay fee");
        console.log();
        return false;
    }
    return true;
}

function UpdateRepay(account, position, amount) {
    account.balances["XLM"] -= NETWORK_FEE;
    account.balances["USDC"] -= amount;
    position.debt -= amount;
}

function SaveRepay(account, amount) {
    transactionHistory.push({
        id: transactionHistory.length + 1,
        owner: account.owner,
        address: account.address,
        type: "REPAY",
        asset: "USDC",
        amount: amount,
        fee: NETWORK_FEE,
        status: "SUCCESS"
    });
}
async function Repay(account, position) {
    const amount = Number((await input.question("Enter amount: ")).trim());
    if (!ValidateRepay(account, position, amount)) {
        return;
    }
    UpdateRepay(account, position, amount);
    SaveRepay(account, amount);
    console.log("Repay successfully\n");
}

function ValidateWithdraw(account, position, amount) {
    if (Number.isNaN(amount) || amount <= 0) {
        console.log("Invalid amount\n");
        return false;
    }
    if (amount > position.collateral) {
        console.log("You cannot withdraw more than the collateral\n");
        return false;
    }
    if ((position.collateral - amount) * 0.5 < position.debt) {
        console.log("You cannot withdraw collateral\n");
        return false;
    }
    if (account.balances["XLM"] < NETWORK_FEE) {
        console.log("You don't have enough XLM to pay fee\n");
        return false;
    }
    return true;
}

function UpdateWithdraw(account, position, amount) {
    account.balances["XLM"] += amount - NETWORK_FEE;
    position.collateral -= amount;
}

function SaveWithdraw(account, amount) {
    transactionHistory.push({
        id: transactionHistory.length + 1,
        owner: account.owner,
        address: account.address,
        type: "WITHDRAW",
        collateral: "XLM",
        amount: amount,
        fee: NETWORK_FEE,
        status: "SUCCESS"
    });
}

async function Withdraw(account, position) {
    const amount = Number((await input.question("Enter amount: ")).trim());
    if (!ValidateWithdraw(account, position, amount)) {
        return;
    }
    UpdateWithdraw(account, position, amount);
    SaveWithdraw(account, amount);
    console.log("Withdraw successfully\n");
}

function GetTransactionHistory(address) {
    return transactionHistory.filter(trx => trx.address === address);
}

function ShowTransactionHistory(account) {
    const transactions = GetTransactionHistory(account.address);
    if (transactions.length === 0) {
        console.log("No transactions\n");
        return;
    }
    transactions.forEach((trx) => {
        if (trx.type === "DEPOSIT" || trx.type === "WITHDRAW") {
            console.log("ID: ", trx.id);
            console.log("Owner:", trx.owner);
            console.log("Address:", trx.address);
            console.log("Type:", trx.type);
            console.log("Collateral:", trx.collateral);
            console.log("Amount:", trx.amount);
            console.log("Fee:", NETWORK_FEE);
            console.log("STATUS:", trx.status);
            console.log();
        } else if (trx.type === "BORROW" || trx.type === "REPAY") {
            console.log("ID: ", trx.id);
            console.log("Owner:", trx.owner);
            console.log("Address:", trx.address);
            console.log("Type:", trx.type);
            console.log("Asset:", trx.asset);
            console.log("Amount:", trx.amount);
            console.log("Fee:", NETWORK_FEE);
            console.log("STATUS:", trx.status);
            console.log();
        }
    });
}

async function SetMenu(account) {
    const position = FindPosition(account.address);
    do {
        console.log("================================");
        console.log("          LENDING DAPP");
        console.log("================================");
        console.log("\nConnected:", account.address);
        console.log("Owner:", account.owner);
        console.log("\n1. Lending Position");
        console.log("2. Deposit Collateral");
        console.log("3. Borrow USDC");
        console.log("4. Repay USDC");
        console.log("5. Withdraw Collateral");
        console.log("6. Transaction History");
        console.log("7. Logout\n");
        const choice = Number((await input.question("Choose:")).trim());
        console.log();
        if (choice === 1) {
            ShowLendingPosition(account.address);
        } else if (choice === 2) {
            await Deposit(account, position);
        } else if (choice === 3) {
            await Borrow(account, position);
        } else if (choice === 4) {
            await Repay(account, position);
        } else if (choice === 5) {
            await Withdraw(account, position);
        } else if (choice === 6) {
            ShowTransactionHistory(account);
        } else if (choice === 7) {
            console.log("Thank you for using our project");
            console.log("See you again\n")
            return;
        } else {
            console.log("Invalid choice");
            console.log("Please choose again\n");
        }
    } while (true);
}

async function main() {
    const address = (await input.question("Enter your address wallet: ")).trim().toUpperCase();
    const account = ConnectWallet(address);
    if (account === undefined) {
        console.log("Wallet not found\n");
        input.close();
        return;
    }
    console.log("\nConnect your wallet successfully");
    console.log("       Wellcome", account.owner);
    console.log();
    await SetMenu(account);
    input.close();
}

main();