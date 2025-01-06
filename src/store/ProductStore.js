
const ProductStore = (set) => ({
  rice: 0,
  
  addRice: () => set((state) => ({ rice: state.rice + 1 })),
});

export default ProductStore;
