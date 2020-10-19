import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const ProductCard = ({product}) => {
  return (
    <View style={[styles.container, product.inStock ? null : {opacity: 0.5}]}>
      <Image style={styles.image} source={{uri: product.imgURL}} />
      <View style={styles.texts}>
        <Text>{product.title}</Text>
        <View style={styles.priceStock}>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.stock}>{product.inStock ? null : 'OUT OF STOCK'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    borderColor: '#e0e0e0',
  },
  image: {
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
  },
  texts: {
    flex:1, 
    justifyContent:'space-between'
  },
  priceStock: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  price: {
    fontWeight: 'bold'
  },
  stock: {
    fontSize: 9,
    fontWeight: 'bold',
    color: 'red'
  }

});

export {ProductCard};
