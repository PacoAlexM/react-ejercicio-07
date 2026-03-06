import { useParams } from 'react-router'
import { Jumbotron } from '@/shop/components/Jumbotron'
import { Pagination } from '@/components/custom/Pagination'
import { ProductsGrid } from '@/shop/components/ProductsGrid'
import { products } from '@/mocks/products.mock'

export const GenderPage = () => {
    const { gender } = useParams();
    
    const genderLabel = gender === 'men' ? 'Hombres' : gender === 'women' ? 'Mujeres' : 'Niños';

    return (
        <>
            <Jumbotron title={ `Productos para ${genderLabel}` } />

            <ProductsGrid products={ products } />

            <Pagination totalPages={ 7 } />
        </>
    );
}
