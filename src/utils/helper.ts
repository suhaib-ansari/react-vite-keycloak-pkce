
import {TAuthConfig, TRefreshTokenExpiredEvent } from "react-oauth2-code-pkce";

const auth:TAuthConfig ={
  clientId:'react-service',
  authorizationEndpoint: 'http://localhost:8080/auth/realms/react-test/protocol/openid-connect/auth',
  tokenEndpoint:'http://localhost:8080/auth/realms/react-test/protocol/openid-connect/token',
  redirectUri:'http://localhost:3000/',
  onRefreshTokenExpire: (event: TRefreshTokenExpiredEvent) => window.confirm('Session expired. Refresh page to continue using the site?') && event.login(),
};

export default auth;

