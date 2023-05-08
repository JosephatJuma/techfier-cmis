const generateUserId = () => {
  let newId = 10000 + Math.floor(Math.random() * 900000);
  return "U" + newId;
};
module.exports = generateUserId;
