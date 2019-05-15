module.exports = {
  "globDirectory": "./",
  "importWorkboxFrom": "local",
  "skipWaiting": true,
  "globIgnores": [
    "images/**/*",
    "package*",
    "workbox-4.3.0",
    "workbox-config.js"
  ],
  "runtimeCaching": [
    {
      "urlPattern": /\.(?:png|gif|jpg|jpeg|svg)$/,
      "handler": "CacheFirst",
      "options": {
        "cacheName": "images",
      }
    }
  ],
  "globPatterns": [
    "**/*.{json,jpg,html,js,css}"
  ],
  "swDest": "sw.js"
};
