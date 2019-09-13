export const colors = {
  black: `#262626`,
  green: `#8db600`,
  grey: `#6a6c6e`,
  lightGrey: `#D3D3D3`,
  red: `#e53935`,
  white: `#fff`,
  offWhite: `#f7f7f7`,
};

export const boxShadow = `0px 0px 10px rgba(0, 0, 0, 0.2),
inset 0px 5px 30px rgba(255, 255, 255, 0.2)`;
export const lightShadow = `2px 5px 3px 0px rgba(0, 0, 0, 0.5)`;
export const darkShadow = `4px 10px 5px 0px rgba(0, 0, 0, 0.5)`;
export const linearTransition = `all 0.3s linear;`;
export const easeInOutTransition = `all 0.5s ease-in-out`;
export const letterSpacing = `3px`;

export const transition = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `${property} ${time} ${type}`;
};
