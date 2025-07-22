export const fetchCategoryImages = async (count = 6) => {
  const urls = Array.from({ length: count }, (_, i) => `https://picsum.photos/400/300?random=${i+1}`);
  return urls;
};
