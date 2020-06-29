# git-hub-stats
An app with some statistical info using the Git Hub rest API v3

## Before starting
I assume you have a MAC setted up with npm, react native, xcode and android studio.

## Getting started
After you clonning the project on your MAC you need to follow some steps in order to make it running.

#### Install Dependencies
On your terminal, execute the following command on the project root.

`yarn`

#### Set up Android

`$ cd android/`

Create a file named local.properties and add your android SDK path. 
Below i show my file with my location.


```
## This file must NOT be checked into Version Control Systems,
# as it contains information specific to your local configuration.
#
# Location of the SDK. This is only used by Gradle.
# For customization when using a Version Control System, please read the
# header note.
#Thu Jul 11 12:33:58 WEST 2019

sdk.dir=/Users/tiagofreitas/Library/Android/sdk

```
Go back to the root folder.

In alternative you can execute the AndroidStudio, open the android folder and build the project. It will configure this step automatically.

### Running on Android
You can run directly on a device or on the android emulator. 
For the emulator, you must first open it and then execute the following command.

`yarn android`

### Set UP iOS
`cd /ios`

`pod install`

`cd ..`

### Running on iOS
You can type the following command on your terminal and it will open an iOS emulator with the app installed. Or you can just open the .xcworkspace file with xCode and execute it.

`yarn ios`
