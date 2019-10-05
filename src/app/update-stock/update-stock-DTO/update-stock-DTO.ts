export class UpdateStocksDto{
    private itemId: number;
    private itemPrice: number;
    public itemType: string;
    private itemQuantity: number;
    private itemMetric: string;
    private supplierId: string;
    private criticalLevel: number;
    private isCritical: boolean;
    private siteId: string;
    private supplierName: string;
    public editable: boolean;

    setEditable(value: boolean) {
        this.editable = value;
    }

    getItemId() {
        return this.itemId;
    }
}
