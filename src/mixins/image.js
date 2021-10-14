export const image = {
  methods: {
    getImagePath(imageUrl) {
      return require(`../assets/images/${imageUrl}`);
    },
  },
};
