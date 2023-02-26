export const clearHeader = (context) => {
  setTimeout(() => {
    context.setHeader("");
  }, 1000);
};
