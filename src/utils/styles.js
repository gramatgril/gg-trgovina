export const colors = {
  mainWhite: `#fff`,
  offWhite: `#f7f7f7`,
  mainBlack: `#262626`,
  mainGrey: `#ececec`,
  darkGrey: `#afafaf`,
  mainGreen: `#004d00`,
  mainRed: `#e53935`,
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
