# El modelo de caja en CSS

**Actividad 5 — Programación Web**

| Dato | Detalle |
|------|---------|
| Institución | Tecnológico de Estudios Superiores de Ecatepec |
| Carrera | División de Ingeniería en Sistemas Computacionales |
| Materia | Programación Web |
| Alumno | Marcos Joaquín García Villanueva |
| Profesor | Alejandra González Sánchez |
| Grupo | 5501 |

---

## Descripción de la actividad

Análisis del **modelo de caja (box model)** de CSS y sus componentes —contenido,
relleno (padding), borde (border) y margen (margin)—, con ejemplos prácticos en
HTML y CSS que demuestran su aplicación en el diseño de interfaces. El estudio se
contextualiza en el proyecto **Smart Listings** de PropertyStream Tech, donde el
espaciado y la estructura visual impactan directamente en la experiencia del usuario.

## Contenido

- `Tarea5_Programacion_Web.pdf` — Informe completo del análisis.
- `Tarea5_Programacion_Web.html` — Versión fuente del informe.
- `ejemplo_modelo_caja.html` + `estilos_caja.css` — Ejemplos prácticos funcionales
  (diagrama de las cuatro áreas, tarjetas de propiedad y comparación de box-sizing).
- `cap.png` — Captura de los ejemplos en ejecución.
- `Logo_tese.jpg` — Logotipo institucional.

## Resumen del análisis

El modelo de caja describe cómo CSS dimensiona cada elemento mediante cuatro áreas
concéntricas:

1. **Contenido (content):** el texto o la imagen; se controla con `width` y `height`.
2. **Relleno (padding):** espacio interno entre el contenido y el borde.
3. **Borde (border):** línea que rodea el relleno; aporta estructura visual.
4. **Margen (margin):** espacio externo que separa la caja de sus vecinos.

La propiedad `box-sizing: border-box` hace que el ancho declarado incluya el relleno
y el borde, lo que simplifica la maquetación y evita desbordamientos.

## Relación con PropertyStream Tech

Un uso cuidadoso del modelo de caja optimiza la interfaz de Smart Listings
(tarjetas de propiedad ordenadas y legibles). La capa de presentación (CSS) se
combina con los datos dinámicos de **Firebase** y se versiona en **GitHub**.
