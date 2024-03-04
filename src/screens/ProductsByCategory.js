import { FlatList, StyleSheet, View } from 'react-native'
import products from '../utils/data/products.json'
import { useEffect, useState } from 'react'
import ProductListByCategory from '../components/ProductListByCategory'
import Search from '../components/Search'
import { useGetProductsByCategoryQuery } from '../app/services/shop'

const ProductsByCategory = ({ route, navigation }) => {
    const { selectedCategory } = route.params;
    const { data: products } = useGetProductsByCategoryQuery(selectedCategory)
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        setFilteredProducts(products)
        if (keyword) {
            setFilteredProducts(products.filter(product => {
                const productLower = product.title.toLowerCase()
                const keywordLower = keyword.toLowerCase()
                return productLower.includes(keywordLower)
            }))
        }

    }, [selectedCategory, keyword, products])

    const handleKeyword = (keywrd) => {
        setKeyword(keywrd)
    }

    return (
        <>
            <Search handleKeyword={handleKeyword} />
            <View styles={styles.flat}>

                <FlatList
                    data={filteredProducts}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <ProductListByCategory navigation={navigation} item={item} />}
                />
            </View>

        </>
    )
}

export default ProductsByCategory

const styles = StyleSheet.create({
    flat: {
        height: 450
    }
})