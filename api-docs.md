# DBO

This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

## RESTful endpoints

## customers

### POST /customers/login

> Login customers

_Request Header_

```
  not needed
```

_Request Body_

```
{
  "name": "String",
  "password": "String"
}
```

_Response (200 - OK)_

```
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzgsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluMUBtYWlsLmNvbSIsInJvbGUiOiIiLCJpYXQiOjE2MjgwMjUxNjB9.tvBB5FG-b8bxK-BvSCCdOr3pLfYlfk3ceKR0yUM7Lbg",
  "message": "you have succesfully login"
}
```

_Response (401 - Unauthorized)_

```
{
  "message": "Invalid email or password"
}
```

---

### GET /customers?page=1&size=3&q=and

> Get all customers

_Request Header_

```
 access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDUsInVzZXJuYW1lIjoiYW5kcmVhcyIsImVtYWlsIjoiYW5kcmVAbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Mjg2MzkxMjZ9.kYvmunZ-u-an1f5YKBx6EVUU-7h1MqhKfgE5xztGnF4"
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
[
  {
    "id": 1,
    "name": "andre",
    "role": "admin"
  },
  {
    "id": 2,
    "name": "andri",
    "role": "customer"
  }
]
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal server error"
}
```

_Response (401 - Unauthorized)_

```
{
  "message": "Invalid Token"
}
```

Response (401 - Unauthorized)

```
{
  "message": "user do not have authorization"
}
```

---

### GET /customers/:id

> Get Detail Customer

_Request Header_

```
 access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDUsInVzZXJuYW1lIjoiYW5kcmVhcyIsImVtYWlsIjoiYW5kcmVAbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Mjg2MzkxMjZ9.kYvmunZ-u-an1f5YKBx6EVUU-7h1MqhKfgE5xztGnF4"
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
{
  "id": 3,
  "name": "anton",
  "role": "customer"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal server error"
}
```

_Response (401 - Unauthorized)_

```
{
  "message": "Invalid Token"
}
```

Response (401 - Unauthorized)

```
{
  "message": "user do not have authorization"
}
```

Response (400 - Bad Request)

```
{
  "message": "user with id:33 not found"
}
```

---

### POST/customers

> Create user

_Request Header_

```
 access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDUsInVzZXJuYW1lIjoiYW5kcmVhcyIsImVtYWlsIjoiYW5kcmVAbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Mjg2MzkxMjZ9.kYvmunZ-u-an1f5YKBx6EVUU-7h1MqhKfgE5xztGnF4"
```

_Request Body_

```
{
  "name": "String",
  "password": "String"
  "role":"String"
}
```

_Response (200 - OK)_

```
{
  "id": 9,
  "name": "zzz",
  "password": "$2b$08$sILC1TULty8FN6FPWhssnOHjz6xNVei1ftqYOQ6HgsH3jwdqK53W2",
  "role": "customer",
  "updatedAt": "2021-10-21T03:05:15.002Z",
  "createdAt": "2021-10-21T03:05:15.002Z"
}
```

_Response (400 - Bad Request)_

```
{
  "message": "user with id:8 not found"
}
```

_Response (401 - Unauthorized)_

```
{
  "message": "Invalid Token"
}
```

Response (401 - Unauthorized)

```
{
  "message": "user do not have authorization"
}
```

---

### PUT/customers/:id

> Update user by id

_Request Header_

```
 access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDUsInVzZXJuYW1lIjoiYW5kcmVhcyIsImVtYWlsIjoiYW5kcmVAbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Mjg2MzkxMjZ9.kYvmunZ-u-an1f5YKBx6EVUU-7h1MqhKfgE5xztGnF4"
```

_Request Body_

```
{
  "name": "String",
  "password": "String"
  "role": "String"
}
```

_Response (200 - OK)_

```
{
  "id": 9,
  "name": "aaa",
  "password": "$2b$08$sILC1TULty8FN6FPWhssnOHjz6xNVei1ftqYOQ6HgsH3jwdqK53W2",
  "role": "add",
  "createdAt": "2021-10-21T03:05:15.002Z",
  "updatedAt": "2021-10-21T03:05:59.339Z"
}
```

_Response (400 - Bad Request)_

```
{
  "message": "user with id:8 not found"
}
```

_Response (401 - Unauthorized)_

```
{
  "message": "Invalid Token"
}
```

Response (401 - Unauthorized)

```
{
  "message": "user do not have authorization"
}
```

---

##

### DELETE /customers/:id

> Delete customer by id

_Request Header_

```
 access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDUsInVzZXJuYW1lIjoiYW5kcmVhcyIsImVtYWlsIjoiYW5kcmVAbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Mjg2MzkxMjZ9.kYvmunZ-u-an1f5YKBx6EVUU-7h1MqhKfgE5xztGnF4"
```

