import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    templateUrl:    './product-list.component.html',
    styleUrls:      ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    showImage: boolean  = false;
    pageTitle: string   = 'Product List';
    imageWidth: number  = 50;
    imageMargin: number = 2;
    errorMessage: string;

    private _listFilter: string;
    public get listFilter(): string {
        return this._listFilter;
    }
    public set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];

    // Constructor to initialize data
    constructor(private productService: ProductService) {}

    onRatingClicked(message: string): void {
        this.pageTitle = "Product List: " + message;
    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLowerCase();
        return this.products.filter((product: IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
        );
    }

    // Lifecycle hooks
    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            products => {
                this.products           = products;
                this.filteredProducts   = this.products;
            },
            error => this.errorMessage = <any>error
        )
    }
}