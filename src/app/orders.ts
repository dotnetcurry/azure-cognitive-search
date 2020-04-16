export class Orders {
  constructor(public OrderID: string,
    public CustomerName: string,
    public EmployeeName: string,
    public OrderDate: string,
    public RequiredDate: string,
    public ShippedDate: string,
    public ShipperName: string,
    public Freight: number,
    public ShipName: string,
    public ShipAddress: string,
    public ShipCity: string,
    public ShipPostalCode: string,
    public ShipCountry: string,
    public id: string) {
  }
}
