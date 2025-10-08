# Pinia: Manejo de Estado a nivel global

1. [Introducción a Pinia](#1-introducción-a-pinia)
2. Configuración de un almacén de datos
3. Funciones de Acceso a los datos del almacen

## 1. Introducción a Pinia

Si necesitamos manejar un contenido de estado entre varias vistas, componentes, o páginas de nuestro proyecto (como suele ser usual), necesitamos una forma de tener estructuras a las que todos estos componentes puedan acceder, pero que no sean exclusivas de ninguno de ellos.

La forma recomendada de hacerlo es mediante una librería llamada **[Pinia][l1]**.

Esta librería nos permite definir estructuras, comunmente llamadas **_almacenes_** o `stores`, para manejar datos que deben estar disponibles para todos los componentes de nuestro proyecto (consulta [este artículo de MDN][l2] para más información).

[_Volver al Inicio_](#1-introducción-a-pinia)

## 2. Configuración de un almacén de datos

En primer lugar, instalaremos las librerías de _Pinia_ en nuestro proyecto mediante el siguiente comando:

```sh
npm install pinia
```

[l1]: https://pinia.vuejs.org/
[l2]: https://developer.mozilla.org/es/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage
