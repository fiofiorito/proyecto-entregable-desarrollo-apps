import { StyleSheet, View, FlatList, } from 'react-native'
import categories from '../utils/data/categories.json';
import CategoriesCard from './CategoriesCard';
import { useGetCategoriesQuery } from '../app/services/shop';


const Categories = ({ navigation }) => {
    const { data: categories } = useGetCategoriesQuery()

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                keyExtractor={item => item}
                renderItem={({ item }) => (<CategoriesCard navigation={navigation} item={item} />)}
            />
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        height: 520,
    }
})