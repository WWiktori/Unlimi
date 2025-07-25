export const fetchCategoryImages = async (count = 6) => {
  const urls = await Array.from({ length: count }, (_, i) => `https://picsum.photos/400/300?random=${i+1}`);
  return urls;
};

export const fetchCategoryImagesLong = async (count = 6) => {
  const urls = await Array.from({ length: count }, (_, i) => `https://picsum.photos/1400/568?random=${i+1}`);
  return urls;
};


export const fetchCategoryImagesHeight = async (count = 30) => {
  const urls = await Array.from({ length: count }, (_, i) => `https://picsum.photos/403/520?random=${i+1}`);
  return urls;
};


export const fetchPromotions = async (count = 20) => {
  const urls = await Array.from({ length: count }, (_, i) => `https://picsum.photos/403/520?random=${20*i+5}`);
  return urls;
};
export const fetchNewItems = async (count = 15) => {
  const urls = await Array.from({ length: count }, (_, i) => `https://picsum.photos/403/520?random=${30*i+10}`);
  return urls;
};
export const fetchBestsellers = async (count = 10) => {
  const urls = await Array.from({ length: count }, (_, i) => `https://picsum.photos/403/520?random=${40*i+19}`);
  return urls;
};
export const fetchShoppingBag = async (count = 10) => {
  const urls = await Array.from({ length: count }, (_, i) => `https://picsum.photos/120/160?random=${4*i+19}`);
  return urls;
};