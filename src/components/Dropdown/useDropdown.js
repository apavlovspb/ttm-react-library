import React from 'react';

const useDropdown = (itemList, id, title, startValue) => {
  const [currentItem, setCurrentItem] = React.useState(
    startValue ? itemList.find(item => item.id === startValue.id) : itemList[0],
  );
  const [filtredList, setFiltredList] = React.useState([]);

  React.useEffect(() => {
    if (startValue) {
      setFiltredList(itemList.filter(item => item[id] !== startValue[id]));
    } else {
      setCurrentItem(itemList[0]);
      setFiltredList(itemList.filter(item => item[id] !== itemList[0][id]));
    }
  }, [itemList, id, startValue]);

  const setItem = React.useCallback(
    par => () => {
      setCurrentItem(itemList.find(item => item[id] === par));
      setFiltredList(itemList.filter(item => item[id] !== par));
    },
    [itemList, id],
  );

  return {
    currentItem,
    itemList: filtredList,
    changeItem: setItem,
    id,
    title,
  };
};

export default useDropdown;
