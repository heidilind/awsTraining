export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "eu-west-1",
      BUCKET: "pullups-app-upload-2"
    },
    apiGateway: {
      REGION: "eu-west-1",
      URL: "https://o905s1itle.execute-api.eu-west-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "eu-west-1",
      USER_POOL_ID: "eu-west-1_4J72Oqv7T",
      APP_CLIENT_ID: "15fn5f3fjrbbv4acalcdrbf5e8",
      IDENTITY_POOL_ID: "eu-west-1:b8cb3e3f-332e-4e76-94c2-e4be52fe48fd"
    }
  };