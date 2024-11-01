const bcrypt = require('bcryptjs');

const encrypt = password => {
  let salt = bcrypt.genSaltSync(5);
  let hash = bcrypt.hashSync(password, salt);
  return hash;
}
const decrypt = (password, hash) => {
  return bcrypt.compareSync(password, hash);
}

const method = {
  encrypt,decrypt
}
module.exports = method