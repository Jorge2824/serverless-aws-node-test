# Test Serverless Aws-Node-Typescript -> Jorge Luis Martinez

Este es un proyecto Serverless Framework que utiliza el template de `node-aws-typescript` para crear y desplegar servicios en AWS Lambda.

## Requisitos

- Node.js 14.x o superior
- Serverless Framework instalado (`npm install -g serverless`)

## Instalación

1. Clona este repositorio: `git clone <URL_DEL_REPOSITORIO>`
2. Ingresa al directorio del proyecto: `cd serverless-aws-node-test`
3. Instala las dependencias: `npm install`

## Configuración

Asegúrate de configurar tus credenciales de AWS para que Serverless Framework pueda desplegar tu aplicación.

## Postman

Abre Postman, dale click al MenuBar/File/Import y arrastra el archivo: `aws-node-typescript-test.postman_collection.json` al modal que aparece en la pantalla de la aplicación.

## Uso

### Ruta POST

- **Endpoint:** `/create-employee`
![](https://github.com/Jorge2824/serverless-aws-node-test/blob/main/.gifts/CreateEmployee.gif)
- **Descripción:** Crea un nuevo empleado en la base de datos.
- **Método:** POST
- **Cuerpo de la solicitud:**
  ```json
  {
    "first_name": "John",
    "last_name": "Doe",
    "age": 30,
    "job_position": "Developer",
    "active": true
  }
- **Respuesta exitosa:** Código de estado 200 OK y cuerpo JSON con el mensaje y los datos del empleado creado.

### Ruta GET (Employees)
- **Endpoint:** /get-employees
![](https://github.com/Jorge2824/serverless-aws-node-test/blob/main/.gifts/GetEmployees.gif)
- **Descripción:** Obtiene la lista de empleados.
- **Método:** GET
- **Respuesta exitosa:** Código de estado 200 OK y cuerpo JSON con la lista de empleados.

### Ruta GET (Integración SWAPI)
- **Endpoint:** /get-people-star-wars
![](https://github.com/Jorge2824/serverless-aws-node-test/blob/main/.gifts/GetPeopleStarWars.gif)
- **Descripción:** Obtiene la lista de personas de Star Wars de la Star Wars API.
- **Método:** GET
- **Respuesta exitosa:** Código de estado 200 OK y cuerpo JSON con la lista de personajes.
## Despliegue
Para desplegar tu aplicación en AWS Lambda, utiliza el comando:
  ```
  serverless deploy
  ```
## Despliegue
Para desplegar tu aplicación en AWS Lambda, utiliza el comando:
  ```
  serverless deploy
  ```