import AWS from 'aws-sdk'

//_ AWS S3 Bucket config
const s3Bucket = new AWS.S3({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
    region: 'AP-SOUTH-1',
});
  
export const s3Upload = (options) => {
    return new Promise((resolve, reject) => {
      s3Bucket.upload(options, (error, data) => {
        if (error) return reject(error);
        return resolve(data);
      });
    });
  };