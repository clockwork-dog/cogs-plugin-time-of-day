# COGS Google Sheets plugin

## How to use

###

- Create a Google Cloud project: https://console.cloud.google.com/apis
- Add a Service Account: https://console.cloud.google.com/iam-admin/serviceaccounts
- Add the email address of this Service Account as an `Editor` to the Google Sheet you want to update.
- Enable the Google Sheet API: https://console.cloud.google.com/marketplace/product/google/sheets.googleapis.com

### Install the plugin

- Download the plugin from [Releases](https://github.com/clockwork-dog/cogs-plugin-google-sheets/releases/latest)
- Unzip into the `plugins` folder in your COGS project
- In COGS, open the project and go to `Setup` > `Settings` and enable `Hue Control`
- Click the `Hue Control` icon that appears on the left
- Set your API key and local IP address for your Philips Hue bridge

You can now use the `Google Sheets: Append Row` action in your behaviours.

## Local development in a browser

- Place this folder in the `client-content` folder in your COGS project.
- Add a "Custom" Media Master called "Google Sheets plugin dev" in COGS and select the `Custom` type
- Select `cogs-plugin-google-sheets/build` as the content directory

```
yarn start "Google Sheets plugin dev"
```

This will connect to COGS as a simulator for the Media Master called "Google Sheets plugin dev".

## Build for your COGS project

```
yarn build
```

This folder can now be used as a plugin. Place the entire folder in the `plugins` folder of your COGS project and follow the "How to use" instructions above.
# cogs-plugin-time-of-day
