export const colors = {
  mainBlack: `#262626`,
  mainGreen: `#8db600`,
  mainGrey: `#6a6c6e`,
  mainRed: `#e53935`,
  mainWhite: `#fff`,
  offWhite: `#f7f7f7`,
};

export const lightShadow = `2px 5px 3px 0px rgba(0, 0, 0, 0.5)`;
export const darkShadow = `4px 10px 5px 0px rgba(0, 0, 0, 0.5)`;
export const linearTransition = `all 0.3s linear;`;
export const easeInOutTransition = `all 0.5s ease-in-out`;
export const letterSpacing = `4px`;

export const transition = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `${property} ${time} ${type}`;
};
