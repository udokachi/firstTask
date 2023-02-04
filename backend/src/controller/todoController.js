const { google } = require('googleapis');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const UserAttribute = require('../model/todoModel');

const auth = new google.auth.GoogleAuth({
  keyFile: 'credentials.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const client = auth.getClient();
const spreadsheetId = '1hqfIV5q-pUVt4-sR27VK1R5EgHhKK_SfCHo9_GY6lqY';
const googleSheets = google.sheets({
  version: 'v4',
  auth: client,
});

const createUser = async (req, res) => {
  try {
    const user = await UserAttribute.create(req.body);
    console.log(req.body)
    const createSpreasheet =  await googleSheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range: 'Sheet1!A:H',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [
          [
            user._id,
            user.name,
            user.codeName,
            user.email,
            user.phoneNumber,
            user.gender,
            user.image,
            user.stack,
          ],
        ],
      },
    });
console.log("createSpreadsheet is ", createSpreasheet)
    res.status(201).redirect('https://chat.whatsapp.com/KVGsbcwGCkPGWaSxqNVmtS');
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: 'false',
      message: 'not found',
    });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const user = await UserAttribute.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        status: 'false',
        message: 'invalid user',
      });
    }
    res.status(200).json({ status: 'success', user });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: 'false',
      message: 'not found',
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const rows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: 'Sheet1!A:E',
    });
    res.status(200).json({ message: 'success', data: rows.data });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: 'false',
      message: 'not found',
    });
  }
};

module.exports = {
  createUser,
  getSingleUser,
  getAllUser,
};