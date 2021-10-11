const svg2png = require("svg2png");
const aws = require("aws-sdk");
 
exports.handler = async (event, context, callback) => {
  try {
    const sourceBuffer = event.data;
    const buffer = await svg2png(sourceBuffer);

    callback(null, `${buffer}`);
  } catch (err) {
    callback(`Fail: ${err}`);
  }
};
