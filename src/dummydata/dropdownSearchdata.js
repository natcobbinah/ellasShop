const data = [
    "All",
    "Hair Products",
    "Skin Products",
    "Ladies Products",
    "Men",
    "Baby",
    "Health"
]

const allProductData = [
    { id: 1, name: "Hair Growth", price: 'Ghc20', link: '/hairgrowthProducts' },
    { id: 2, name: "Skin Fairness", price: 'Ghc50',link: '/skinProducts' },
    { id: 3, name: "Slimming", price: 'Ghc40',link: '/slimmingProducts'  },
    { id: 4, name: "Teeth Whitening", price: 'Ghc200',link: '/teethProducts' },
    {id: 5,name: "Baby Products",price:'Ghc20',link: '/babyProducts' },
    {id: 6,name: "Men Products",price:'Ghc50',link: '/menProducts' },         
]

const hairGrowthProducts = [
    { id: 1, name: "Curly", price: 'Ghc10' },
    { id: 2, name: "Long", price: 'Ghc16' },
    { id: 3, name: "Beard Growth", price: 'Ghc20' },
    { id: 4, name: "Silky", price: 'Ghc50' },
    { id: 5, name: "Curly", price: 'Ghc60' },
]

const skinProducts = [
    { id: 1, name: "LightSkin", price: 'Ghc10' },
    { id: 2, name: "Dark Skin", price: 'Ghc16' },
    { id: 3, name: "Any Color", price: 'Ghc20' },
    { id: 4, name: "Brown Skin", price: 'Ghc50' },
    { id: 5, name: "Cocoa", price: 'Ghc60' },
]

const carouselData = [
    { h3: "hello1", p: "slide1" },
    { h3: "hello2", p: "slide1" },
    { h3: "hello3", p: "slide1" },
    { h3: "hello4", p: "slide1" },
    { h3: "hello5", p: "slide1" },       
]

export { data, allProductData,carouselData,hairGrowthProducts,skinProducts };