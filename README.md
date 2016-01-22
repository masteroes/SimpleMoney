#### Running the application

# Install packages using "npm install" command from project home

# Set the environment variable "set APP_PORT=<port>"
# Start the server "node ."

# User Registration API 
## URL http://<hostname>:<port>/users/
## HTTP Method - POST
### Sample Payload username and email is unique
{
    "username" : "ashu2",
    "password" : "1234",
  "contactinfo":{
    "phone" : "1234",
    "email" : "ashu@xyza.com"
  },
  "addressinfo": {
    "add1": "new delhi"
  },
  "personalinfo":{
    "name": "Ashutosh"
  }
}

# Fetch Profile API 
## URL http://<hostname>:<port>/users/
## URL http://<hostname>:<port>/users/:userid
## HTTP Method - GET


# Login API
## URL http://<hostname>:<port>/login/
## HTTP Method - POST
### Sample Payload
{
    "userId" : "ashu2",
    "password" : "1234"
}



