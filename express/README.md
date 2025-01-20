npm init
npm install
npm install sequelize pg pg-hstore --save
sudo npm install sequelize-cli -g
sequelize init

editamos config/config.js 

sequelize model:generate --name users --attributes email:string,password:string,type:string,active:boolean

sequelize model:generate --name teachers --attributes dni:string,name:string,last_name:string,date_of_birth:date,user_id:integer

sequelize model:generate --name students --attributes dni:string,name:string,last_name:string,date_of_birth:date,teacher_id:integer


despues:
1. sequelize db:migrate (para borrar sequelize db:migrate:undo:all)

create seeds:
sequelize seed:generate --name users
sequelize seed:generate --name teachers
sequelize seed:generate --name students


ara generar seeds con contraseñas encriptadas utilizando bcrypt. Usaremos promesas de bcrypt para generar hashes de las contraseñas antes de insertarlas en las tablas.
instalamos:
npm install bcrypt

poblamos base de datos:
 despues:
2. sequelize db:seed:all (si quieres borrar use: sequelize db:seed:undo:all)
 