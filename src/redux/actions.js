export const handleClick = (index) => {
  return {
    type: "handleClickOnCell",
    payload: index,
  };
};
export const reset = () => {
  return {
    type: "resetGame",
  };
};
