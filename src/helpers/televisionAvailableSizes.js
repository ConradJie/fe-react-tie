function televisionAvailableSizes(tv) {
    let sizes = "";
    tv.availableSizes.forEach((size) => sizes += ` | ${size} inches (${Math.round(size * 2.54)}cm)`);
    return sizes.substring(3);
}

export default televisionAvailableSizes;