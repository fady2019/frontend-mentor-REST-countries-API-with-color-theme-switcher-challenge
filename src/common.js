export const formatPopulationNum = num => {
  const numStr = Number(num).toString().trim();

  if (numStr.length <= 3) {
    return num;
  }

  const numDigits = numStr.split('');

  let formattedNum = '';
  let digitsCounter = 0;
  for (let i = numDigits.length - 1; i >= 0; i--) {
    if (digitsCounter === 3) {
      formattedNum = '.' + formattedNum;
      digitsCounter = 0;
    }

    formattedNum = numDigits[i] + formattedNum;

    digitsCounter++;
  }

  return formattedNum;
};

export const formatStringArray = capitals => {
  let formattedStr = '';

  capitals.forEach((capital, idx) => {
    formattedStr += capital;

    if (idx !== capitals.length - 1) {
      formattedStr += ', ';
    }
  });

  return formattedStr;
};
