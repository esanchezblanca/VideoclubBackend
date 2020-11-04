# Videoclub online

Proyecto creado para backend que simula un videoclub. En este videoclub se pueden crear usuarios para hacer un login. Una vez hecho este login, podremos acceder a diversas secciones como la de hacer pedidos, consultarlos, modificar y eliminar películas de la base de datos del videoclub.


### Requisitos e instalación 

Para poder ejecutar Videoclub backend será necesario tener instalado Postman, Mongo DB y Visual Studio.

Descargue el zip del proyecto, descomprímalo y ábralo con Visual Studio Code o cualquier programa similar.

Necesitará Postman para enviar peticiones al servidor como por ejemplo la de crear un pedido.

### Descripción del proyecto

El proyecto se compone de tres partes principales: 
-	carpeta components
-	middleware.js 
-	server.js

 

La carpeta components está dividida en tres secciones: movie, order y user. Cada una contiene a su vez sus propios controladores, routers y modelos.

 
**userController.js**
La carpeta de usuarios tiene dentro de su controlador una serie de instrucciones que le permiten crear, modificar, sacar una lista de usuarios, borrarlos y hacer el login.

Se ha añadido un middleware de autenticación a todos los módulos a excepción del de crear un usuario. 

Si creamos un usuario y hacemos login con ese usuario y contraseña el servidor devolverá un mensaje de “autenticación correcta” y nos devolverá un token personal que servirá para que al introducirlo en postman nos permita hacer pedidos, modificar el perfil de usuario, las películas o incluso eliminarlos. 

En caso de introducir mal el usuario o la clave nos devolverá un mensaje de error.



**movieController.js**
Se han creado 4 endpoints para crear, modificar, mostrar y eliminar las películas de la lista de Mongo DB.

A la hora de crear un nuevo registro de película, Mongo pedirá que se introduzca un título y generará automáticamente la fecha de creación del registro.

El middleware de autenticación será necesario para realizar cualquiera de las acciones arriba listadas, excepto para la de extraer un listado con todas las películas. Esta acción puede realizarla cualquier usuario que no esté registrado.

**orderController.js**

Para poder crear o revisar los pedidos necesitaremos introducir el token generado en el login en Postman. De lo contrario nos devolverá un mensaje de error por token inválido.

Si se quiere realizar un nuevo pedido habrá que introducir por Postman el id del usuario y el id de la película que se quiere alquilar.





## Licencia 

Este proyecto ha sido realizado por Elena Sánchez de la Blanca y está sujeto a la licencia MIT. Para obtener más información, por favor diríjase al archivo LICENSE que encontrará adjunto. 

