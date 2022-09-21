import { EntityRepository, Repository } from "typeorm";
import Product from "../entities/Product";

// vamos herdar os métodos de CRUD
@EntityRepository(Product)
class ProductRepository extends Repository<Product> {
    // herdamos os métodos CRUD, mas podemos criar novos métodos
    // procura pelo nome do produto
    // método assíncrono 
    public async findByName(name: string): Promise<Product | undefined>{
        // await - aguardar/esperar pelo resultado da busca
        let product = await this.findOne({
            where: {
                name
            }
        })
        return product
    }
}
// exporta para ser usado em outra classe
export default ProductRepository