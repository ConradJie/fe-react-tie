import televionsPurchased from "./televisionsPurchased.js";
import televisionsSold from "./televisionsSold.js";

function televisionsToBeSold(inventory) {
    // let toBeSold = 0;
    // inventory.forEach((tv) => toBeSold += tv.originalStock - tv.sold);
    const toBeSold=televionsPurchased(inventory) - televisionsSold(inventory);
    return toBeSold;
}

export default televisionsToBeSold;