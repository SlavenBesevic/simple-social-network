# Simple Social Network

## Server-side
Created with:
- Python
- Flask

To install dependencies in your terminal navigate to directory server and execute:

    $ virtualenv flask
    $ flask/bin/pip install flask

To run this application:

    $ ./app.py

API:
- http://localhost:5000/ssn-api/users/
- http://localhost:5000/ssn-api/users/{int:userId}/friends
- http://localhost:5000/ssn-api/users/{int:userId}/friends/direct-friends
- http://localhost:5000/ssn-api/users/{int:userId}/friends/friends-of-friends
- http://localhost:5000/ssn-api/users/{int:userId}/friends/suggested-friends

## Client-side
Created with:
- React
- https://github.com/facebook/create-react-app

To install dependencies open new terminal window, navigate to directory server and execute:

    $ npm install

To run this application:

    $ npm start

## Enable cross-origin resource sharing
Chrome extension:
- https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc

Firefox add-on:
- https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/

## Posible improvments
- User interface
- Client codebase refactor
- Create database
- etc
