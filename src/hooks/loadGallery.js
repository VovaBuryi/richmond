const galleries = import.meta.glob('/public/gallery/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
});

export const loadGallery = (folder) => {
  return Object.entries(galleries)
    .filter(([path]) => path.includes(`/${folder}/`))
    .map(([, module]) => module.default);
};
