import {StocksDto} from '../../stocks/DTO/stocksDto';

export class OrderDto {
    private ordType: string;
    private ordStatus: string;
    private companyName: string;
    private deliveryAddress: string;
    private ordDate: Date;
    private deliveryDate: Date;
    private itemIdList: StocksDto[];
    private quantity: number;
    private cost: number;
    private supplierId: string;
    private siteId: string;

}
