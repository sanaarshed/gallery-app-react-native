import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import HearIcon from '../assets/Heart';
import {handleLike} from '../redux/slices/gallerySlice';
import {useDispatch, useSelector} from 'react-redux';

export type ImageCardProps = {
  id: number;
  image: string;
  name: string;
};

const ImageCard: React.FC<ImageCardProps> = ({
  image,
  id,
  name,
}: ImageCardProps) => {
  const dispatch = useDispatch();
  const {likedImages} = useSelector(state => state.gallery);
  const selected = likedImages.some(item => item?.id === id);

  return (
    <View style={[styles.cardContainer]}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => {
            const data = {id, name, image};
            dispatch(handleLike(data));
          }}>
          <HearIcon fill={selected ? '#A52A2A' : '#D3D3D3'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'lightblue',
    borderRadius: 10,
    marginVertical: 8,
    position: 'relative',
    height: 250,
    flex: 1,
    margin: 10,
    overflow: 'hidden',
  },
  bottom: {
    height: 40,
    position: 'absolute',
    right: 0,
    bottom: 4,
    left: 4,
    // backgroundColor: 'red',
  },
  image: {flex: 1},
});

export default ImageCard;
