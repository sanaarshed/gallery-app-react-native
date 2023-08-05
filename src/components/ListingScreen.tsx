import React, {useEffect, useState} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import {getImagesPending, handleLike} from '../redux/slices/gallerySlice';
import {useDispatch, useSelector, useStore} from 'react-redux';
import HearIcon from '../assets/Heart';
import {SvgXml} from 'react-native-svg';
import ImageCard from './ImageCard';

const ListingScreen = () => {
  const dispatch = useDispatch();
  const {likedImages} = useSelector(state => state.gallery);

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Favourities List</Text>
      </View>
    );
  };

  const renderItems = ({item, index}) => {
    return (
      <View key={index} style={styles.itemCard}>
        <Image
          style={styles.image}
          source={{
            uri: item?.image,
          }}
        />
        <Text style={styles.text}>{item.name}</Text>
      </View>
    );
  };
  const renderEmptyList = () => {
    return (
      <View style={styles.empty}>
        <Text>There is no Image liked</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={renderHeader}
        // data={[{name: '1'}, {name: '2'}, {name: '3'}]}
        data={likedImages}
        renderItem={renderItems}
        keyExtractor={(_, index) => index + ''}
        numColumns={1}
        ListEmptyComponent={renderEmptyList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
  },
  header: {
    flex: 1,
    backgroundColor: '#fff',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  headerText: {
    fontSize: 25,
    fontWeight: '600',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 5,
  },
  itemCard: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    flexDirection: 'row',
    borderRadius: 10,
    gap: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    width: '70%',
  },
});

export default ListingScreen;
