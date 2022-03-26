export const FilterSearchText = (filterData, searchText) => {
  const newData = filterData.filter(item => {
    const itemData = item.author ? item.author.toUpperCase() : ''.toUpperCase();
    const textData = searchText.toUpperCase();
    return itemData.indexOf(textData) > -1;
  });
  return newData;
};
