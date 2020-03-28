import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductManagerComponent } from "./product-manager/product-manager.component";
const routes: Routes = [
  {path:"product", component:ProductListComponent},
  {path:"product/:productID", component:ProductDetailComponent},
  {path:"list", component:ProductManagerComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
