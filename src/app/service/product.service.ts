import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  list: Product[] = [{
    id: 1,
    name: 'Beef - Montreal Smoked Brisket',
    featured: true
  }, {
    id: 2,
    name: 'Pineapple - Golden',
    featured: true
  }, {
    id: 3,
    name: 'Flour - All Purpose',
    featured: true
  }, {
    id: 4,
    name: 'Soup - Base Broth Chix',
    featured: false
  }, {
    id: 5,
    name: 'Shiro Miso',
    featured: true
  }, {
    id: 6,
    name: 'Puree - Raspberry',
    featured: true
  }, {
    id: 7,
    name: 'Glaze - Apricot',
    featured: true
  }, {
    id: 8,
    name: 'Muffin Mix - Raisin Bran',
    featured: true
  }, {
    id: 9,
    name: 'Cod - Black Whole Fillet',
    featured: false
  }, {
    id: 10,
    name: 'Lettuce - Escarole',
    featured: true
  }, {
    id: 11,
    name: 'Gingerale - Diet - Schweppes',
    featured: true
  }, {
    id: 12,
    name: 'Chips - Assorted',
    featured: true
  }, {
    id: 13,
    name: 'Longos - Grilled Salmon With Bbq',
    featured: false
  }, {
    id: 14,
    name: 'Dasheen',
    featured: true
  }, {
    id: 15,
    name: 'Bread - Bagels, Plain',
    featured: true
  }, {
    id: 16,
    name: 'Neckerchief Blck',
    featured: false
  }, {
    id: 17,
    name: 'Hummus - Spread',
    featured: true
  }, {
    id: 18,
    name: 'Cotton Wet Mop 16 Oz',
    featured: false
  }, {
    id: 19,
    name: 'Munchies Honey Sweet Trail Mix',
    featured: false
  }, {
    id: 20,
    name: 'Orange Roughy 6/8 Oz',
    featured: true
  }, {
    id: 21,
    name: 'Carbonated Water - Lemon Lime',
    featured: false
  }, {
    id: 22,
    name: 'Plasticknivesblack',
    featured: false
  }, {
    id: 23,
    name: 'Dragon Fruit',
    featured: false
  }, {
    id: 24,
    name: 'Juice - Mango',
    featured: false
  }, {
    id: 25,
    name: 'Spice - Peppercorn Melange',
    featured: true
  }, {
    id: 26,
    name: 'Pike - Frozen Fillet',
    featured: true
  }, {
    id: 27,
    name: 'Sobe - Liz Blizz',
    featured: false
  }, {
    id: 28,
    name: 'Ice Cream - Turtles Stick Bar',
    featured: false
  }, {
    id: 29,
    name: 'Split Peas - Green, Dry',
    featured: false
  }, {
    id: 30,
    name: 'Cheese - Oka',
    featured: true
  }, {
    id: 31,
    name: 'Cleaner - Bleach',
    featured: true
  }, {
    id: 32,
    name: 'Parsley - Dried',
    featured: false
  }, {
    id: 33,
    name: 'Lemonade - Strawberry, 591 Ml',
    featured: false
  }, {
    id: 34,
    name: 'Ice Cream - Fudge Bars',
    featured: false
  }, {
    id: 35,
    name: 'Wine - Piper Heidsieck Brut',
    featured: true
  }, {
    id: 36,
    name: 'Coffee Cup 8oz 5338cd',
    featured: true
  }, {
    id: 37,
    name: 'Bacardi Limon',
    featured: false
  }, {
    id: 38,
    name: 'Coffee Decaf Colombian',
    featured: false
  }, {
    id: 39,
    name: 'Wine - Red, Cabernet Merlot',
    featured: false
  }, {
    id: 40,
    name: 'Goulash Seasoning',
    featured: false
  }, {
    id: 41,
    name: 'Cake - Cake Sheet Macaroon',
    featured: false
  }, {
    id: 42,
    name: 'Wine - Taylors Reserve',
    featured: true
  }, {
    id: 43,
    name: 'Wine - Alsace Gewurztraminer',
    featured: true
  }, {
    id: 44,
    name: 'Wine - Chardonnay South',
    featured: false
  }, {
    id: 45,
    name: 'Plasticforkblack',
    featured: true
  }, {
    id: 46,
    name: 'Melon - Honey Dew',
    featured: false
  }, {
    id: 47,
    name: 'Seedlings - Clamshell',
    featured: true
  }, {
    id: 48,
    name: 'Bread - Kimel Stick Poly',
    featured: false
  }, {
    id: 49,
    name: 'Lamb - Loin Chops',
    featured: true
  }, {
    id: 50,
    name: 'Mushroom Morel Fresh',
    featured: true
  }]
  
  constructor() { }

  getFeatured(randomized?: boolean) : Product [] {
    const featured = this. list.filter (item => item. featured);
    return randomized ? this.randomize(featured) : featured;
  }  

  randomize( sourceArray: Product[]): Product[] {
    return sourceArray.sort( () => Math.random() - 0.5);
  }
  
  removeProduct (product: Product):void {
    const index = this.list.findIndex( item => item.id === product.id);
    this.list.splice(index, 1);
  }

  }