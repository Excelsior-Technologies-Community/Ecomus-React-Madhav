// Import all product images
import img1 from '../assets/images/imgi_18_white-1.jpg';
import img2 from '../assets/images/imgi_19_black-1.jpg';
import img3 from '../assets/images/imgi_17_orange-1.jpg';
import img4 from '../assets/images/imgi_38_green.jpg';
import img5 from '../assets/images/imgi_36_brown.jpg';
import img6 from '../assets/images/imgi_37_purple.jpg';
import img7 from '../assets/images/imgi_20_white-3.jpg';
import img8 from '../assets/images/imgi_22_white-2.jpg';
import img9 from '../assets/images/imgi_25_brown-2.jpg';
import img10 from '../assets/images/imgi_39_light-green-1.jpg';
import img11 from '../assets/images/imgi_40_light-green-2.jpg';
import img12 from '../assets/images/imgi_41_black-3.jpg';
import img13 from '../assets/images/imgi_51_white-7.jpg';
import img14 from '../assets/images/imgi_52_white-8.jpg';
import img15 from '../assets/images/imgi_42_blue.jpg';
import img16 from '../assets/images/imgi_56_brown-4.jpg';
import img17 from '../assets/images/imgi_43_dark-blue.jpg';
import img18 from '../assets/images/imgi_58_black-9.jpg';
import img19 from '../assets/images/imgi_61_grey-2.jpg';
import img20 from '../assets/images/imgi_44_white-6.jpg';
import img21 from '../assets/images/imgi_65_black-11.jpg';
import img22 from '../assets/images/imgi_45_light-grey.jpg';

const Newdatas = [
    {
    id: 1,
    name: "Ribbed Tank Top",
    price: 16.95,
    category: "Fashion",
    inStock: true,
    img1: img1,
    img2: img2,
    colorImages: {
      orange: img3,
      black: img2,
      white: img1
    },
    colors: ["orange", "black", "white"],
    sizes: ["S", "M", "L"],
    description: "Comfortable ribbed tank top for everyday wear"
  },
  {
    id: 2,
    name: "Ribbed Modal T-shirt",
    price: 18.95,
    category: "Fashion",
    inStock: true,
    img1: img4,
    img2: img5,
    colorImages: {
      brown: img3,
      pink: img2,
      lightgreen: img1
    },
    colors: ["brown", "pink", "lightgreen"],
    sizes: ["S", "M", "L"],
    description: "Soft modal fabric t-shirt with ribbed texture"
  },
  {
    id: 3,
    name: "Oversized Printed T-shirt",
    price: 10.0,
    category: "Men",
    inStock: true,
    img1: img7,
    img2: img6,
    colorImages: {},
    colors: [],
    sizes: ["S", "M", "L"],
    description: "Trendy oversized printed t-shirt"
  },
  {
    id: 4,
    name: "Oversized Printed T-shirt",
    price: 16.95,
    category: "Women",
    inStock: false,
    img1: img8,
    img2: img4,
    colorImages: {
      white: img3,
      violet: img2,
      black: img1
    },
    colors: ["white", "violet", "black"],
    sizes: ["S", "M", "L"],
    description: "Stylish oversized t-shirt with unique prints"
  },
  {
    id: 5,
    name: "V-neck linen T-shirt",
    price: 16.95,
    category: "Men",
    inStock: true,
    img1: img9,
    img2: img10,
    colorImages: {
      orange: img3,
      black: img2,
      white: img1
    },
    colors: ["orange", "black", "white"],
    sizes: ["S", "M", "L"],
    description: "Breathable linen t-shirt with v-neck design"
  },
  {
    id: 6,
    name: "Loose Fit Sweatshirt",
    price: 18.95,
    category: "Fashion",
    inStock: true,
    img1: img10,
    img2: img11,
    colorImages: {
      brown: img3,
      pink: img2,
      lightgreen: img1
    },
    colors: ["brown", "pink", "lightgreen"],
    sizes: ["S", "M", "L"],
    description: "Comfortable loose fit sweatshirt"
  },
  {
    id: 7,
    name: "Regular Fit oxford Shirt",
    price: 10.0,
    category: "Men",
    inStock: true,
    img1: img13,
    img2: img12,
    colorImages: {},
    colors: [],
    sizes: ["S", "M", "L"],
    description: "Classic oxford shirt for formal occasions"
  },
  {
    id: 8,
    name: "Loose Fit Hoodie",
    price: 16.95,
    category: "Fashion",
    inStock: true,
    img1: img14,
    img2: img15,
    colorImages: {
      white: img3,
      violet: img2,
      black: img1
    },
    colors: ["white", "violet", "black"],
    sizes: ["S", "M", "L"],
    description: "Cozy loose fit hoodie for casual wear"
  },
  {
    id: 9,
    name: "Patterned scarf",
    price: 16.95,
    category: "Fashion",
    inStock: false,
    img1: img16,
    img2: img15,
    colorImages: {
      orange: img3,
      black: img2,
      white: img1
    },
    colors: ["orange", "black", "white"],
    sizes: ["S", "M", "L"],
    description: "Stylish patterned scarf for all seasons"
  },
  {
    id: 10,
    name: "Slim Fit Fine-Knit Turtleneck Sweater",
    price: 18.95,
    category: "Denim",
    inStock: true,
    img1: img18,
    img2: img17,
    colorImages: {
      brown: img3,
      pink: img2,
      lightgreen: img1
    },
    colors: ["brown", "pink", "lightgreen"],
    sizes: ["S", "M", "L"],
    description: "Elegant turtleneck sweater with slim fit"
  },
  {
    id: 11,
    name: "Slim Fit Fine-Knit Turtleneck Sweater",
    price: 10.0,
    category: "Dress",
    inStock: true,
    img1: img19,
    img2: img20,
    colorImages: {},
    colors: [],
    sizes: ["S", "M", "L"],
    description: "Fine-knit turtleneck in neutral colors"
  },
  {
    id: 12,
    name: "Slim Fit Fine-Knit Turtleneck Sweater",
    price: 16.95,
    category: "Fashion",
    inStock: true,
    img1: img21,
    img2: img22,
    colorImages: {
      white: img3,
      violet: img2,
      black: img1
    },
    colors: ["white", "violet", "black"],
    sizes: ["S", "M", "L"],
    description: "Versatile turtleneck sweater for winter"
  },
]

export default Newdatas;