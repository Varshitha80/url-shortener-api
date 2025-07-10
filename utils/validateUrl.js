import validUrl from 'valid-url';

const validateUrl = (url) => {
  return validUrl.isWebUri(url);
};

export default validateUrl;
