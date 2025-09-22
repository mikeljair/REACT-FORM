# REACT-FORM

Este proyecto es una práctica para aprender los fundamentos de React, aplicar estilos con Bootstrap y realizar validaciones dinámicas en formularios. A continuación se describe la estructura de las sesiones y cómo instalar el proyecto.

## Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/mikeljair/REACT-FORM.git
   cd REACT-FORM
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Instala Bootstrap:**
   ```bash
   npm install bootstrap
   ```

4. **Importa los estilos de Bootstrap en `src/index.js`:**
   ```javascript
   import 'bootstrap/dist/css/bootstrap.min.css';
   ```

## Estructura de las sesiones

### Sesión 1 (1h) – Introducción a React

- Crear el proyecto con `npx create-react-app formulario-react`.
- Estructurar componentes básicos en `App.js`.
- Crear un formulario con inputs para **Nombre**, **Correo** y **Contraseña**.

### Sesión 2 (1h) – Estilos con framework CSS

- Instalar e importar Bootstrap.
- Aplicar clases de Bootstrap (`form-control`, `btn`, `container`) a los componentes del formulario.
- Hacer que el formulario sea responsivo usando el sistema de grid de Bootstrap.

### Sesión 3 (1h) – Validaciones dinámicas en React

- Utilizar `useState` para controlar los valores de los inputs.
- Validar en tiempo real:
  - El correo debe tener un formato válido.
  - La contraseña debe tener al menos 8 caracteres.
- Mostrar mensajes de error dinámicos debajo de cada campo cuando la validación falle.

## Ejecución

Para iniciar el proyecto en modo desarrollo:

```bash
npm start
```

Esto abrirá la aplicación en `http://localhost:3000`.

---

¡Listo! Ya puedes comenzar con la práctica y aprender los conceptos esenciales de React, Bootstrap y validaciones dinámicas.