_Request Body_

```
  not needed
```

_Response (200 - OK)_

```
{
  "message": "user with id:8 deleted"
}
```

_Response (400 - Bad Request)_

```
{
  "message": "user with id:8 not found"
}
```

_Response (401 - Unauthorized)_

```
{
  "message": "Invalid Token"
}
```

Response (401 - Unauthorized)

```
{
  "message": "user do not have authorization"
}
```

---

##

## RESTful endpoints

## orders

### GET /orders?page=1&size=2&qBook=tech

> Get all order

_Request Header_

```
access_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDUsInVzZXJuYW1lIjoiYW5kcmVhcyIsImVtYWlsIjoiYW5kcmVAbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Mjg2MzkxMjZ9.kYvmunZ-u-an1f5YKBx6EVUU-7h1MqhKfgE5xztGnF4
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
[
  {
    "id": 1,
    "CustomerId": 1,
    "BookId": 1,
    "Book": {
      "id": 1,
      "name": "eloquent javascript",
      "genre": "Tech"
    },
    "Customer": {
      "id": 1,
      "name": "andre",
      "role": "admin"
    }
  },
  ...
]
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal server error"
}
```

_Response (401 - Unauthorized)_

```
{
  "message": "Invalid Token"
}
```

---

###

### GET /orders/3

> Get Detail Order

_Request Header_

```
 access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDUsInVzZXJuYW1lIjoiYW5kcmVhcyIsImVtYWlsIjoiYW5kcmVAbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Mjg2MzkxMjZ9.kYvmunZ-u-an1f5YKBx6EVUU-7h1MqhKfgE5xztGnF4"
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
{
  "id": 2,
  "CustomerId": 2,
  "BookId": 2,
  "Book": {
    "id": 2,
    "name": "The Art of Computer Programming",
    "genre": "Tech"
  },
  "Customer": {
    "id": 2,
    "name": "andri",
    "role": "customer"
  }
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal server error"
}
```

_Response (401 - Unauthorized)_

```
{
  "message": "Invalid Token"
}
```

Response (400 - Bad Request)

```
{
  "message": "order with id:33 not found"
}
```

---

### POST/orders

> Create order

_Request Header_

```
 access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDUsInVzZXJuYW1lIjoiYW5kcmVhcyIsImVtYWlsIjoiYW5kcmVAbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Mjg2MzkxMjZ9.kYvmunZ-u-an1f5YKBx6EVUU-7h1MqhKfgE5xztGnF4"
```

_Request Body_

```
{
  "CustomerId": Integer,
  "BookId": Integer
}
```

_Response (200 - OK)_

```
{
  "id": 8,
  "CustomerId": 1,
  "BookId": 1,
  "updatedAt": "2021-10-21T06:24:25.135Z",
  "createdAt": "2021-10-21T06:24:25.135Z"
}
```

_Response (400 - Bad Request)_

```
{
  "message": "order with id:88 not found"
}
```

_Response (401 - Unauthorized)_

```
{
  "message": "Invalid Token"
}
```

---

### PUT/orders/:id

> Update order by id

_Request Header_

```
 access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDUsInVzZXJuYW1lIjoiYW5kcmVhcyIsImVtYWlsIjoiYW5kcmVAbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Mjg2MzkxMjZ9.kYvmunZ-u-an1f5YKBx6EVUU-7h1MqhKfgE5xztGnF4"
```

_Request Body_

```
{
  "CustomerId": Integer,
  "BookId": Integer
}
```

_Response (200 - OK)_

```
{
  "id": 7,
  "CustomerId": 1,
  "BookId": 1,
  "createdAt": "2021-10-21T06:24:03.420Z",
  "updatedAt": "2021-10-21T06:28:47.116Z"
}
```

_Response (400 - Bad Request)_

```
{
  "message": "order with id:88 not found"
}
```

_Response (401 - Unauthorized)_

```
{
  "message": "Invalid Token"
}
```

---

##

### DELETE /orders/:id

> Delete order by id

_Request Header_

```
 access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDUsInVzZXJuYW1lIjoiYW5kcmVhcyIsImVtYWlsIjoiYW5kcmVAbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Mjg2MzkxMjZ9.kYvmunZ-u-an1f5YKBx6EVUU-7h1MqhKfgE5xztGnF4"
```

_Request Body_

```
  not needed
```

_Response (200 - OK)_

```
{
  "message": "order with id:8 deleted"
}
```

_Response (400 - Bad Request)_

```
{
  "message": "order with id:8 not found"
}
```

_Response (401 - Unauthorized)_

```
{
  "message": "Invalid Token"
}
```

Response (401 - Unauthorized)

```
{
  "message": "user do not have authorization"
}
```
