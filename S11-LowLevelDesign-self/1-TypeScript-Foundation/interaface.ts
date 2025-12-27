interface User { 
    id : number ; 
    username : string 
}

// interface Product {
//     name : string; 
//     price : number; 
// }


/*
1. An interface for a Product with:
    - id
    - name
    - price
    - a method applyDiscount()
*/
interface Product {
    id : number;
    name : string ;
    price : number ; 
    applyDiscount() : void; 
}
