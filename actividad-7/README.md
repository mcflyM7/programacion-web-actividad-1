# Estructuras de control en JavaScript

**Actividad 7 — Programación Web**

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

Conjunto de scripts en JavaScript que implementan las **estructuras de control**
(if, switch, for, while, do-while) en escenarios de PropTech, para Smart Listings
y Green Properties Index.

## Contenido

- `Tarea7_Programacion_Web.pdf` — Informe completo.
- `Tarea7_Programacion_Web.html` — Fuente del informe.
- `demo_estructuras.html` + `demo_script.js` + `demo_estilos.css` — Demostración funcional.
- `cap.png` — Captura de los scripts en ejecución.

## Documentación del uso de estructuras de control

### Script 1 — Validación de formulario
- **if / else if**: valida que los campos no estén vacíos, que el precio sea un
  número (`isNaN`) y que sea mayor a cero.
- **switch**: clasifica el tipo de propiedad (renta, venta, eco-friendly) con un
  caso `default` para valores no reconocidos.

### Script 2 — Lista eco-friendly dinámica
- **for**: recorre el arreglo de propiedades (`propiedades.length`) y crea un
  elemento `<li>` por cada una, generando la lista de forma automática.

### Script 3 — Integración con Firebase (simulada)
- **do-while**: simula reintentos de conexión; se ejecuta al menos una vez y se
  repite mientras no haya conexión y no se superen 3 intentos.
- **if / else** (dentro de `setTimeout`): decide el mensaje final según el resultado.

## Relación con PropertyStream Tech

La validación protege la calidad de los datos en **Smart Listings**; la generación
dinámica alimenta **Green Properties Index**; y la integración simulada con
**Firebase** representa el guardado en tiempo real.
