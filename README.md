# Ejercicio Frontend con JS

    >David Arrarás López

### Introducción

El objetivo de este proyecto es el desarrollo básico de una aplicación frontend de compra/venta de artículos, llamada **CHOLLOPOP** que se ejecutará a nivel local en nuestro equipo apoyándonos en una serie de herramientas 

Se utilizará:

- JS: JavaScript vanilla, sin bibliotecas ni frameworks
- Live-Server: una extensión de Visual Studio Code que permite crear un servidor local en tiempo real y visualizar los cambios realizados en el código de manera automática.
- Sparrest/Json-server.
  - Sparrest nos permite tener un API REST en local y nos sirve unos endpoints, en función de un archivo JSON que creamos en nuestro proyecto. La base de datos de este API REST es un JSON a efectos prácticos.
  - Para ello, se basa en la utilidad open source Json-server.

El objetivo principal es adquirir un conocimiento básico de dichas herramientas, así como la elaboración de las funcionalidades más habituales de una aplicación de este tipo.
Concretamente, lo que debe poder realizarse con la API sería:

  - Hacer login/logout y signup
  - Obtener listado general de anuncios/artículos
  - Acceder a detalles de un artículo en concreto
  - Creación de un anuncio si estamos logeados
  - Borrar un artículo si estamos logeados y somo el dueño del anuncio

En todos los puntos del programa se gestionan adecuadamente  los **estados de interfaz**, ocupándonos de :

 - Éxito: visualización de los datos y/o notificación en color verde.
 - Error: visualización de la notificación en color rojo detallando el error
- Carga: visualización de un spinner en pantalla para indicar que se está accediendo a datos 
- Falta de datos: normalmente se deja vacío la parte de visualización 

Las **notificaciónes** se muestran durante 3 segundos antes de desaparecer, aunque también puede cerrarse haciendo click encima de ellas. Según el tipo y el momento de la notificación, puede redireccionarse el programa a una pantalla previa (visualización inicial de anuncios, por ejemplo) o puede dejarse la pantalla actual en caso de que se trate de un error que pueda ser subsanado por el usuario

> **Nota:** se ha dejado alguna notificación muy concreta mostrándose con alert (el cierre de sesión, por ejemplo)

El **diseño** se ha hecho por medio de css y dando a las páginas capacidades responsive, aunque no ha sido el objetivo prioritario el desarrollo del mismo.

  # <br><center>DOCUMENTACIÓN</center>

## Instalación y arranque

#### · Requisitos previos:
- Tener instalado en el equipo: 
  - JS con Live-server
  - Json-server
  - Sparrest
  - Se recomienda tener instalado también Nodemon
- Clonado del repositorio en nuestro equipo


#### · Instalación de dependencias:

Dentro del directorio:
```sh
mpn install
```
#### · Inicialización y arranque:

Inicialización de la BD:

 **la BD con los valores iniciales** se ubica en la aplicación de sparrest en el archivo db,json y tiene la siguiente estructura:

```json
{
  "items": [
    {
      "id": 1,
      "name": "libreta",
      "description": "libreta color rojo, casi sin usar",
      "sale": true,
      "price": 5.5,
      "userId": 1,
      "photo": "https://res.cloudinary.com/dyyhithd8/image/upload/v1710875622/libreta_mqkdhb.jpg"
    },
    {
      "id": ,
      "name": "bicicleta",
      "description": "bicicleta de paseo. Estado usado",
      "sale": true,
      "price": 150,
      "userId": 1,
      "photo": ""
    }
  ],
  "users": [
    {
      "username": "usuarioUNO@mail.com",
      "password": "$2b$10$CdmFUu.m/HCwCQdkDdb8Ne8zCXj092vGp95GvACFrD/H/bG4fRdiG",
      "id": 1
    },
    {
      "username": "usuarioDOS@mail.com",
      "password": "$2b$10$oT1GC3IxtBAGhwRPIPWgnu.D/Uuz/BPMIZgxUvP2XhMBBZvwTgMLu",
      "id": 2
    }
  ]
}
```
**Ejecución de sparrest:**

En la carpeta raíz de sparrest_js
```sh
npm start
```

**Ejecución de Chollopop:**

En la carpeta raíz de la aplicación
```sh
npx live- server
```  

##
## Uso y manejo

#### · Listado de anuncios:

url: http://127.0.0.1:8080/index.html

endpoint de acceso: GET 'http://localhost:8000/api/items'

#

#### · Detalle de anuncio:

url: http://127.0.0.1:8080/item-detail.html?id=1

endpoint de acceso: GET 'http://localhost:8000/api/items/:id'

# 

#### · Creación de anuncio:

Acceso desde el header de la página por medio de un botón "Create Ad"

url: http://127.0.0.1:8080/item-creation.html

endpoint de acceso: POST 'http://localhost:8000/api/items'

Requisitos: el usuario debe estar logeado

Campos: 
  - Nombre; text
  - Descripción, text
  - Precio, float
  - Compra/venta, boolean
  - Foto, url  <- opcional

# 

#### · Borrado de anuncio:

Botón accesible desde detalles de artículo   
url: http://127.0.0.1:8080/item-detail.html?id=1

endpoint de acceso: DELETE 'http://localhost:8000/api/items'  
(token JWT incluido en los headers)

Requisitos: el usuario debe estar logeado y ser dueño del anuncio

#

#### · Login/logout:

Botón **login** accesible desde el header de las páginas

endpoint: POST "http://127.0.0.1:8000/auth/login"

Una vez accedido, el botón de login se ve reemplazado por uno de **logout**, para cerrar la sesión

#

#### · Signup:

Botón **signup** accesible desde el header de las páginas

endpoint: POST "http://localhost:8000/auth/register"

Campos: 
  - Email como nombre de usuario
  - Contraseña de min 8 caracteres. Se pide 2 veces para evitar errpres

#

#
## Opciones de mejora

Algunas opciones para mejora o ampliación de cara a desarrollarlo en un futuro:

- Mejora del diseño y el css. Adición de bibliotecas.
- Mejora de las notificaciones, haciendo focus en ellas y que no pueda manipularse el resto de elementos hasta su cierre
- Simulación de la compra de un artículo
- Implementar los requisitos opcionales (no cubiertos por falta de tiempo):
  - Gestionar la paginación de anuncios en el listado
  - Implementar un buscador de anuncios.
  - Permitir editar un anuncio al propietario del mismo
  - Permitir el filtrado de anuncios usando tags. 
  - Unido al anterior, hacer que los tags sean dinámico
