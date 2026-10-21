# Tratamiento de formularios del lado del servidor

**Actividad 9 — Programación Web**

| Dato | Detalle |
|------|---------|
| Institución | Tecnológico de Estudios Superiores de Ecatepec |
| Carrera | División de Ingeniería en Sistemas Computacionales |
| Materia | Programación Web |
| Alumno | Marcos Joaquín García Villanueva |
| Profesor | Alejandra González Sánchez |
| Grupo | 5501 |

---

## Descripción

Módulo funcional en Node.js que recibe los datos de un formulario web, los valida
(campos obligatorios y formato de correo) y los almacena de forma estructurada en
una colección, simulando Firebase. Aplicable a Smart Listings y RentStream.

## Contenido

- `Tarea9_Programacion_Web.pdf` — Documento técnico.
- `Tarea9_Programacion_Web.html` — Fuente del informe.
- `servidor.js` — Servidor Node.js funcional (formulario + validación + almacenamiento).
- `estilos.css` — Estilos del formulario.
- `cap.png` — Captura del módulo en ejecución.

## Cómo ejecutar

```
node servidor.js
```
Luego abrir `http://localhost:3000` en el navegador.

## Validaciones implementadas

1. **Campos obligatorios:** nombre, correo y mensaje no pueden estar vacíos (se usa `trim()`).
2. **Formato de correo:** expresión regular `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` que exige
   la forma `texto@dominio.extension`.
3. Si hay errores, **no se guarda nada** y se muestran al usuario. Si todo es válido,
   se almacena un documento con `id`, campos y fecha de creación.

## Conexión con Firebase

El almacenamiento se simula con un archivo JSON (`coleccion_firebase.json`) que
conserva la misma estructura que un documento de Firestore. En producción se
reemplazaría por:

```js
await db.collection("contactos").add({ nombre, correo, mensaje, creado });
```
