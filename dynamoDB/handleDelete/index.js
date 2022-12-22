const dynamoose = require('dynamoose');
const shcema = new dynamoose.Schema({
  "id": String,
  "name": String,
  "phone": String
});
const peopleModel = dynamoose.model('peopletable', shcema)

exports.handler = async(event) => {
  const response = {statusCode: null,body: null,};
  try {
 const id = event.pathParameters.id;
// console.log('eventparameter', id)
     await peopleModel.delete({ id });
    response.statusCode = 200;
    response.body = JSON.stringify({message: 'item deleted'})
  } catch (e) {
     response.statusCode = 500;
    response.body = JSON.stringify(e.message)

  };
  return response;
};