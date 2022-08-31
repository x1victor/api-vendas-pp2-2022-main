import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

// vamos decorar a classe como uma entidade do banco de dados
@Entity('product')
class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    name: string
    @Column('decimal')
    price: number
    @Column('int')
    quantity: number
    @CreateDateColumn() // Data gerada quando houver criação
    created_at: Date
    @UpdateDateColumn() // Data gerada quando houver alteração
    updated_at: Date

}
// permite que a classe seja usada fora daqui
export default Product 