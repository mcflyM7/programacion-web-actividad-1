/* =========================================================
   Estructuras de control en JavaScript
   Proyecto: Smart Listings / Green Properties Index
   PropertyStream Tech
   ========================================================= */

/* =========================================================
   SCRIPT 1: VALIDACIÓN DE FORMULARIO
   Estructuras usadas: if / else if / else  y  switch
   ========================================================= */
function validarFormulario(evento) {
  evento.preventDefault(); // evita que la página se recargue

  // Leemos los valores del formulario
  const precioTexto = document.getElementById("precio").value;
  const ubicacion = document.getElementById("ubicacion").value;
  const tipo = document.getElementById("tipo").value;
  const salida = document.getElementById("resultadoForm");

  const precio = Number(precioTexto); // convertimos texto a número

  // ---- Validación con if / else if / else ----
  if (precioTexto === "" || ubicacion === "" || tipo === "") {
    salida.textContent = "Error: todos los campos son obligatorios.";
    return false;
  } else if (isNaN(precio)) {
    salida.textContent = "Error: el precio debe ser un número.";
    return false;
  } else if (precio <= 0) {
    salida.textContent = "Error: el precio debe ser mayor a cero.";
    return false;
  }

  // ---- Clasificación con switch según el tipo ----
  let descripcion;
  switch (tipo) {
    case "renta":
      descripcion = "propiedad en renta";
      break;
    case "venta":
      descripcion = "propiedad en venta";
      break;
    case "eco":
      descripcion = "propiedad eco-friendly";
      break;
    default:
      descripcion = "tipo no reconocido";
  }

  salida.textContent =
    `Publicado correctamente: ${descripcion} en ${ubicacion} por $${precio}.`;
  return false;
}

/* =========================================================
   SCRIPT 2: LISTA ECO-FRIENDLY DINÁMICA
   Estructuras usadas: for (y ejemplo de while)
   ========================================================= */
function generarEcoFriendly() {
  // Datos que simulan propiedades eco-friendly
  const propiedades = [
    { nombre: "Casa Solar Norte", ahorro: 40 },
    { nombre: "Depto Verde Centro", ahorro: 30 },
    { nombre: "Loft Sustentable", ahorro: 25 },
    { nombre: "Residencia EcoSur", ahorro: 55 }
  ];

  const lista = document.getElementById("listaEco");
  lista.innerHTML = ""; // limpiamos la lista

  // ---- Iteración con for ----
  for (let i = 0; i < propiedades.length; i++) {
    const p = propiedades[i];
    const item = document.createElement("li");
    item.textContent = `${p.nombre} - ahorro energético ${p.ahorro}%`;
    lista.appendChild(item);
  }

  /* Ejemplo equivalente con while (comentado):
     let j = 0;
     while (j < propiedades.length) {
       console.log(propiedades[j].nombre);
       j++;
     }
  */
}

/* =========================================================
   SCRIPT 3: SIMULACIÓN DE INTERACCIÓN CON FIREBASE
   Estructura usada: do-while (reintentos) + asincronía
   ========================================================= */
function guardarEnFirebase() {
  const salida = document.getElementById("resultadoFb");
  salida.textContent = "Conectando con Firebase...";

  // ---- do-while: simula reintentos de conexión ----
  let intentos = 0;
  let conectado = false;
  do {
    intentos++;
    // Simulamos que al segundo intento se conecta
    if (intentos >= 2) {
      conectado = true;
    }
  } while (!conectado && intentos < 3);

  // setTimeout simula la latencia de la red
  setTimeout(function () {
    if (conectado) {
      salida.textContent =
        `Guardado en Firebase tras ${intentos} intento(s). ` +
        `Colección "propiedades" actualizada.`;
    } else {
      salida.textContent = "No se pudo conectar con Firebase.";
    }
  }, 1000);
}
