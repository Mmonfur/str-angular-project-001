import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule}  from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { ProductPagerComponent } from './common/product-pager/product-pager.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { AdminComponent } from './page/admin/admin.component';
import { DataEditorComponent } from './common/data-editor/data-editor.component';
import { Cat1PagerComponent } from './common/cat1-pager/cat1-pager.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    ProductPagerComponent,
    ProductListComponent,
    AdminComponent,
    DataEditorComponent,
    Cat1PagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
