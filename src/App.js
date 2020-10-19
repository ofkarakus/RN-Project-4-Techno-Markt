import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert,
} from 'react-native';
import productData from './product_data.json';
import {ProductCard, SearchBar} from './components';

const App = () => {
  const [search, setSearch] = useState('');
  const [filteredProductList, setFilteredProductList] = useState([]);

  const renderListItem = ({item}) => <ProductCard product={item} />;

  useEffect(() => {
    Alert.alert(
      'TechnoMarkt',
      'Welcome!\nDear customer,\nHave a nice shopping!',
    );
    setFilteredProductList(productData);
  }, []);

  useEffect(() => {
    setFilteredProductList(
      productData.filter((item) => {
        const searchedValue = search.toLowerCase();
        const itemTitle = item.title.toLowerCase();

        return itemTitle.indexOf(searchedValue) > -1;
      }),
    );
  }, [search]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.banner}>TechnoMarkt</Text>

        <SearchBar sendText={(value) => setSearch(value)} />

        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={filteredProductList}
          renderItem={renderListItem}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    flex: 1,
  },
  banner: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
  },
});

export default App;
