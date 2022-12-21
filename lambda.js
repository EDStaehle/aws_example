exports.handler = async (event) => {

  AWS.config.update({ region: 'us-east-1' });

  const s3 = new AWS.S3();

  const params = {
    Bucket: 'elias-first-bucket-demo',
    Key: 'numbers.json'
  };

  const data = await s3.getObject(params).promise();

  const objectData = data.Body;

  const parsedData = JSON.parse(objectData);

  return parsedData;
}; 