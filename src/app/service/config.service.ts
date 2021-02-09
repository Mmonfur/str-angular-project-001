import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

export interface ITableCol{
  key: string;
  text: string;
  editable?:boolean;
}

export interface IHeadline{
  key:string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Cars&Vans';

  menuItems: IMenuItem[] = [
    {text: 'Home', link: '/', icon: 'home'},
    {text: 'Cars', link: '/cars'},
    {text: 'Vans', link: '/vans'},
    {text: 'Admin', link: '/admin'},
  ];

  tableCols: ITableCol[]= [
    {key: 'id', text: '#', editable:false},
    {key: 'catId', text: 'Category', editable:true},
    {key: 'name', text: 'Name', editable:true},
    {key: 'description', text: 'Description', editable:true},
    {key: 'image', text: 'Picture', editable: true},
    {key: 'price', text: 'Price', editable: true},
    {key: 'stock', text: 'Stock', editable: true},
    {key: 'featured', text: 'Featured', editable: true},
    {key: 'active', text: 'Active', editable: true},
  ];

  headlines: IHeadline[] =[
    {key: 'id', text: 'Our ID'},
    {key: 'name', text: 'Name'},
    {key: 'description', text: 'Description'},
    {key: 'price', text: 'Price'},
    {key: 'stock', text: 'Stock'}, 
    {key: 'catId', text: 'Category'}
  ]

  constructor() { }
}
