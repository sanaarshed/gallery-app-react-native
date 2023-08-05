import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ImageCard from '../components/ImageCard';
import {getImagesPending} from '../redux/slices/gallerySlice';

const ImageGalleryLayout: React.FC<ImageGalleryLayoutProps> = () => {
  const dispatch = useDispatch();

  // State to manage the number of images to display
  const [limit, setLimit] = useState(0);

  // State to keep track of the number of liked images
  const [count, setCount] = useState(0);

  // Retrieve states from the Redux store
  const {images, isLoading, likedImages} = useSelector(state => state.gallery);

  //  Handles the action to fetch more images
  const handleGetImages = () => {
    const increase = limit + 10;
    setLimit(increase);
    dispatch(getImagesPending(increase));
  };

  // Fetch images on  mount
  useEffect(() => {
    handleGetImages();
  }, []);

  // Update the count state when the list of liked images changes
  useEffect(() => {
    if (likedImages?.length) {
      let c = likedImages.filter(item => item !== undefined);
      setCount(c.length);
    }
  }, [likedImages]);

  //  Renders the header of the gallery, displaying the title and the count of liked images.
  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Gallery</Text>
        <Text
          style={{
            fontSize: 20,
          }}>
          {`Selected Image: ${count}`}
        </Text>
      </View>
    );
  };

  //  Renders individual image cards in the gallery.

  const renderItems = ({item, index}) => {
    const {url, title} = item;
    return <ImageCard id={index} image={url} name={title} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={images}
        renderItem={renderItems}
        keyExtractor={(_, index) => index + ''}
        numColumns={2}
        ListFooterComponent={() => (
          <View style={styles.bottomBtn}>
            <Button
              onPress={() => handleGetImages()}
              title={isLoading ? 'loading' : 'Load more'}
              disabled={isLoading}
            />
          </View>
        )}
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
  bottomBtn: {
    margin: 20,
  },
  headerText: {
    fontSize: 25,
    fontWeight: '600',
  },
});

export default ImageGalleryLayout;
