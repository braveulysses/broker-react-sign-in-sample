// Customize parameters of the OAuth 2 request used to initiate the
// authentication process.
export const OAUTH_CLIENT = {
  // Unique ID for an OAuth2 Client configured with the Broker
  clientId: 'broker-react-sign-in-sample',
  // Space-delimited list of OAuth2 Scopes
  scope: 'openid email profile phone',
  redirectUri: 'http://localhost:3000/callback.html',
  responseType: 'token id_token',
  prompt: '',
  acrValues: '',
  maxAge: ''
};

// Data Governance Broker service URLs.
export const BROKER = {
  authorizeEndpoint: 'https://example.com/oauth/authorize',
  logoutEndpoint: 'https://example.com/oauth/logout',
  meEndpoint: 'https://example.com/scim/v2/Me'
};

// SCIM attribute paths. Change these if you're using a custom schema.
export const SCHEMA = {
  username: 'userName',
  fullName: 'name.formatted',
  email: 'emails[primary eq true]',
  phone: 'phoneNumbers[primary eq true]',
  test: 'test[primary eq true]'
};

// General application settings.
export const APP_SETTINGS = {
  // If false, access and ID tokens are persisted to browser storage
  // only long enough to redirect from the callback endpoint to the
  // main app. If true, they are persisted for the duration of the
  // application session. Set to true if you want to be able to reload
  // the application without making another OAuth 2 request.
  persistTokens: false
};