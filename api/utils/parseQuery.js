exports.parseQuery = function(url = '') {
  if (!url.includes('?')) return {};

  const queryString = url.split('?')[1];
  const values = queryString.split('&');

  const query = values.map(val => {
    return val.split('=');
  }).reduce((acc, val) => {
    acc[val[0]] = val[1];
    return acc;
  }, {});

  return query;
}