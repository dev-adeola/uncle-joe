export const ratefyRate = 0.02;

//
export const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 90000);
  return randomNumber + 10000;
};

//
export const formatCurrency = (value) => {
  if (!value) return null;
  return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

//
export const convertOfferRequirement = (input) => {
  const output = {};

  input.forEach((item, index) => {
    output[index.toString()] = { id: item.id };
  });

  return JSON.stringify(output);
};

export const formatTermsAndConditions = (tacs) => {
  const output = {};
  tacs.forEach((tac, index) => {
    output[index.toString()] = {
      [index.toString()]: { title: tac.title, condition: tac.content },
    };
  });

  console.log({ tacs, output });
  return JSON.stringify(output);
};
export const calculateAmountToRecieve = (rateData, amount) => {
  console.log({ rateData, amount });
  return Number(rateData) * Number(amount) || 0;
};
