# Install dependencies
> npm install

# Init db
> npx prisma generate 
> npx prisma migrate dev 

# Run the project
> npm run start:dev 


# Endpoints

# Get All Users
GET http://localhost:3333/api/users

# Get User By Id
GET http://localhost:3333/api/users/{id}

# Create User
POST http://localhost:3333/api/users
Request Body:
{
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@email.com"
}

# Update User
PUT http://localhost:3333/api/users/{id}
Request Body:
{
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@email.com"
}

# Delete User
DELETE http://localhost:3333/api/users/{id}
