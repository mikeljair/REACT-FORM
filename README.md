# REACT-FORM

Este proyecto es una aplicación simple en React que implementa un formulario con validaciones en tiempo real, utilizando Bootstrap para los estilos y la responsividad.

## Tabla de contenidos

- [Introducción](#introducción)
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Autor](#autor)

---

## Introducción

Este proyecto fue desarrollado como práctica para aprender los fundamentos de React, la integración de Bootstrap para estilos y la implementación de validaciones dinámicas en formularios.

Las principales funcionalidades incluyen:

- Formulario con inputs de Nombre, Correo y Contraseña.
- Validaciones dinámicas usando React hooks.
- Estilos y responsividad usando Bootstrap.

---

## Características

- **Formulario React:** Inputs de nombre, correo y contraseña.
- **Validaciones en tiempo real:** 
  - Correo con formato válido.
  - Contraseña con mínimo 8 caracteres.
  - Mensajes de error dinámicos bajo cada campo.
- **Estilos con Bootstrap:** Formulario responsivo y estilizado usando clases como `form-control`, `btn`, y `container`.

---

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

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

4. **Importa Bootstrap en el proyecto:**

    En el archivo `src/index.js`, agrega la siguiente línea al inicio:

    ```javascript
    import 'bootstrap/dist/css/bootstrap.min.css';
    ```

5. **Ejecuta la aplicación:**

    ```bash
    npm start
    ```

La aplicación se ejecutará en [http://localhost:3000](http://localhost:3000).

---

## Uso

Al abrir la aplicación, verás un formulario con los siguientes campos:

- Nombre
- Correo
- Contraseña

Completa los campos y observa las validaciones en tiempo real:

- El campo de correo debe tener un formato válido.
- La contraseña debe tener al menos 8 caracteres.
- Los mensajes de error se muestran dinámicamente bajo cada campo si el valor no es válido.

---

## Estructura del proyecto

```text
REACT-FORM/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── App.js         # Componente principal y formulario
│   ├── index.js       # Punto de entrada, importa Bootstrap
│   └── ...            # Otros componentes y archivos
├── package.json
└── README.md
```

---

## Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)

---

## Autor

- **mikeljair**  
  [GitHub](https://github.com/mikeljair)

---

## Licencia

Este proyecto es solo para fines educativos.
