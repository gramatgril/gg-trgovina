export const nameValidation = {
  required: "Ime manjka",
  maxLength: { value: 20, message: "Ime je predolgo" },
};

export const emailValidation = {
  required: "Email naslov manjka",
  pattern: {
    // eslint-disable-next-line no-useless-escape
    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Vnesite pravilni email naslov",
  },
};

export const messageValidation = {
  required: "Sporočilo manjka",
  minLength: { value: 8, message: "Sporočilo naj ima vsaj 8 znakov" },
  maxLength: { value: 250, message: "Sporočilo naj nima več kot 250 znakov" },
};
