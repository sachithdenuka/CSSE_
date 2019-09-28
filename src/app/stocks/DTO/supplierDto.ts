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
    public supplierId: string;
    public supplierName: string;
    public items: ItemDto[];
}
