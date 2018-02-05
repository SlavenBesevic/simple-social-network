#!flask/bin/python
from flask import Flask, jsonify, abort, make_response
import json
import friends

app = Flask(__name__)

# Import data
dataJson = open("data.json", "r")
users = json.load(dataJson)
dataJson.close()

# Get all users
@app.route('/ssn-api/users', methods=['GET'])
def getUsers():
    return jsonify({'users': users})

# Get user by id
@app.route('/ssn-api/users/<int:userId>', methods=['GET'])
def getUser(userId):
    user = friends.findUserById(users, userId)
    return jsonify({'user': user})

# Get direct friends, friends of friends and suggested friends
@app.route('/ssn-api/users/<int:userId>/friends', methods=['GET'])
def getAllFriends(userId):
    allFriends = friends.allFriends(users, userId)
    return jsonify({'allFriends': allFriends})

# Get direct friends of user
@app.route('/ssn-api/users/<int:userId>/friends/direct-friends', methods=['GET'])
def getDirectFriends(userId):
    directFriends = friends.directFriends(users, userId)
    return jsonify({'directFriends': directFriends})

# Friends of friends
@app.route('/ssn-api/users/<int:userId>/friends/friends-of-friends', methods=['GET'])
def getFriendsOfFriends(userId):
    friendsOfFriends = friends.friendsOfFriends(users, userId)
    return jsonify({'friendsOfFriends': friendsOfFriends})

# Suggested friends
@app.route('/ssn-api/users/<int:userId>/friends/suggested-friends', methods=['GET'])
def getSuggestedFriends(userId):
    suggestedFriends = friends.suggestedFriends(users, userId)
    return jsonify({'suggestedFriends': suggestedFriends})

# 404 error handler
@app.errorhandler(404)
def notFound(error):
    return make_response(jsonify({'error': 'Not found'}), 404)


if __name__ == '__main__':
    app.run(debug=True)
