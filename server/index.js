// Connect to external server (BACKEND_URL)
var backendUrl = process.env.BACKEND_URL;
if (backendUrl) {
    __meteor_runtime_config__.BACKEND_URL = backendUrl;
    __meteor_runtime_config__.ACCOUNTS_CONNECTION_URL = backendUrl;
}

require('./main.js');
