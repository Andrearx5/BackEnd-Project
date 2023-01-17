class ProductManager {

    constructor() {
        this.products = [];
    }

    getProducts = () => {
        return this.products;
    }

    addProduct = (tittle, description, price, thumbnail, code, stock) => {
        const product = {
            tittle,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: []
            
        }
        
        if (this.products.length === 0) {
            product.id = 1;
        } else {
            product.id = this.products[this.products.length - 1].id + 1;
        }

        this.products.push(product);
        
    }
    
        getProductById(id){
            return this.products.find(product => product.id === id) || { error: "Not found" };

    }
    }


const addingDrinks = new ProductManager();
addingDrinks.addProduct('Whisky Old Parr', 'Un Whiskys Blend de 12 años de añejamiento y ofrece un sabor lleno de carácter. Infusión aromática de frutas, flores, miel y levemente ahumado. Balanceado y cremoso, suave, miel, manzanas maduras y avellanas', 7436, "images/OldParr.jpg", '0103', 21);
addingDrinks.addProduct('Gin Beefeater', "Vista de color transparente y cristalino. Aroma floral, terroso, especiado y fresco. Con notas secas de piel de naranja y pimienta negra." , 4699, "images/Beefeater.jpg", '0098', 20);
addingDrinks.getProducts(),
console.log(addingDrinks.getProductById(2));