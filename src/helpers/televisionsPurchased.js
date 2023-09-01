function televisionsPurchased(inventory) {
    let purchased = 0;
    inventory.forEach((tv) => purchased += tv.originalStock);
    return purchased;
}

export default televisionsPurchased;