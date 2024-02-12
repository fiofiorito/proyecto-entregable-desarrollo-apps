import { StyleSheet, View, FlatList, } from 'react-native'
import categories from '../utils/data/categories.json';
import CategoriesCard from './CategoriesCard';

const Categories = ({ handleCategory }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                keyExtractor={item => item}
                renderItem={({ item }) => (<CategoriesCard handleCategory={handleCategory} item={item} />)}
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