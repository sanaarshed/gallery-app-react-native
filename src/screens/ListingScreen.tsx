import React from 'react';
import {View, StyleSheet, FlatList, Image, Text} from 'react-native';
import {useSelector} from 'react-redux';

const ListingScreen = () => {
  const {likedImages} = useSelector(state => state.gallery);

  //  to render the header of the liked images list
  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Favourites List</Text>
      </View>
    );
  };

  //  to render each item (liked image) in the list
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

  //  to render a message when there are no liked images to display
  const renderEmptyList = () => {
    return (
      <View style={styles.empty}>
        <Text>There is no Image liked</Text>
      </View>
    );
  };

  // Render the main component view
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={likedImages}
        renderItem={renderItems}
        keyExtractor={(_, index) => index + ''}
        numColumns={1}
        ListEmptyComponent={renderEmptyList}
      />
    </View>
  );
};

//for styling
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
