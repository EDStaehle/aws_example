const dynamoose = require('dynamoose');
const shcema = new dynamoose.Schema({
  "id": String,
  "name": String,
  "phone": String
});
const peopleModel = dynamoose.model('peopletable', shcema)

exports.handler = async (event) => {
  const response = { statusCode: null, body: null, };
  try {
  let parsedBody = JSON.parse(event.body);
    const id = event.pathParameters.id;
   let updatedItem = await peopleModel.update({ id }, parsedBody);
    response.statusCode = 200;
    response.body = JSON.stringify({ message: 'item Updated', updatedItem })
  }
  catch (e) {
    response.statusCode = 500;
    response.body = JSON.stringify(e.message)

  };
  return response;
};