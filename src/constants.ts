/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'Animals' | 'Food' | 'Flowers' | 'Characters' | 'Custom';
  image: string;
  material: string;
  size: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Crochet Teddy Bear',
    price: 199,
    description: 'A tiny, cuddly teddy bear to keep your keys company. Hand-stitched with premium soft yarn.',
    category: 'Animals',
    image: 'https://i.etsystatic.com/40650062/r/il/b9510a/6570592984/il_600x600.6570592984_rbul.jpg',
    material: '100% Cotton Yarn, Polyester Fiberfill',
    size: '2.5 inches'
  },
  {
    id: '2',
    name: 'Crochet Avocado',
    price: 149,
    description: 'The cutest avocado you will ever see! Complete with a tiny pit and a happy smile.',
    category: 'Food',
    image: 'https://th.bing.com/th/id/R.249156e508eda73f14fb4c2303023309?rik=jvveiOAwvSDhfA&riu=http%3a%2f%2fchuri.ca%2fcdn%2fshop%2ffiles%2fIMG_8350.jpg%3fv%3d1697850313&ehk=mQwVcdCjVqq4VJB%2b19QinGsFl%2b%2f2CZHcck%2b9ORbOtCc%3d&risl=&pid=ImgRaw&r=0',
    material: 'Milk Cotton Yarn',
    size: '2 inches'
  },
  {
    id: '3',
    name: 'Crochet Sunflower',
    price: 179,
    description: 'Bring a little sunshine wherever you go with this bright and cheerful sunflower.',
    category: 'Flowers',
    image: 'https://i.etsystatic.com/iap/7d0fa6/6838700987/iap_600x600.6838700987_eaiyjce5.jpg?version=0',
    material: 'Premium Acrylic Yarn',
    size: '3 inches'
  },
  {
    id: '4',
    name: 'Crochet Bunny',
    price: 199,
    description: 'Long ears and a fluffy tail. This bunny is ready for adventures on your backpack.',
    category: 'Animals',
    image: 'https://i.pinimg.com/originals/06/6b/1b/066b1b9c0ceec42cbe15960a7b2f91a0.webp',
    material: 'Soft Velvet Yarn',
    size: '3.5 inches'
  },
  {
    id: '5',
    name: 'Crochet Strawberry',
    price: 149,
    description: 'Sweet and simple. A perfect little berry to brighten up your day.',
    category: 'Food',
    image: 'https://i.etsystatic.com/34486325/r/il/4461a2/5255247299/il_1080xN.5255247299_87io.jpg',
    material: 'Cotton Yarn',
    size: '1.5 inches'
  },
  {
    id: '6',
    name: 'Crochet Bee',
    price: 169,
    description: 'A buzzy little friend with tiny wings. Guaranteed not to sting!',
    category: 'Animals',
    image: 'https://i.etsystatic.com/14828632/c/1384/1384/11/36/il/f50c5b/6171275914/il_600x600.6171275914_h9gh.jpg',
    material: 'Milk Cotton Yarn',
    size: '2 inches'
  }
];

export const CATEGORIES = ['Animals', 'Food', 'Flowers', 'Characters', 'Custom'];
