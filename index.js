const QRCode = require("qrcode");

//qr code image data
// const generateQR = async (text) => {
//   try {
//     const qrCode = await QRCode.toDataURL(text);
//     return qrCode;
//   } catch (err) {
//     console.log(err);
//   }
// };
// generateQR("http://www.yahoo.com/");

//qr code in terminal
// const generateQR = async (text) => {
//   try {
//  const qrCode = await QRCode.toString(text, { type: "terminal" });
//   return qrCode;
//   } catch (err) {
//     console.log(err);
//   }
// };
// generateQR("http://www.yahoo.com/");

//create a qr code image
const generateQR = async (text) => {
  try {
    const qrCode = await QRCode.toFile("./yahoo-qr-code.png", text);
    return qrCode;
  } catch (err) {
    console.log(err);
  }
};
generateQR("http://www.yahoo.com/");
