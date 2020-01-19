export const tryRequire = path => {
  try {
    return require(`${path}`);
  } catch (err) {
    return null;
  }
};

export const getContent = file => {
  return fetch(file).then(response => {
    return response.text();
  });
};
