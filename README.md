# Learn to speak Mandarin

Compiled app for Android is [available at the Play Store](https://play.google.com/store/apps/details?id=com.sevencoins.learntospeakmandarin)

Code has only been build and tested for Android.

### Environment setup

* [Install Cordova CLI.](https://cordova.apache.org/docs/en/latest/guide/cli/)
* `npm install -g ionic`
* `ionic start mandarin blank --appname "Learn to speak Mandarin" --id com.sevencoins.learntospeakmandarin`
* `cd mandarin`
* `ionic platform add android`
* `cordova plugin add https://github.com/macdonst/SpeechRecognitionPlugin`
* Copy content of repo `www` subfolder into local `www` subfolder.

### Build and run debug version on device

* Connect device to PC
* `ionic build android`
* `ionic run android`

