// WEB3 BASE

// ========================================
// 1. APP SETUP
// ========================================

const Tool = require("readline/promises");
const input = Tool.createInterface({
    input: process.stdin,
    output: process.sdtout
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

function GetNextId(history) {
    return history.length + 1;
}


// ========================================
// 4. PROJECT DATA
// ========================================


// ========================================
// 5. PROJECT HELPERS
// ========================================


// ========================================
// 6. PROJECT FEATURES
// ========================================


// ========================================
// 7. PROJECT MENU
// ========================================


// ========================================
// 8. MAIN
// ========================================

async function main() {

}

main();