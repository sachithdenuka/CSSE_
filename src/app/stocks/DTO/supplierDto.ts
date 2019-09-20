export class SupplierDto {
    private supplierId: string;
    private supplierName: string;
    private items: ItemDto[];
}

export class ItemDto {
    private itemId: string;
    private itemName: string;
    private price: string;
}

export class SuppliersDto {
    private suplierId: string;
    private suplierName: string;
}
