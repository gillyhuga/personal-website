import { handleAuth } from '@auth0/nextjs-auth0';

exports.onExecutePostLogin = async (event, api) => {
    api.redirect.sendUserTo("http://localhost:3000/app");
  };

export default handleAuth();