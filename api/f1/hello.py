import pymongo
from flask import Flask
from pymongo import MongoClient
from flask_cors import CORS
app = Flask(__name__)






@app.route("/")
def hello_world():
    return "<p>Hello, World debugging activated!</p>"

@app.route("/home")
def home():
    return (

    {
        'status':1,
        'msg':'UserRemove',
        'class':'success',
        'title':'this is <>home page'
    },
    
    )

@app.route("/login")
def login():
    return "this is <h1>Login page</h1>"

@app.route("/contact")
def contact():
    return "this is <h1>contact page</h1>"

@app.route("/if-else")
def condition():
    value = 10
    if value == 2:
        return "The value is equal to 2"
    elif value < 2:
        return "The value is less than 2"
    else:
        return f"the value is {value}"


@app.route("/inline")
def inline():
    value = 10
    msg = "the value is equal to 1" if value == 1 else "the value is not equal to 1"
    return msg

@app.route("/loop")
def loop():
    value = 1
    count = []
    while value<=20:
        value+=1
        count.append(value)
    
    return {
        "status":1,
        "message":"success",
        "payload":{
            'count':count,
            'value':value
        }
    }

def addition(a,b):
    return a+b
def multiply(arg1,arg2):
    print('arg2: ', arg2)
    print('arg1: ', arg1)
    return arg2*arg1


@app.route("/function")
def function():
    value = multiply(arg2=10,arg1=12)
    
    return {
        'status':1,
        'payload':{
            'value':{function}
        }
    }


client = MongoClient("mongodb://localhost:27017/")
mdb = client['glav']
@app.route('/db')
def insert():
    users=[
        {
            "_id":1,
            "name":"student1",
            "dept":"CSE"
        },
        {
            "_id":2,
            "name":"student2",
            "dept":"CSE"
        },
        {
            "_id":3,
            "name":"student3",
            "dept":"CSE"
        },
        {
            "_id":4,
            "name":"student4",
            "dept":"CSE"
        },
        {
            "_id":5,
            "name":"student5",
            "dept":"CSE"
        },
    ]
    mdb.users.insert_many(users)

    return users

@app.route("/db/read")
def read():
    users = mdb.users.find({"dept":"CSE"},{'name':1,'_id':0})
    foundlist = []
    for user in users:
        foundlist.append(user)
    print(users)
    return {"foundlist":foundlist}

@app.route("/db/update")
def update():
    # user = mdb.users.find_one({'_id':1})
    
    mdb.users.update_many({},{'$set':{'email':'user@gmail.com','password':5526242}})

    # updateUsers = mdb.users.find_one({'_id':1})
    updatedUser = []
    for user in mdb.users.find({}):
        updatedUser.append(user)

    return {"updatedUser": updatedUser}

@app.route("/db/remove")
def remove():

    mdb.users.delete_one({'id':2})

    return {
        'status':1,
        'msg':'UserRemove',
        'class':'success'
    }


