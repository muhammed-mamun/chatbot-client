import { Component } from '@angular/core';
import { HomeBannerComponent } from "./home-banner/home-banner.component";
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeBannerComponent, ProductListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
