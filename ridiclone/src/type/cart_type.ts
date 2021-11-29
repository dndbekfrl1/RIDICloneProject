
interface Author{
    name:string,
    awards?:string[],
    representatives?:string[],
    representativesThumbnail:string,
    introduction?:string,
}

interface Translator{
    name:string,
    nationality:string,
    career?:string,
    representatives?:string[],
    introduction?:string
}

interface StarRate{
    rate:number,
    rateNum:number,
    rateBuyerNum:number,
}

interface CartType{
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

export default CartType;