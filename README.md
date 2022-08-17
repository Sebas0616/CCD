# CCD

## Los magos de código

Edwin Hernández Cabrera - Laurent David Chaverra Córdoba - Sebastián Solano Villada

### Configurar BD
En el servidor local importar el dump de la db que se encuentra en database.
Correr primero el script de database.sql y luego el de data.sql

En el archivo keys.ts poner las respectivas credenciales

### Ejecución
## Backend
En la carpeta server:
1. Remover el node_modules
2. Correr ```sh npm install ```
3. Modificar el keys.ts y agregar las credenciales de la DB
4. correr ```sh npm run dev ```

## Frontend
1. Ingresar desde terminar a la carpeta client
2. Correr ```sh npm install ```
3. Luego correr el comando ```sh ng serve ```
