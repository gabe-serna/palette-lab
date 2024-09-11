export const generateColor = () => {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return color;
};

export const generateColors = (amount = 1) => {
  const colors: string[] = [];
  Array.from({ length: amount }).forEach(() => {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    colors.push(color);
  });
  return colors;
};
