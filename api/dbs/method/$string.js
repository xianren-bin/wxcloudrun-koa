
const { generateUUID } = require('../../../utils/method');

const $string = {
  get32UUID: ()=> {
    return generateUUID();
  }
}
module.exports = $string;