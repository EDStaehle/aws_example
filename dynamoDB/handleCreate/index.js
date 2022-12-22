const dynamoose = require('dynamoose');
const shcema = new dynamoose.Schema({
  "id": String,
  "name": String,
  "phone": String
});
const peopleModel = dynamoose.model('peopletable', shcema)

exports.handler = async(event) => {
  
  let parsedBody = JSON.parse(event.body);
  console.log('parsed body',parsedBody);
  
  const response = {statusCode: null,body: null,};
  try {
    let result = await peopleModel.create(parsedBody);
    console.log('result',result)
    response.statusCode = 200;
    response.body = JSON.stringify(result)
  } catch (e) {
     response.statusCode = 500;
    response.body = JSON.stringify(e.message)
  }
  return response;
};