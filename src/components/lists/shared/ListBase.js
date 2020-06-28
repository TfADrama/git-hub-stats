import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  // Platform,
  // RefreshControl,
  // View,
} from 'react-native';
// import { LoadMoreListFooter, EmptyList } from '.';
import { Spacing } from '../../../styles';

const ListBase = ({
  data = [],
  onPressItem,
  showLoadMoreButton = false,
  ListEmptyComponent,
  renderItem,
}) => {
  const _renderItem = (itemProps) => {
    if (!onPressItem) return renderItem(itemProps); // No need to be a button

    const { index } = itemProps;
    return (
      <TouchableOpacity
        onPress={() => onPressItem(index)}
        style={styles.itemContainer}
      >
        {renderItem(itemProps)}
      </TouchableOpacity>
    );
  };
  const keyExtractor = (item) => item.id.toString();

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={_renderItem}
      ListEmptyComponent={ListEmptyComponent}
      contentContainerStyle={{ flexGrow: 1 }} // Added to center the empty list component
      keyExtractor={keyExtractor}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.MIN_SPACING,
  },
  itemContainer: {
    flex: 1,
  },
  footerContainer: {
    marginVertical: Spacing.MAX_SPACING,
  },
  loadMoreBtn: {
    marginBottom: 20,
  },
});

export default ListBase;
