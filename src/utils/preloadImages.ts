


// A helper for forcing the images to load. (and wait for them)
export const preloadImages = (images: string[]) => {
  return Promise.all(
    images.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = src;
        }),
    ),
  );
};