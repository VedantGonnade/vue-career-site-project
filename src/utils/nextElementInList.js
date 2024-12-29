const nextElementInList = (list, currentElement) => {
  const currentIndex = list.indexOf(currentElement);
  const nextIndex = (currentIndex + 1) % list.length;
  return list[nextIndex];
};

export default nextElementInList;
