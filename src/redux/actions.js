import { createAction } from "@reduxjs/toolkit";

export const handleClick = createAction("handleClickOnCell");
export const reset = createAction("resetGame");

// ========before reduxToolkit=======
// export const handleClick = (index) => {
//   return {
//     type: "handleClickOnCell",
//     payload: index,
//   };
// };
// export const reset = () => {
//   return {
//     type: "resetGame",
//   };
// };
