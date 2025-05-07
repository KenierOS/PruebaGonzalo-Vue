# Lista de Usuarios Vue.js

Aplicación web con Vue.js para listar y buscar usuarios desde una API externa.

## Comenzando 🚀

Requisitos: [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) 

Instalación:

1.  Clonar  / `cd `
2.  Instalar dependencias: `npm install` 
3.  Ejecutar: `npm run dev` (aplicación en `http://localhost:5173`)

## Funcionalidades ⚙️

* **Listado de Usuarios:** Muestra nombre, email y teléfono.
* **Búsqueda:** Filtro por nombre o email.
* **Detalles:** Modal para ver detalles (implementación en `UserModal.vue`).
* **Carga:** Indicador de carga durante la obtención de datos.
* **Error:** Mensaje si falla la carga de usuarios.

## Componentes Clave 🧩

* `App.vue`: Componente principal, instancia `UserList`.
* `components/User/UserList.vue`: Lista y filtra usuarios, maneja carga y errores, muestra modal.
* `components/User/UserModal.vue`: (No proporcionado en detalle) Muestra detalles de un usuario.
* `stores/UserStore.ts`: (Pinia) Gestiona estado de usuarios, carga, error, búsqueda, modal.

## Tecnologías 🛠️

* [Vue.js](https://vuejs.org/)
* [Pinia](https://pinia.vuejs.org/)
* [Axios](https://axios-http.com/)
* [TypeScript](https://www.typescriptlang.org/) (si aplica)
* [Bootstrap](https://getbootstrap.com/) (para estilos)

## Autor ✒️

[KENIER] - (https://github.com/KenierOS)
