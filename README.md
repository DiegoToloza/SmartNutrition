# SmartNutrition

SmartNutrition es una web, la cual maneja dietas, ejercicios que son manejados por usuarios con el role de administrador. La aplicacion web ocupa Angular cli - NodeJs - MongoDB para Frontend - Backend - Base de Datos respectivamente.

## Instalación

1. Se debe clonar el repositorio desde git.

2. Se debe crear una database en el Host "localhost:27017" en MongoDB con el nombre "smart_nutrition", agregar las coleccionse *"diets"*, *"trainings"*, *"roles"* y *"users"*, y cargar los datos que se encuentran en el directorio *"Data"*.

3. Se ejecutan el comando `$ npm install` en los directorios *"Backend"* y *"Frontend"* con el fin de cargar las dependencias.

1.- Se debe crear una database en el Host "localhost:27017" en MongoDB con el nombre "smart_nutrition", agregar las colecciones "diets" y "trainings", y cargar los datos que estan en la carpeta "Data".
2.- Se debe ejecutar el comando "npm install" en los directorios "Backend" y "Frontend" para cargar las dependencias.
3.- Se debe ejecutar el Backend con el comando "npm start" posicionandose en el directorio "Backend".
4.- Se debe ejecutar el Frontend con el comando "ng serve" posicionandose en el directorio "Frontend".


Las funcionalidades son:
1.- Creación de usuarios: Se crea un usuario con los atributos "Nombre","E-mail","Contraseña", y se almacenan en la base de datos, generando un id propio.
2.- Creación de Dietas Personalizadas: Al haber iniciado sesión, el usuario podrá crear sus propias dietas, las que se almacenaran en la base de datos asociandolas al id del usuario
3.- Creación de listas de ejercicios: Al haber iniciado sesión, el usuario podrá crear sus propias rutinas de ejercicios, usando los que dispone la aplicación web. Estas listas se almacenaran en la base de datos asociandolas al id del usuario
4.- Mostrar por pantalla Dietas: La aplicación web obtendrá dietas desde la base de datos, y las mostrará por pantalla.
5.- Mostrar por pantalla Ejercicios: La aplicación web obtendrá ejercicios desde la base de datos, y los mostrará por pantalla.
6.- Agregar ejercicios a una lista de ejercicios: En una lista ya creada, el usuario podrá agregar mas ejercicios, y se actualizará en la base de datos.
7.- Eliminar ejercicios de una lista de ejercicios: En una lista ya creada, el usuario podrá eliminar la referencia al ejercicio deseado, y se actualizará en la base de datos.
8.- Eliminación de Dietas Personalizadas: Al haber iniciado sesión, el usuario podrá eliminar sus dietas creadas, las que se eliminaran de la base de datos.
9.- Eliminación de Listas de Ejercicios: Al haber iniciado sesión, el usuario podrá eliminar sus propias rutinas de ejercicios. Estas listas se eliminaran de la base de datos y de la aplicación web.
10.-Modificación de Dietas Personalizadas: El usuarió será capaz de seleccionar sus dietas creadas, y modificar sus datos.
11.-Eliminación de usuarios: El usuario tendrá la opción de cerrar su cuenta, la cual se eliminará de la base de datos
12.-Modificación de usuarios: El usuario podrá editar la información que concierne a su cuenta.
