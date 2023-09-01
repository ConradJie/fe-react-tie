function televisionsSold(inventory) {
    let sold = 0;
    inventory.forEach((tv) => sold += tv.sold);
    return sold;
}

export default televisionsSold;