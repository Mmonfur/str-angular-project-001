import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  list : Product [] =
    [{
      id: 1,
      catId: 1001,
      name: "Ford",
      description: "velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id",
      image: "assets/img/h 1 ford.jpg",
      price: 8791.31,
      stock: 89,
      featured: true,
      active: false
    }, {
      id: 2,
      catId: 1002,
      name: "Mitsubishi",
      description: "sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus",
      image: "assets/img/2 mitsubishi.jpg",
      price: 6616.73,
      stock: 89,
      featured: false,
      active: true
    }, {
      id: 3,
      catId: 1002,
      name: "Mazda",
      description: "elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac",
      image: "assets/img/3 mazda.jpg",
      price: 9732.58,
      stock: 7,
      featured: true,
      active: true
    }, {
      id: 4,
      catId: 1002,
      name: "Land Rover",
      description: "massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit",
      image: "assets/img/4 land rover.jpg",
      price: 6978.70,
      stock: 77,
      featured: false,
      active: true
    }, {
      id: 5,
      catId: 1002,
      name: "Volvo",
      description: "curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis",
      image: "assets/img/5 volvo.jpg",
      price: 1343.54,
      stock: 72,
      featured: true,
      active: true
    }, {
      id: 6,
      catId: 1002,
      name: "Plymouth",
      description: "curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel",
      image: "assets/img/6 plymouth.jpg",
      price: 9368.93,
      stock: 5,
      featured: false,
      active: true
    }, {
      id: 7,
      catId: 1001,
      name: "Ford",
      description: "nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh",
      image: "assets/img/h 7 ford.jpg",
      price: 7208.47,
      stock: 5,
      featured: false,
      active: false
    }, {
      id: 8,
      catId: 1002,
      name: "Chevrolet",
      description: "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus",
      image: "assets/img/8 chevrolet.jpg",
      price: 4107.64,
      stock: 58,
      featured: true,
      active: false
    }, {
      id: 9,
      catId: 1002,
      name: "Acura",
      description: "nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum",
      image: "assets/img/9 acura.jpg",
      price: 1974.29,
      stock: 43,
      featured: false,
      active: false
    }, {
      id: 10,
      catId: 1002,
      name: "Saturn",
      description: "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet",
      image: "assets/img/10 saturn.jpg",
      price: 7133.63,
      stock: 70,
      featured: true,
      active: false
    }, {
      id: 11,
      catId: 1002,
      name: "Honda",
      description: "vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in",
      image: "assets/img/11 honda.jpg",
      price: 6633.69,
      stock: 9,
      featured: false,
      active: true
    }, {
      id: 12,
      catId: 1002,
      name: "Plymouth",
      description: "nullam orci pede venenatis non sodales sed tincidunt eu felis",
      image: "assets/img/12 plymouth.jpg",
      price: 4811.95,
      stock: 11,
      featured: true,
      active: false
    }, {
      id: 13,
      catId: 1002,
      name: "Dodge",
      description: "est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna",
      image: "assets/img/13 dodge.jpg",
      price: 8976.49,
      stock: 49,
      featured: false,
      active: true
    }, {
      id: 14,
      catId: 1002,
      name: "Lexus",
      description: "volutpat quam pede lobortis ligula sit amet eleifend pede libero",
      image: "assets/img/14 lexus.jpg",
      price: 2401.60,
      stock: 78,
      featured: true,
      active: false
    }, {
      id: 15,
      catId: 1002,
      name: "Chevrolet",
      description: "non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros",
      image: "assets/img/15 chevrolet.jpg",
      price: 9252.21,
      stock: 41,
      featured: false,
      active: false
    }, {
      id: 16,
      catId: 1002,
      name: "Jeep",
      description: "quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst",
      image: "assets/img/16 jeep.jpg",
      price: 1080.96,
      stock: 50,
      featured: true,
      active: true
    }, {
      id: 17,
      catId: 1002,
      name: "Saab",
      description: "primis in faucibus orci luctus et ultrices posuere cubilia curae",
      image: "assets/img/17 saab.jpg",
      price: 4686.73,
      stock: 10,
      featured: false,
      active: true
    }, {
      id: 18,
      catId: 1002,
      name: "Volkswagen",
      description: "venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada",
      image: "assets/img/18 volkswagen.jpg",
      price: 9427.06,
      stock: 56,
      featured: false,
      active: true
    }, {
      id: 19,
      catId: 1002,
      name: "BMW",
      description: "odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat",
      image: "assets/img/19 bmw.jpg",
      price: 2137.97,
      stock: 55,
      featured: false,
      active: true
    }, {
      id: 20,
      catId: 1001,
      name: "Ford",
      description: "malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem",
      image: "assets/img/h 20 ford.jpg",
      price: 1269.74,
      stock: 7,
      featured: true,
      active: false
    }, {
      id: 21,
      catId: 1002,
      name: "Infiniti",
      description: "aliquam non mauris morbi non lectus aliquam sit amet diam in",
      image: "assets/img/21 infiniti.jpg",
      price: 3470.18,
      stock: 47,
      featured: true,
      active: true
    }, {
      id: 22,
      catId: 1001,
      name: "Ford",
      description: "rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia",
      image: "assets/img/h 22 ford.jpg",
      price: 1501.04,
      stock: 22,
      featured: true,
      active: false
    }, {
      id: 23,
      catId: 1001,
      name: "Nissan",
      description: "nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo",
      image: "assets/img/h 23 nissan.jpg",
      price: 6447.39,
      stock: 29,
      featured: true,
      active: false
    }, {
      id: 24,
      catId: 1002,
      name: "Chevrolet",
      description: "lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae",
      image: "assets/img/24 chevrolet.jpg",
      price: 6554.27,
      stock: 1,
      featured: false,
      active: true
    }, {
      id: 25,
      catId: 1002,
      name: "Dodge",
      description: "posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum",
      image: "assets/img/25 dodge.jpg",
      price: 9493.51,
      stock: 51,
      featured: true,
      active: true
    }, {
      id: 26,
      catId: 1002,
      name: "Cadillac",
      description: "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices",
      image: "assets/img/26 cadillac.jpg",
      price: 5488.38,
      stock: 57,
      featured: true,
      active: true
    }, {
      id: 27,
      catId: 1002,
      name: "Chevrolet",
      description: "congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue",
      image: "assets/img/27 chevrolet.jpg",
      price: 1218.59,
      stock: 29,
      featured: false,
      active: true
    }, {
      id: 28,
      catId: 1002,
      name: "Chevrolet",
      description: "pretium quis lectus suspendisse potenti in eleifend quam a odio in",
      image: "assets/img/28 chevrolet.jpg",
      price: 9030.30,
      stock: 96,
      featured: true,
      active: true
    }, {
      id: 29,
      catId: 1002,
      name: "GMC",
      description: "velit eu est congue elementum in hac habitasse platea dictumst",
      image: "assets/img/29 gmc.jpg",
      price: 3240.94,
      stock: 70,
      featured: true,
      active: false
    }, {
      id: 30,
      catId: 1002,
      name: "Chevrolet",
      description: "non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris",
      image: "assets/img/30 chevrolet.jpg",
      price: 4517.61,
      stock: 12,
      featured: true,
      active: true
    }, {
      id: 31,
      catId: 1002,
      name: "Jensen",
      description: "parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus",
      image: "assets/img/31 jensen.jpg",
      price: 5058.05,
      stock: 67,
      featured: false,
      active: false
    }, {
      id: 32,
      catId: 1002,
      name: "Chevrolet",
      description: "ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede",
      image: "assets/img/32 chevrolet.jpg",
      price: 3595.28,
      stock: 86,
      featured: true,
      active: false
    }, {
      id: 33,
      catId: 1002,
      name: "Chevrolet",
      description: "magna ac consequat metus sapien ut nunc vestibulum ante ipsum",
      image: "assets/img/33 chevrolet.jpg",
      price: 1729.96,
      stock: 38,
      featured: false,
      active: false
    }, {
      id: 34,
      catId: 1002,
      name: "Lexus",
      description: "ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt",
      image: "assets/img/34 lexus.jpg",
      price: 7434.20,
      stock: 95,
      featured: false,
      active: false
    }, {
      id: 35,
      catId: 1002,
      name: "Volvo",
      description: "leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet",
      image: "assets/img/35 volvo.jpg",
      price: 5752.11,
      stock: 42,
      featured: true,
      active: true
    }, {
      id: 36,
      catId: 1002,
      name: "Pontiac",
      description: "consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus",
      image: "assets/img/36 pontiac.jpg",
      price: 1482.88,
      stock: 37,
      featured: false,
      active: false
    }, {
      id: 37,
      catId: 1002,
      name: "Honda",
      description: "quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse",
      image: "assets/img/37 honda.jpg",
      price: 5364.09,
      stock: 17,
      featured: true,
      active: false
    }, {
      id: 38,
      catId: 1002,
      name: "Isuzu",
      description: "erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis",
      image: "assets/img/38 isuzu.jpg",
      price: 7956.94,
      stock: 65,
      featured: true,
      active: false
    }, {
      id: 39,
      catId: 1002,
      name: "Suzuki",
      description: "hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel",
      image: "assets/img/39 suzuki.jpg",
      price: 2283.00,
      stock: 86,
      featured: false,
      active: false
    }, {
      id: 40,
      catId: 1002,
      name: "Chevrolet",
      description: "non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac",
      image: "assets/img/40 chevrolet.jpg",
      price: 8101.89,
      stock: 35,
      featured: true,
      active: false
    }, {
      id: 41,
      catId: 1002,
      name: "Pontiac",
      description: "vestibulum quam sapien varius ut blandit non interdum in ante",
      image: "assets/img/41 pontiac.jpg",
      price: 2978.22,
      stock: 48,
      featured: false,
      active: true
    }, {
      id: 42,
      catId: 1002,
      name: "GMC",
      description: "risus praesent lectus vestibulum quam sapien varius ut blandit non interdum",
      image: "assets/img/42 gmc.jpg",
      price: 4487.64,
      stock: 100,
      featured: true,
      active: false
    }, {
      id: 43,
      catId: 1002,
      name: "Chrysler",
      description: "id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis",
      image: "assets/img/43 chrysler.jpg",
      price: 4293.33,
      stock: 52,
      featured: true,
      active: false
    }, {
      id: 44,
      catId: 1002,
      name: "Dodge",
      description: "ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam",
      image: "assets/img/44 dodge.jpg",
      price: 7447.41,
      stock: 100,
      featured: true,
      active: true
    }, {
      id: 45,
      catId: 1001,
      name: "Ford",
      description: "parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum",
      image: "assets/img/h 45 ford.jpg",
      price: 3977.03,
      stock: 58,
      featured: true,
      active: false
    }, {
      id: 46,
      catId: 1002,
      name: "BMW",
      description: "enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id",
      image: "assets/img/46 bmw.jpg",
      price: 7738.43,
      stock: 59,
      featured: false,
      active: true
    }, {
      id: 47,
      catId: 1002,
      name: "Oldsmobile",
      description: "dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum",
      image: "assets/img/47 oldsmobile.jpg",
      price: 3069.22,
      stock: 58,
      featured: false,
      active: true
    }, {
      id: 48,
      catId: 1002,
      name: "Pontiac",
      description: "convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices",
      image: "assets/img/48 pontiac.jpg",
      price: 2636.53,
      stock: 27,
      featured: true,
      active: true
    }, {
      id: 49,
      catId: 1002,
      name: "Nissan",
      description: "pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis",
      image: "assets/img/49 nissan.jpg",
      price: 1321.25,
      stock: 57,
      featured: true,
      active: true
    }, {
      id: 50,
      catId: 1002,
      name: "Nissan",
      description: "tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero",
      image: "assets/img/50 nissan.jpg",
      price: 8004.58,
      stock: 41,
      featured: true,
      active: false
    }];

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

