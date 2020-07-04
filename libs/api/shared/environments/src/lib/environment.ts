export const environment = {
  production: false,
  accessTokenExpires: '1h',
  refreshTokenExpires: '8h',
  jwtSecret: 'MyS3cr3tK3Y',

  jwtSession: {
    session: false,
  },
  databaseURL: 'mongodb://localhost:27017/stock-chat-db',
};
