export const fetchCategoryImages = async (count = 6) => {
  const urls = await Array.from({ length: count }, (_, i) => `https://picsum.photos/400/300?random=${i+1}`);
  return urls;
};

export const fetchCategoryImagesLong = async (count = 6) => {
  const urls = await Array.from({ length: count }, (_, i) => `https://picsum.photos/1400/568?random=${i+1}`);
  return urls;
};


export const fetchCategoryImagesHeight = async (count = 6) => {
  const urls = await Array.from({ length: count }, (_, i) => `https://picsum.photos/403/520?random=${i+1}`);
  return urls;
};
