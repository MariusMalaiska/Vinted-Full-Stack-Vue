import Vue from "vue";
import Vuex from "vuex";
import cart from "./modules/cart/";
import shop from "./modules/shop/";
// import auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    shop
    // auth
  }
});

// export default new Vuex.Store({
//   state: {
//     items: [
//       {
//         id: "stringas",
//         img: [
//           require("@/assets/img/home/dzemperis1.jpeg"),
//           require("@/assets/img/home/dzemperis2.jpeg"),
//           require("@/assets/img/home/dzemperis3.jpeg"),
//           require("@/assets/img/home/dzemperis4.jpeg"),
//           require("@/assets/img/home/dzemperis5.jpeg"),
//           require("@/assets/img/home/dzemperis6.jpeg"),
//           require("@/assets/img/home/dzemperis7.jpeg"),
//           require("@/assets/img/home/dzemperis8.jpeg")
//         ],
//         title: "Benetton striukė",
//         about: "devėta, tačiau būklė ideali",
//         city: "Vilnius",
//         color: "juoda",
//         date: "19-02-11",
//         condition: "GERA",
//         price: 8,
//         size: "xs",
//         height: 22,
//         width: 11,
//         brand: "Adidas",

//         sex: "male",
//         categories: ["female"],
//         tags: ["leather pants", "skinny pants"]
//       },
//       {
//         id: "stringas1",
//         img: [require("@/assets/img/home/rubas-2.jpg")],
//         title: "Benetton striukė",
//         about: "devėta, tačiau būklė ideali",
//         city: "Vilnius",
//         color: "chaki",
//         date: "19-08-11",
//         condition: "LABAI GERA",
//         price: 22,
//         size: "xl",
//         height: 22,
//         width: 11,

//         sex: "male",
//         categories: ["female", "pants"],
//         tags: ["leather pants", "skinny pants"]
//       },
//       {
//         id: "stringas2",
//         img: [require("@/assets/img/home/rubas-3.jpg")],
//         title: "Benetton striukė",
//         about: "devėta, tačiau būklė ideali",
//         city: "Vilnius",
//         color: "chaki",
//         date: "19-08-11",
//         condition: "LABAI GERA",
//         price: 22,
//         size: "xl",
//         height: 22,
//         width: 11,
//         brand: "zara",

//         sex: "male",
//         categories: ["female", "pants"],
//         tags: ["leather pants", "skinny pants"]
//       },
//       {
//         id: "stringas3",
//         img: [require("@/assets/img/home/rubas-4.jpg")],
//         title: "Benetton striukė",
//         about: "devėta, tačiau būklė ideali",
//         city: "Vilnius",
//         color: "chaki",
//         date: "19-08-11",
//         condition: "LABAI GERA",
//         price: 22,
//         size: "xl",
//         height: 22,
//         width: 11,

//         sex: "male",
//         categories: ["female", "pants"],
//         tags: ["leather pants", "skinny pants"]
//       },
//       {
//         id: "stringas4",
//         img: [
//           require("@/assets/img/home/dzinsai1.jpeg"),
//           require("@/assets/img/home/dzinsai2.jpeg"),
//           require("@/assets/img/home/dzinsai3.jpeg"),
//           require("@/assets/img/home/dzinsai4.jpeg"),
//           require("@/assets/img/home/dzinsai5.jpeg")
//         ],
//         title: "Dzinsai",
//         about: "devėta, tačiau būklė ideali",
//         city: "Vilnius",
//         color: "Dangaus pratrinta",
//         date: "19-08-11",
//         condition: "Naudota",
//         price: 22,
//         size: " xl",
//         height: 22,
//         width: 11,
//         brand: "Tom-Tailor",

//         sex: "male",
//         categories: ["female", "pants"],
//         tags: ["leather pants", "skinny pants"]
//       },
//       {
//         id: "stringas5",
//         img: [
//           require("@/assets/img/home/dzemperis1.jpeg"),
//           require("@/assets/img/home/dzemperis2.jpeg"),
//           require("@/assets/img/home/dzemperis3.jpeg"),
//           require("@/assets/img/home/dzemperis4.jpeg"),
//           require("@/assets/img/home/dzemperis5.jpeg"),
//           require("@/assets/img/home/dzemperis6.jpeg"),
//           require("@/assets/img/home/dzemperis7.jpeg"),
//           require("@/assets/img/home/dzemperis8.jpeg")
//         ],
//         title: "Benetton striukė",
//         about: "devėta, tačiau būklė ideali",
//         city: "Vilnius",
//         color: "juoda",
//         date: "19-02-11",
//         condition: "GERA",
//         price: 8,
//         size: "xs",
//         height: 22,
//         width: 11,
//         brand: "Adidas",

//         sex: "male",
//         categories: ["female", "pants", "hoodie"],
//         tags: ["leather pants", "skinny pants"]
//       },
//       {
//         id: "stringas6",
//         img: [require("@/assets/img/home/rubas-3.jpg")],
//         title: "Benetton striukė",
//         about: "devėta, tačiau būklė ideali",
//         city: "Vilnius",
//         color: "chaki",
//         date: "19-08-11",
//         condition: "LABAI GERA",
//         price: 22,
//         size: "xl",
//         height: 22,
//         width: 11,
//         brand: "zara",

