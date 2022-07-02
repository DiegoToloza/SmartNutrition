# SmartNutrition

SmartNutrition es una web, la cual maneja dietas, ejercicios que son manejados por usuarios con el role de administrador. La aplicacion web ocupa Angular cli - NodeJs - MongoDB para Frontend - Backend - Base de Datos respectivamente.

## Instalación

1. Se debe clonar el repositorio desde git.

2. Se debe crear una database en el Host `"localhost:27017"` en MongoDB con el nombre *"smart_nutrition"*, agregar las colecciones *"diets"*, *"trainings"*, *"roles"* y *"users"*, y cargar los datos que se encuentran en el directorio *"Data"*.

3. Se debe ejecutar el comando `$ npm install` en los directorios *"Backend"* y *"Frontend"* con el fin de cargar las dependencias.

4. Se debe ejecutar el comando `$ npm run dev` en el directorio *"Backend"* para iniciar el API rest.

5. Se debe ejecutar el comando `$ ng serve` en el directorio *"Frontend"* para iniciar la aplicacion web.

## Funcionalidades

### Usuarios
* **Creación de usuario**: Por medio del logIn este crea un usuario con los atributos *"username"*, *"email"*, *"contraseña"* e *"imagen: default"*, y se almacenara en la base de datos generando un *"id"* propio.

* **Obtención de usuario:**: Por medio del token que se genera al iniciar sesión este hara una petición al *"Backend"* y obtendra los datos del usuario logeado.

* **Usuarios**: Existen 2 roles *"usuario"* y *"administrador"*, para iniciar como *"administrador"* el `email es: admin@gmail.com` y la `contraseña es: admin`.

### Dietas
* **Creación de una dieta**: Un usuario ya logeado y además con el rol de *"administrador"* podra crear una dieta con los atributos *"nombre"*, *"descripción"*, *"categoria"*, *"contenido"* y la *"imagen"*, en caso de no proporcionar una *"imagen"* la web agregara una *"imagen default"*.

* **Obtención de dietas**: Al ingresar al apartado de dietas se hara una petición al *"Backend"* obteniendo todas las dietas del sistema, además se podran filtrar por su *"categoria"*.

* **Obtención de una dieta**: Al ingresar a una dieta en particular se hara una petición al *"Backend"* con el *"id"* de la dieta, obteniendo los datos de esta.

* **Modificación de una dieta**: Un usuario ya logeado y además con el rol de *"administrador"* podra modificar los atributos de la dieta a excepción del *"id"*.

* **Eliminación de una dieta**: Un usario ya logeado y además con el rol de *"administrador"* podra eliminar la dieta de la base de datos.

### Ejercicios

* **Creación de un ejercicio**: Un usuario ya logeado y además con el rol de *"administrador"* podra crear un ejercicio con los atributos *"nombre"*, *"categoria"*, *"dificultad"*, *"contenido"*, *"url de un video explicativo"* y la *"imagen"*, en caso de no proporcionar una *"imagen"* la web agregara una *"imagen default"*.

* **Obtención de ejercicios**: Al ingresar al apartado de ejercicios se hara una petición al *"Backend"* obteniendo todos los ejercicios del sistema, además se podran filtrar por su *"categoria"* y *"dificultad"*.

* **Obtención de un ejercicio**: Al ingresar a un ejercicio en particular se hara una petición al *"Backend"* con el *"id"* del ejercicio, obteniendo los datos de este.

* **Modificación de un ejercicio**: Un usuario ya logeado y además con el rol de *"administrador"* podra modificar los atributos del ejercicio a excepción del *"id"*.

* **Eliminación de un ejercicio**: Un usuario ya logeado y además con el rol de *"administrador"* podra eliminar la ejercicio de la base de datos.
