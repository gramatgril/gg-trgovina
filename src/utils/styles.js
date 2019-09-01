export const colors = {
  mainWhite: `#fff`,
  mainBlack: `#262626`,
  mainGrey: `#474747`,
  mainGreen: `#004d00`,
};

export const transition = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `transition: ${property} ${time} ${type}`;
};

export const letterSpacing = ({ spacing = "0.1rem" }) => {
  return `letter-spacing:${spacing}`;
};
