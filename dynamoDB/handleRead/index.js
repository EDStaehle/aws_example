const dynamoose = require('dynamoose');
const shcema = new dynamoose.Schema({
  "id": String,
  "name": String,
  "phone": String
});
const peopleModel = dynamoose.model('peopletable', shcema)
exports.handler = async (event) => {
  
  console.log('queryStringParameters', event.queryStringParameters)
  const response = {statusCode: null,body: null,};
  try {
    let result = await peopleModel.scan().exec();
    response.statusCode = 200;
    response.body = JSON.stringify(result)
  } catch (e) {
    response.statusCode = 500;
    response.body = JSON.stringify(e.message)
  }

  return response;
};