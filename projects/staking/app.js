// WEB3 BASE

// ========================================
// 1. APP SETUP
// ========================================

const Tool = require("readline/promises");
const input = Tool.createInterface({
    input: process.stdin,
    output: process.stdout
});


// ========================================
// 2. COMMON CONFIG PLACEHOLDER
// ========================================

// Add project configuration here.


// ========================================
// 3. COMMON HELPERS
// ========================================

function NormalizeAddress(address) {
    return address.trim().toUpperCase();
}
function NormalizeAsset(asset) {
    return asset.trim().toUpperCase();
}


// ========================================
// 4. PROJECT DATA
// ========================================

const accounts = [
    {
        owner: "Alice",
        address: "GALICE",
        balances: {
            XLM: 3000
        }
    },
    {
        owner: "Bob",
        address: "GBOB",
        balances: {
            XLM: 1500
        }
    },
    {
        owner: "Ken",
        address: "GKEN",
        balances: {
            XLM: 5000
        }
    }
];

const stakingPositions = [
    {
        address: "GALICE",
        staked: 500,
        reward: 50
    },
    {
        address: "GBOB",
        staked: 0,
        reward: 0
    },
    {
        address: "GKEN",
        staked: 1000,
        reward: 120
    }
];

const transactionHistory = [];

const NETWORK_FEE = 0.01;


// ========================================
// 5. PROJECT HELPERS
// ========================================

function FindAccount(address) {
    return accounts.find(acc => acc.address === address);
}

function FindStakingPosition(address) {
    return stakingPositions.find(stak => stak.address === address);
}


// ========================================
// 6. PROJECT FEATURES
// ========================================

async function ConnectWallet() {
    const address = NormalizeAddress(await input.question("Please enter your address wallet: "));
    return FindAccount(address);
}

function ShowStakingPosition(account) {
    const position = FindStakingPosition(account.address);
    if (position === undefined) {
        console.log("Staking position not found");
        console.log();
        return;
    }
    console.log("========== STAKING POSITION ==========\n");
    console.log("Owner:", account.owner);
    console.log("Address:", account.address);
    console.log("Wallet XLM:", account.balances["XLM"]);
    console.log("Staked XLM:", position.staked);
    console.log("Reward XLM:", position.reward);
    console.log();
}

function ValidateStake(account, amount) {
    if (Number.isNaN(amount) || amount <= 0) {
        console.log("Invalid amount");
        return false
    }
    if (account.balances["XLM"] < amount ) {
        console.log("Insufficient balance");
        return false;
    }
    if (account.balances["XLM"] < amount + NETWORK_FEE) {
        console.log("You don't have enough XLM to pay fee");
        return false;
    }
    console.log();
    return true;
}

function UpdateStake(account, position, amount) {
    account.balances["XLM"] -= amount;
    account.balances["XLM"] -= NETWORK_FEE;
    position.staked += amount;
}

function SaveStakeTransaction(account, amount) {
    transactionHistory.push({
        id: transactionHistory.length + 1,
        type: "STAKE",
        address: account.address,
        amount: amount,
        fee: NETWORK_FEE,
        status: "SUCCESS"
    });
}

async function Stake(account) {
    const amount = Number((await input.question("Enter amount: ")).trim());
    if (!ValidateStake(account, amount)) {
        return;
    }
    UpdateStake(account, FindStakingPosition(account.address), amount);
    SaveStakeTransaction(account, amount);
    console.log("Stake succesfully");
    console.log();
}

function ValidateUnstake(account,position, amount) {
    if (Number.isNaN(amount) || amount <= 0) {
        console.log("Invalid amount");
        return false;
    }
    if (position === undefined) {
        console.log("Staking position not found");
        return false;
    }
    if (position.staked < amount) {
        console.log("Insufficient balance");
        return false;
    }
    if (account.balances["XLM"] < NETWORK_FEE) {
        console.log("You don't have enough XLM to pay fee");
        return false;
    }
    console.log();
    return true;
}

