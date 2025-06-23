const nextElementInList = <T>(list: T[], currentElement: T) => {
  const currentIndex = list.indexOf(currentElement);
  const nextIndex = (currentIndex + 1) % list.length;
  return list[nextIndex];
};

export default nextElementInList;
