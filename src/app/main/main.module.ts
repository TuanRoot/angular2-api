import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { HomeComponent } from './home/home.component';
import { FunctionComponent } from './function/function.component';



@NgModule({
  declarations: [UserComponent, RoleComponent, ProductCategoryComponent, HomeComponent, FunctionComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
