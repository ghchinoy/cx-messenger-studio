# Dialogflow Messenger Rich Card Studio

A simple HTML page + the Dialogflow Messenger to experiment with Rich Response formats.

Page and associated files are located in `studio-host/web`.

The `studio-host` folder has a small Go web server application to host the webpages.

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run?dir=studio-host)


By default, the Dialogflow Messenger is not connected to a Dialogflow CX agent. If you would like to connect it to your agent, enable the Dialogflow Messnger Integration in your CX Agent, then rename `web/template-config.js` to `web/config.js` and set the `agentid` in the `web/config.js` to your Agent ID.