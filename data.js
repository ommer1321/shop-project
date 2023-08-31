module.exports = function () {
  return {
    products: [
      { id: 1, name: "Samsung s1", price: 100, imageUrl: "1.jpg"  ,  description:'Samsung s1 Description' , category: 1  },
      { id: 2, name: "Samsung s2", price: 100, imageUrl: "2.jpg"  ,  description:'Samsung s2 Description' , category: 1  },
      { id: 3, name: "Samsung s3", price: 100, imageUrl: "3.jpg"  ,  description:'Samsung s3 Description' , category: 1  },
      { id: 4, name: "Samsung s4", price: 100, imageUrl: "4.jpg"  ,  description:'Samsung s4 Description' , category: 2  },
      { id: 5, name: "Samsung s5", price: 100, imageUrl: "5.jpg"  ,  description:'Samsung s5 Description' , category: 2  },
      { id: 6, name: "Samsung s6", price: 100, imageUrl: "6.jpg"  ,  description:'Samsung s6 Description' , category: 3  },
      { id: 7, name: "Samsung s7", price: 100, imageUrl: "7.jpg"  ,  description:'Samsung s7 Description' , category: 4  },
    ],

    categories: [
      { id: 1, name: "Bilgisayar" },
      { id: 2, name: "Araba" },
      { id: 3, name: "Oyuncak" },
      { id: 4, name: "Ev Aletleri" },
      { id: 5, name: "Samsung s5" },
    ],

    orders: [],
  };
};
