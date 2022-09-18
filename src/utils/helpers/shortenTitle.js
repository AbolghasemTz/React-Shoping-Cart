export const shorten = (name) => {
  const splitTitle = name.split(" ");
  const newSplit = `${splitTitle[0]}`;
  return newSplit;
};
