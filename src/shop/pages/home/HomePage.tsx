import { Jumbotron } from '@/shop/components/Jumbotron'
import { Pagination } from '@/components/custom/Pagination'
import { ProductsGrid } from '@/shop/components/ProductsGrid'
import { products } from '@/mocks/products.mock'

export const HomePage = () => {
    return (
        <>
            <Jumbotron title='Todos los productos' />

            <ProductsGrid products={ products } />

            <Pagination totalPages={ 7 } />
        </>
    );
}
