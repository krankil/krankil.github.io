var aPriceList;

export var setPriceList = (priceList) => {
    aPriceList = priceList;
};

export var getPrice = (itemId, quantity) => {
    return aPriceList[itemId];
};
