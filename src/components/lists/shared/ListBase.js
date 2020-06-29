import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import { Spacing } from '../../../styles';

const ListBase = ({
  data = [],
  onPressItem,
  showLoadMoreButton = false,
  ListEmptyComponent,
  renderItem,
  style,
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
      style={style}
      data={data}
      renderItem={_renderItem}
      ListEmptyComponent={ListEmptyComponent}
      contentContainerStyle={{ flexGrow: 1 }} // Added to center the empty list component
      keyExtractor={keyExtractor}
      contentInset={{ top: 0, left: 0, right: 0, bottom: 20 }} //FIXME: Temporary solution to stop hiding part of the last list item (ios). Android still has the issue.
    />
  );
};

const styles = StyleSheet.create({
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
