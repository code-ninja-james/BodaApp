# BodaApp

![Boda Logo](mobile/images/logo.png)

`Boda` is a react-native taxi app template.

**BodaApp**
   [![Demo CountPages alpha](https://j.gifs.com/Gvl08r.gif)](https://www.youtube.com/watch?v=uB-jRfi4Hdk&t=82s)[Watch in youtube](https://www.youtube.com/watch?v=uB-jRfi4Hdk&t=82s)

Designed for android . *Not yet developed for ios, but I'm working on updating it!*


**Download**
---

1. Download with :
    + `$ git clone https://github.com/code-ninja-james/BodaApp `


**Configuration**
---

1. mobile

    + In the BodaApp folder in your terminal
    
         For npm run

        - `$cd mobile && npm install`

        For yarn run
        - `$cd mobile && yarn install`

    + Google api key configuration
        - In mobile folder using a code editor edit googleapikey.js
        - In mobile/android/app/src/main/androidmanifest.xml change this <br/>
        ` android:value="YourGoogleApiKey"/>`
    
    + Backend and Frontend connect
      - In mobile/baseUrl.js file change the ip adress to your server's internal ip adress don't change the port number `4000`
      - In mobile/screens folder in the Driver.js and Passenger.js change the ip adress for socket.io connection to you server internal ip adress don't change the port number `3000`
     + Change gradle files in your android folder 
        - The app won't work if the android files are not compatible with your environment
        - Use android studio and stackoverflow for better debbugging


2.express-backend

+ In the BodaApp folder in your terminal
    
     For npm run
     - `$cd express-backend && npm install`
     
     For yarn run

   - `$cd express-backend && yarn install`

    	
+ Create a database in [MongoDbAtlas](https://account.mongodb.com/account/login?n=%2Fv2%2F5f6dac9c302dd15285fbdb6c&nextHash=%23clusters)
  + In MongoDb Atlas create a cluster with one database and a user with read and write priveledges      
  + Use a code editor preferrably vscode to edit config folder in express-backend
    
    - In mongodb.js in config folder change this line `'mongodb+srv://YOUR_USERNAME_HERE:'+ encodeURIComponent('YOUR_PASSWORD_HERE') + '@CLUSTER_NAME_HERE.mongodb.net/test?retryWrites=true'` you can check [here](https://medium.com/@sergio13prez/connecting-to-mongodb-atlas-d1381f184369) on how to do it correctly
    - In  auth.js in config folder 
    `const jwtSecret ="replace with any string";`


**Running the App**
---

1.Open an android emulator in the mobile folder run in your terminal <br />
`$react-native start` <br />
&nbsp;&nbsp;&nbsp;then<br />
`$react-native run-android`

2. In the express-backend run <br/>
`nodemon index.js`

3. In the socket.io-backend run <br/>
`nodemon index.js`

**How to Contribute**
---

1. Clone repo and create a new branch: `$ git checkout https://github.com/code-ninja-james/BodaApp -b name_for_new_branch`
2. Make changes and test
3. Submit Pull Request with comprehensive description of changes

