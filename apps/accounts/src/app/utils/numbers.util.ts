/**
 *
 * extractNumbers - that function extract all numbers of an string
 *
 * @function extractNumbers
 * @param  {string} text  that function extract all numbers of an string
 * @returns {string} it's the string that have only the filtered numbers
 */
 export const extractNumbers = (text: string) => {
  let number = '';

  Object.keys(text).forEach((i: any) => {
    const n = text[i];
    if (parseInt(n, 10) || parseInt(n, 10) === 0 || n === '+') number += n;
  });

  return number;
};
