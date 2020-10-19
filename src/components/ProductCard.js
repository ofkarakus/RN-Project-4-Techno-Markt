import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const ProductCard = ({product}) => {
  return (
    <View style={[styles.container, product.inStock ? null : {opacity: 0.5}]}>

      <Image style={styles.image} source={{uri: product.imgURL}} />
      <View style={styles.texts}>
        <Text>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>

      { product.inStock ? null : 
      <View style={styles.soldOut}>
        <Text style={styles.soldOutText}>OUT OF STOCK</Text>
      </View>
      }
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
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'white'

  },
  image: {
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
  },
  texts: {
    flex:1, 
    justifyContent:'space-between'
  },
  price: {
    fontWeight: 'bold'
  },
  soldOut: {
    backgroundColor: 'red',
    bottom: 30,
    right: -140,
    position: 'absolute',
    transform: [
      { rotate: "-45deg" }    
    ],
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
  soldOutText: {
    color: 'white',
    fontWeight: 'bold'
  }

});

export {ProductCard};
