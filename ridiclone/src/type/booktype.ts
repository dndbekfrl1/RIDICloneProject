interface Representative{
    name:string,
    thumnail:string,
}

interface Author{
    name:string,
    awards?:string[],
    representatives?:Representative[],
    introduction?:string,
}

interface Translator{
    name:string,
    nationality:string,
    career?:string,
    representatives?:Representative[],
    introduction?:string
}

interface StarRate{
    rate:number,
    rateNum:number,
    rateBuyerNum:number,
}

interface BookType{
    id:number,
    thumbnail:string,
    type?:string,
    category?:string[],
    title:string,
    author:Author,
    translator:Translator,
    publisher:string,
    starRate:StarRate,
    rentalPrice?:number,
    rentalSalePercent?:number,
    buyPrice:number,
    buySalePercent?:number,
    count:number,
    freeCount:number,
    isFinished?:boolean,
    canRent?:boolean,
    waitFree?:boolean,
    xRated?:boolean,
    description:string,
    index:string,
    lastlyRead:string,
}

export default BookType;