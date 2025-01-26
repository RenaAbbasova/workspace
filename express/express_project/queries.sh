Hola Fausto.
Para seguir las buenas prácticas, entiendo que lo mejor sería separar las rutas en diferentes 
archivos dentro de una carpeta llamada routes. Sin embargo, actualmente tengo todo el código en el archivo app.js.

#---------------


post with curl:
curl -X POST http://localhost:3000/api/users \
-H "Content-Type: application/json" \
-d '{
  "email": "post@example.com",
  "password": "123456",
  "type": "admin",
  "active": true
}'

curl -X PUT http://localhost:3000/api/users/5 \
-H "Content-Type: application/json" \
-d '{
  "email": "updated@example.com",
  "password": "newpassword",
  "type": "user",
  "active": false
}'

curl -X DELETE http://localhost:3000/api/users/5

# user nod found:
curl -X POST http://localhost:3000/api/users/999/active

# Update active: to true:
curl -X POST http://localhost:3000/api/users/4/active

curl -X GET http://localhost:3000/api/users/1/active



curl -X POST http://localhost:3000/api/teachers \
-H "Content-Type: application/json" \
-d '{
  "dni": "X56230897",
  "name": "Olga",
  "last_name": "Perez",
  "date_of_birth": "1979-06-15",
  "user_id": 1
}'

curl -X PUT http://localhost:3000/api/teachers/4 \
-H "Content-Type: application/json" \
-d '{
  "dni": "X56235962",
  "name": "Ana",
  "last_name": "Soboleva",
  "date_of_birth": "1980-08-30",
  "user_id": 1
}'

curl -X GET http://localhost:3000/api/teachers/1/students

curl -X DELETE http://localhost:3000/api/teachers/4


curl -X POST http://localhost:3000/api/students \
-H "Content-Type: application/json" \
-d '{
  "dni": "Y87654321",
  "name": "Victoria",
  "last_name": "Marquez",
  "date_of_birth": "2014-02-15",
  "teacher_id": 2
}'

curl -X POST http://localhost:3000/api/students \
-H "Content-Type: application/json" \
-d '{
  "dni": "Y2568321",
  "name": "Sebastian",
  "last_name": "Ichivera",
  "date_of_birth": "2005-03-30",
  "teacher_id": 1
}'



curl -X PUT http://localhost:3000/api/students/4 \
-H "Content-Type: application/json" \
-d '{
  "name": "Robert",
  "last_name": "Smith",
  "dni": "987654322",
  "date_of_birth": "2004-03-01",
  "teacher_id": 2
}'


curl -X DELETE http://localhost:3000/api/students/5


curl -X POST http://localhost:3000/api/students \
-H "Content-Type: application/json" \
-d '{
  "dni": "X23546987",
  "name": "Cristina",
  "last_name": "Basco",
  "date_of_birth": "2010-04-25",
  "teacher_id": 2
}'



## login
http://localhost:3000/login

# login user existente  
admin:
username: admin@example.com
password: admin123

teacher:
username: ikermarco@example.com
password: iker123


curl -X POST http://localhost:3000/login \
-H "Content-Type: application/x-www-form-urlencoded" \
-d "username=admin@example.com&password=admin123"


# Este comando guarda la cookie en un archivo llamado cookies.txt.:

curl -X POST http://localhost:3000/login \
-H "Content-Type: application/x-www-form-urlencoded" \
-d "username=admin@example.com&password=admin123" \
-c cookies.txt

curl -X POST http://localhost:3000/api/token \
-H "Content-Type: application/json" \
-d '{
    "username": "admin@example.com",
    "password": "admin123"
}'


curl -X POST http://localhost:3000/api/token \
-H "Content-Type: application/json" \
-d '{
    "username": "mariaperez@example.com",
    "password": "maria123"
}'


curl -X GET http://localhost:3000/jwt \
-H "Authorization: Bearer $JWT_TOKEN"


curl -X GET http://localhost:3000/auth/users \
-H "Authorization: Bearer $JWT_TOKEN"




