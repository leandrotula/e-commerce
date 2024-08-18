# Mi Aplicación de Compra de repuestos de auto

Esta es una aplicación de comercio electrónico creada usando React, Vite, y Redux para el manejo del estado global. La aplicación también está integrada con Firebase para autenticación y Firestore para el almacenamiento de datos.

## Tecnologías Utilizadas

- **React 18.3.1**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite 5.3.1**: Herramienta de construcción rápida para proyectos modernos de front-end.
- **Redux 9.1.2**: Librería para el manejo del estado global de la aplicación.
- **Firebase 10.13.0**: Plataforma para el backend como servicio, utilizada para autenticación y almacenamiento en la nube.
- **Firestore**: Base de datos en tiempo real de Firebase para almacenar y sincronizar datos.

## Instalación

Para empezar con la aplicación, sigue estos pasos:

1. **Clonar el repositorio:**

    ```bash
    git clone https://github.com/leandrotula/e-commerce.git
    cd repositorio
    ```

2. **Instalar dependencias:**

    ```bash
    npm install
    ```

3. **Configurar Firebase:**

   Crea un proyecto en [Firebase Console](https://console.firebase.google.com/) y agrega tu archivo `firebaseConfig.js` con tus credenciales de Firebase. No usar las credenciales de forma directa, usar dotenv y su .env file
4. **Ejecutar la aplicación:**

    ```bash
    npm run dev
    ```

   La aplicación estará en funcionamiento en `http://localhost:3000`.

## Estructura del Proyecto

La estructura básica del proyecto es la siguiente:

```plaintext
├── public/
├── src/
│   ├── components/
    ├── service/
│   ├── configuration/
│   │   │   └── firebaseConfiguration.js
│   ├── context/
│   │   └── ItemContext.js
        └── ItemProvider.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
├── .env (ignorado y no debe ser subido al repositorio)
└── README.md
```

## Funcionalidades

### Carrito de Compras

El estado del carrito de compras es manejado por `cartSlice.js`, que contiene los siguientes reducers:

- `addToCart`: Agrega un producto al carrito, incrementando la cantidad y ajustando el precio si la cantidad es 3 o más.
- `removeItem`: Remueve un item del carrito o disminuye su cantidad.
- `setCurrentItem`: Establece el producto actual.
- `updateOperationState`: Actualiza el estado de la operación (ej. 'loading', 'error').

### Detalle de compra

Los estados de cantidad de item y precios deben ser reflejados y mantenidos por usuario. Este estado se comparte a la pantalla 
purchase detail la cual va a ir variando a medida que se agregue o quite elemenos. Tambien, el icono en la parte superrior ira variando su cantidad reflejando lo mencionado.
### Base de Datos en Tiempo Real

Se utiliza Firestore para almacenar los datos de los productos y los detalles del carrito en tiempo real.

### Despliegue de la aplicacion

La aplicacion se encontrara desplegada, en lo posible de la ultima version del branch main en vercel

---