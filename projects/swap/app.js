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
            USDC: 1500
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

const pool = {
    XLM: 10000,
    USDC: 5000
};

const transactionHistory = [];

const NETWORK_FEE = 0.01;

function FindAccount(address) {
    return accounts.find(acc => acc.address === address);
}

function ShowPortfolio(account) {
    console.log("Owner:", account.owner);
    console.log("Address:", account.address);
    console.log("XLM Balance:", account.balances["XLM"]);
    console.log("USDC Balance:", account.balances["USDC"]);
    console.log();
}

function ShowPool() {
    console.log("Pool XLM:", pool["XLM"]);
    console.log("Pool USDC:", pool["USDC"]);
    console.log("Rate XLM -> USDC: ", 0.5);
    console.log("Rate USDC -> XLM:", 2);
    console.log();
}

function GetRate(from, to) {
    if (from === "XLM" && to === "USDC") {
        return 0.5;
    } else if (from === "USDC" && to === "XLM") {
        return 2;
    }
}

function ValidateSwap(from, to, account, amount) {
    if (pool[from] === undefined || pool[to] === undefined) {
        console.log("Asset not found\n");
        return false;
    }
    if (from === to) {
        console.log("Cannot swap the same asset\n");
        return false;
    }
    const rate = GetRate(from, to);
    if (amount <= 0 || Number.isNaN(amount)) {
        console.log("Invalid amount");
        return false;
    }
    if (account.balances[from] < amount) {
        console.log("Insufficient balance\n");
        return false;
    }
    if (from === "XLM") {
        if (account.balances[from] < amount + NETWORK_FEE) {
            console.log("You don't have enough XLM to pay fee\n");
            return false;
        }
    } else {
        if (account.balances["XLM"] < NETWORK_FEE) {
            console.log("You don't have enough XLM to pay fee\n");
            return false;
        }
    }
    if (pool[to] < amount * rate) {
        console.log("Pool don't have enough "+to+" to pay for user\n");
        return false;
    }
    return true;
}

function UpdateBalance(from, to, account, amount) {
    const rate = GetRate(from, to);
    account.balances[from] -= amount;
    account.balances["XLM"] -= NETWORK_FEE;
    account.balances[to] += amount * rate;
    pool[from] += amount;
    pool[to] -= amount * rate;
}

function SaveSwap(from, to, account, amount) {
    const rate = GetRate(from, to);
    transactionHistory.push({
        id: transactionHistory.length + 1,
        owner: account.owner,
        address: account.address,
        from: from,
        to: to,
        input: amount,
        output: amount * rate,
        fee: NETWORK_FEE,
        status: "SUCCESS"
    });
}

async function Swap(account) {
    const from = (await input.question("Please enter from asset: ")).trim().toUpperCase();
    const to = (await input.question("Please enter to asset: ")).trim().toUpperCase();
    const amount = Number((await input.question("Enter amount: ")).trim());
    if (!ValidateSwap(from, to, account, amount)) {
        return;
    }
    UpdateBalance(from, to, account, amount);
    SaveSwap(from, to, account, amount);
    console.log("\nSwap "+from+" to "+to+" successfully\n");
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
        console.log("ID:", trx.id);
        console.log("Owner:", trx.owner);
        console.log("Address:", trx.address);
        console.log("From asset:", trx.from);
        console.log("To asset:", trx.to);
        console.log("Input:", trx.input);
        console.log("Output:", trx.output);
        console.log("Fee:", NETWORK_FEE);
        console.log("Status:", trx.status);
        console.log();
    });
}

async function GetMenu(account) {
    do {
        console.log("=================================");
        console.log("            SWAP DAPP");
        console.log("=================================\n");
        console.log("Connected:", account.address);
        console.log("Owner:", account.owner);
        console.log("\n1. Portfolio");
        console.log("2. Pool");
        console.log("3. Swap");
        console.log("4. Transaction History");
        console.log("5. Logout\n");
        const choice = Number((await input.question("Choose: ")).trim());
        console.log();
        if (choice === 1) {
            ShowPortfolio(account);
        } else if (choice === 2) {
            ShowPool();
        } else if (choice === 3) {
            await Swap(account);
        } else if (choice === 4) {
            ShowTransactionHistory(account);
        } else if (choice === 5) {
            console.log("Thank you for using our project");
            console.log("See you again");
            return;
        } else {
            console.log("Invalid choice");
            console.log("Pleas choose again");
        }
    } while (true);
}

async function main() {
    const address = (await input.question("Please enter your address wallet: ")).trim().toUpperCase();
    const account = FindAccount(address);
    if (account === undefined) {
        console.log("Wallet not found");
        input.close();
        return;
    }
    await GetMenu(account);
    input.close();
} 

main();