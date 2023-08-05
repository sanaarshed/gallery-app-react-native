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

export type MasonryItemProps = {
  title: string;
  height: number;
  width: number;
};

export type ImageGalleryLayoutProps = {
  data: MasonryItemProps[];
};

const spacing = 8;

const ImageGalleryLayout: React.FC<ImageGalleryLayoutProps> = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(0);
  const [count, setCount] = useState(0);
  const {images, isLoading, error, likedImages} = useSelector(
    state => state.gallery,
  );

  const handleGetImages = () => {
    const increase = limit + 10;
    setLimit(increase);
    dispatch(getImagesPending(increase));
  };

  useEffect(() => {
    handleGetImages();
  }, []);

  useEffect(() => {
    if (likedImages?.length) {
      let c = likedImages.filter(item => item !== undefined);
      setCount(c.length);
    }
  }, [likedImages]);

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
