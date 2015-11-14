# SkateMap
Find skate spots in Barcelona.
We will start using **Yeoman** as starting template more precisely we will use the
**Angular generator.**
We will use **Grunt** as building system and **Bower** as dependency manager.

##Installing Yeoman
We need NodeJs installed.
'''
npm install -g yo bower grunt-cli gulp
'''
Now we have to install the generator.
'''
npm install -g generator-karma generator-angular
'''

We created a template for our project.

'''
yo angular SkateMap
'''
This is the list of the dependency installed:

- angular-animate.js: This is for adding simple animation
- angular-cookies.js: Handling cookies
- angular-resource.js: Try retrieve entities from the server in REST format
- angular-messages.js: Conditional messages
- angular-route.js: Routing URLs to the correct view
- angular-sanitize.js: To avoid code injection from user inputs
- angular-touch.js: For mobile phones


## Building and Running the app
First we have to download and install all the dependencies
'''
bower install
grunt
grunt serve
'''
