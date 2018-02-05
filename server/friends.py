from flask import abort

# Find and return user from data.json
def findUserById(users, userId):
    user = [user for user in users if user['id'] == userId]
    if len(user) == 0:
        abort(404)
    return user[0]

# Find and return direct friends of user
def directFriends(users, userId):
    directFriendsList = findUserById(users, userId)['friends']
    directFriends = []
    for user in users:
        if user['id'] in directFriendsList:
            directFriends.append(user)

    return directFriends

# Find and return direct friends, friends of friends and suggested friends
def allFriends(users, userId):
    allFriends = {
        'directFriends': directFriends(users, userId),
        'friendsOfFriends': [],
        'suggestedFriends': []
    }

    for friend in allFriends['directFriends']:
        friendFriends = directFriends(users, friend['id'])
        for user in friendFriends:
            if user['id'] != userId and user not in allFriends['directFriends']:
                if user in allFriends['friendsOfFriends']:
                    allFriends['suggestedFriends'].append(user)
                else:
                    allFriends['friendsOfFriends'].append(user)

    return allFriends

# Return friends of friends
def friendsOfFriends(users, userId):
    return allFriends(users, userId)['friendsOfFriends']

# Return suggested friends
def suggestedFriends(users, userId):
    return allFriends(users, userId)['suggestedFriends']
