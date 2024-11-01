const { v4: uuidv4 } = require('uuid');
const generateUUID = () => {
  const uuid = uuidv4().replace(/-/g, '');
  return uuid;
};
const method = {
  generateUUID
}
module.exports = method