# Proyecto de APIs y Frontend con Docker Compose

Este proyecto contiene múltiples servicios, incluyendo varias APIs y un frontend, que se ejecutan en contenedores Docker. La configuración está diseñada para facilitar el despliegue y la gestión de todos los servicios usando Docker Compose.

## Requisitos

- Docker
- Docker Compose

## Preparación del Entorno

Antes de levantar la aplicación, asegúrate de tener los siguientes archivos ubicados en las carpetas correctas:
***Nota: No queremos subir estos archivos en el repo en caso de ser necesario contactarse con el equipo***

1. **INFORMACION CLIENTES MAYORES .xlsx** debe ubicarse en la carpeta `./Datos_DB/`.
2. **lectura.zip** debe ubicarse en la carpeta `./APIs/readings/data/`.

Estos archivos contienen información sensible y no deben incluirse en el repositorio. Por favor, pide estos archivos al grupo responsable.

## Configuración

Asegúrate de tener un archivo `.env` en la raíz del proyecto con las siguientes variables configuradas:

```env
DATABASE_URL=postgresql://root:root@pg_container:5432/test_db?schema=public
PORT_USERS=5001
PORT_READINGS=5002
PORT_INSTRUMENTATIONS=5003
PORT_ENERGY=5004
PORT_ALARMS=5005
REDIS_URL=redis://redis_container:6379
```

## Levantar la Aplicación

Para levantar todos los servicios, ejecuta el siguiente comando en la raíz del proyecto donde se encuentra el archivo docker-compose.yml:
```
docker-compose up --build
```

Este comando construirá y levantará todos los contenedores definidos en el archivo docker-compose.yml.

## Acceso a los Servicios

Una vez que los contenedores estén en funcionamiento, puedes acceder a los diferentes servicios a través de los siguientes puertos:

    - API Users: http://localhost:5001
    - API Readings: http://localhost:5002
    - API Instrumentations: http://localhost:5003
    - API Energy: http://localhost:5004
    - API Alarms: http://localhost:5005
    - Frontend: http://localhost:3000
    - pgAdmin: http://localhost:5050

## Notas importantes
El sistema es demorado en el levantamiento. Ademas el servicio que levata toda la informacion y las larteas puede tardarse algunas horas. En ese caso saldran errores en el aplicativo que no puede mostrar las alertas
