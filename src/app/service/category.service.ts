import { Injectable } from '@angular/core';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  list: Category[] = [
    {id: 1, name: 'cars', description: 'Cars'},
    {id: 2, name: 'vans', description: 'Vans'},
  ];

  constructor() { }
}
