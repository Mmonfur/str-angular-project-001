import { Injectable } from '@angular/core';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  list: Category[] = [
    {id: 1, name: 'Cars', description: 'lorem'},
    {id: 2, name: 'Vans', description: 'lorem2'},
  ];

  constructor() { }
}
