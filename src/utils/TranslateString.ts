const translate = require("translate");

const translateString = async (
  str: string,
  translateFrom: string,
  translateTo: string
): Promise<string> => {
  const translateObj = {
    to: translateTo,
    from: translateFrom,
    engine: "google",
    key: process.env.REACT_GOOGLE_TRANSLATOR_API_KEY,
  };

  const translated_string = await translate(str, translateObj);

  return translated_string;
};
export { translateString };