function UpdateUnstake(account, position, amount) {
    account.balances["XLM"] += amount;
    account.balances["XLM"] -= NETWORK_FEE;
    position.staked -= amount;
}

function SaveUnstakeTransaction(account, amount) {
    transactionHistory.push({
        id: transactionHistory.length + 1,
        type: "UNSTAKE",
        address: account.address,
        amount: amount,
        fee: NETWORK_FEE,
        status: "SUCCESS"
    });
}

async function Unstake(account) {
    const amount = Number((await input.question("Enter amount: ")).trim());
    if (!ValidateUnstake(account,FindStakingPosition(account.address), amount)) {
        return;
    }
    UpdateUnstake(account, FindStakingPosition(account.address), amount);
    SaveUnstakeTransaction(account, amount);
    console.log("Unstake succesfully");
    console.log();
}

function ValidateClaim(account, position) {
    if (position === undefined) {
        console.log("Staking position not found");
        return false;
    }
    if (position.reward <= 0) {
        console.log("Insufficien reward");
        return false;
    }
    if (account.balances["XLM"] <NETWORK_FEE) {
        console.log("You don't have enough XLM to pay fee");
        return false;
    }
    console.log();
    return true;
}

function UpdateClaim(account, position) {
    account.balances["XLM"] += position.reward - NETWORK_FEE;
    position.reward = 0;
}

function SaveClaimTransaction(account, amount) {
    transactionHistory.push({
        id: transactionHistory.length + 1,
        type: "CLAIM",
        address: account.address,
        amount: amount,
        fee: NETWORK_FEE,
        status: "SUCCESS"
    });
}

function ClaimReward(account) {
    const position = FindStakingPosition(account.address);
    if (!ValidateClaim(account, position)) {
        return;
    }
    const reward = position.reward;
    UpdateClaim(account, position);
    SaveClaimTransaction(account, reward);
    console.log("Claim reward successfully\n");
}

function GetAccountTransactions(address) {
    return transactionHistory.filter(trx => trx.address === address);
}
function ShowTransactionHistory(account) {
    const trans = GetAccountTransactions(account.address);
    if (trans.length === 0) {
        console.log("No transactions");
        console.log();
        return;
    }
    trans.forEach((trx) => {
        console.log("ID:", trx.id);
        console.log("Type:", trx.type);
        console.log("Address:", trx.address);
        console.log("Amount:", trx.amount);
        console.log("Fee:", trx.fee);
        console.log("Status:", trx.status);
        console.log();
    });
}


// ========================================
// 7. PROJECT MENU
// ========================================

async function StakingMenu(account) {
    do {
        console.log("===============================");
        console.log("          STAKING APP")
        console.log("===============================\n");
        console.log("Connected:", account.address);
        console.log("Owner:", account.owner);
        console.log("\n1. Staking Position");
        console.log("2. Stake XLM");
        console.log("3. Unstake XLM");
        console.log("4. Claim Reward");
        console.log("5. Transaction History");
        console.log("6. Logout\n");
        const choose = Number((await input.question("Choose: ")).trim());
        if (choose === 1) {
            ShowStakingPosition(account);
        } else if (choose === 2) {
            await Stake(account);
        } else if (choose === 3) {
            await Unstake(account);
        } else if (choose === 4) {
            ClaimReward(account);
        } else if (choose === 5) {
            ShowTransactionHistory(account);
        } else if (choose === 6) {
            break;
        } else {
            console.log("Invalid choice");
            console.log("Please enter again");
            console.log();
        }
    } while (true)
}


// ========================================
// 8. MAIN
// ========================================

async function main() {
    const account = await ConnectWallet();
    if (account === undefined) {
        console.log("Wallet not found");
        console.log();
        input.close();
        return;
    }
    console.log("Connected successfully");
    console.log("Wellcome", account.owner);
    await StakingMenu(account);
    input.close();
}

main();