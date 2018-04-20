Mindera Open-Day conferences backend service
===============

Simple restful service that provides backend support to the Mindera Open-Day Conferences App (based on the ionic-conferences-app); This service provides endpoints to obtain the conference details, for user registration and authentication.

Technical Details
=================

Configurations
--------------
Before you can run the application, all the configuration files need to be created and made available under `.config` directory.

    mkdir .config
    cp config_samples/* .config/
    
All the configuration files are self explanatory and should be adjusted to match your local configurations.


Instalation
------------
Install the application dependencies

    npm install
    
Running the service
-------------------   

    npm start
    
    
Key Dependencies
------------
    Bookshelf
    Knex
    Bcrypt
    
    