//         sex: "male",
//         categories: ["female", "pants"],
//         tags: ["leather pants", "skinny pants"]
//       }
//     ],
//     sex: "female",
//     subcategory: "pants",
//     selectedItems: [],
//     users: [
//       {
//         id: "stringas",
//         img: require("@/assets/img/home/avatar.png"),
//         username: "Iewutee",
//         loginDate: "19-08-11",
//         city: "Kaunas"
//       },
//       {
//         id: "stringas1",
//         img: require("@/assets/img/home/avatar.png"),
//         username: "Juozaš",
//         loginDate: "19-08-11",
//         city: "Kaunas"
//       },
//       {
//         id: "stringas2",
//         img: require("@/assets/img/home/avatar.png"),
//         username: "Wirgė",
//         loginDate: "19-08-11",
//         city: "Kaunas"
//       },
//       {
//         id: "stringas3",
//         img: require("@/assets/img/home/avatar.png"),
//         username: "Bitė",
//         loginDate: "19-08-11",
//         city: "Kaunas"
//       },
//       {
//         id: "stringas4",
//         img: require("@/assets/img/home/avatar.png"),
//         username: "Wirgė",
//         loginDate: "19-08-11",
//         city: "Kaunas"
//       },
//       {
//         id: "stringas5",
//         img: require("@/assets/img/home/avatar.png"),
//         username: "Jorė",
//         loginDate: "19-08-11",
//         city: "Kaunas"
//       },
//       {
//         id: "stringas6",
//         img: require("@/assets/img/home/avatar.png"),
//         username: "Babravičius",
//         loginDate: "19-08-11",
//         city: "Kaunas"
//       }
//     ],
//     categories: {
//       women: [
//         {
//           id: "some1",
//           title: "Peržiūrėti viską",
//           link: "#",
//           svg: require("@/assets/img/Categories svg/menu.svg")
//         },
//         {
//           id: "some2",
//           title: "Drabužiai",
//           link: "#",
//           svg: require("@/assets/img/Categories svg/dress.svg")
//         },
//         {
//           id: "some3",
//           title: "Batai",
//           link: "#",
//           svg: require("@/assets/img/Categories svg/shoes.svg")
//         },
//         {
//           id: "some4",
//           title: "Rankines",
//           link: "#",
//           svg: require("@/assets/img/Categories svg/bag.svg")
//         },
//         {
//           id: "some5",
//           title: "Aksesuarai",
//           link: "#",
//           svg: require("@/assets/img/Categories svg/jewelry.svg")
//         },
//         {
//           id: "some6",
//           title: "Kosmetika",
//           link: "#",
//           svg: require("@/assets/img/Categories svg/hair.svg")
//         }
//       ],

//       man: [
//         {
//           title: "Peržiūrėti viską",
//           link: "#",
//           svg: require("@/assets/img/Categories svg/menu.svg")
//         },
//         {
//           title: "Drabužiai",
//           link: "#",
//           svg: require("@/assets/img/Categories svg/shirt.svg")
//         },
//         {
//           title: "Batai",
//           link: "#",
//           svg: require("@/assets/img/Categories svg/shoes.svg")
//         },
//         {
//           title: "Aksesuarai",
//           link: "#",
//           svg: require("@/assets/img/Categories svg/watch.svg")
//         },
//         {
//           title: "Kosmetika",
//           link: "#",
//           svg: require("@/assets/img/Categories svg/hair.svg")
//         }
//       ],

//       about: [
//         {
//           title: "Drabužiai",
//           link: "#"
//         },
//         {
//           title: "Nariai",
//           link: "#"
//         },
//         {
//           title: "Forumas",
//           link: "#"
//         },
//         {
//           title: "Pagalbos Centras",
//           link: "#"
//         }
//       ],
//       catalog: [
//         {
//           title: "Peržiūrėti viską",
//           link: "#"
//         },
//         {
//           title: "Megztiniai ir džemperiai",
//           link: "#"
//         },
//         {
//           title: "Kombinezonai",
//           link: "#"
//         },
//         {
//           title: "Apatinis trikotažas ir naktiniai",
//           link: "#"
//         },
//         {
//           title: "Kostiumai, specializuota apranga",
//           link: "#"
//         },
//         {
//           title: "Švarkeliai ir kostiumėliai",
//           link: "#"
//         },
//         {
//           title: "Sijonai",
//           link: "#"
//         },
//         {
//           title: "Džinsai",
//           link: "#"
//         },
//         {
//           title: "Šortai",
//           link: "#"
//         },
//         {
//           title: "Maudymukai",
//           link: "#"
//         },
//         {
//           title: "Aktyvaus laisvalaikio drabužiai",
//           link: "#"
//         },
//         {
//           title: "Kiti drabužiai",
//           link: "#"
//         }
//       ]
//     }
//   },

//   mutations: {},
//   actions: {},
//   modules: {
//     cart
//   },
//   getters: {
//     getSelectedItems: ({ items, sex, category }) =>
//       items.filter(item => item.sex == sex && item.category == category),
//     getCategories: ({ categories }) => categories,
//     getCatalog: ({ categories }) => categories.catalog,
//     homeItems: ({ items }) => items,
//     getItemById: state => id => state.items.find(item => item.id === id),
//     users: ({ users }) => users,
//     getUserById: state => id => state.users.find(user => user.id === id)
//   }
// });
