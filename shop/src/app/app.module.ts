import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductThumbComponent } from './product-thumb/product-thumb.component';
import { PromotionPipe } from './promotion.pipe';
import { ProductService } from './service/product.service';
import { CartService } from './cart.service';
import { EmptyCartGuard } from './guards/empty-cart.guard';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { ProductResolver } from './product.resolver';
import {MatSliderModule} from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/counter.reducer';
import { randomReducer } from './reducers/random.reducer';
import { MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    CartComponent,
    ProductDetailComponent,
    ProductThumbComponent,
    PromotionPipe,
    NotAllowedComponent,
    
  ],
  imports: [MatSliderModule,MatSlideToggleModule,MatButtonModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }), HttpClientModule,FormsModule, 
    RouterModule.forRoot([
    { "component": HomeComponent,
        "path": "home" },
    { "component": ProductDetailComponent,
        "path": "product/:id",
        "resolve": { product: ProductResolver } },
    { "component": CatalogComponent,
        "path": "catalogue" },
    { "component": NotAllowedComponent,
        "path": "notallowed" },
    { "component": CartComponent,
        "path": "cart",
        "canActivate": [EmptyCartGuard]
    },
    { loadChildren: () => import("./modules/clock/clock.module").then(mod => mod.ClockModule),
        "path": "clock" },
], {
    initialNavigation: 'enabled'
}), BrowserAnimationsModule, StoreModule.forRoot(
    {count: counterReducer,random:randomReducer}
   )
  ],
  providers: [HttpClientModule,ProductService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
