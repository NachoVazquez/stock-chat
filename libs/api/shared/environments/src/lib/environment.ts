export const environment = {
  production: false,
  accessTokenExpires: '24h',
  refreshTokenExpires: '15d',
  jwtSecret: 'MyS3cr3tK3Y',

  jwtSession: {
    session: false,
  },
  databaseURL: 'mongodb://localhost:27017/stock-chat-db',
};
