/* =========================================================
   Módulo de tratamiento de formularios del lado del servidor
   Proyecto: Smart Listings / RentStream - PropertyStream Tech
   - Sirve un formulario web
   - Recibe los datos (POST)
   - Valida campos obligatorios y formato de correo
   - Almacena en una "colección" (simulación de Firebase)
   Usa solo módulos nativos de Node.js (sin instalar nada).
   ========================================================= */

const http = require("http");
const fs = require("fs");
const path = require("path");

// Archivo que simula la colección de Firebase ("contactos")
const COLECCION = path.join(__dirname, "coleccion_firebase.json");

/* ---------- VALIDACIONES ---------- */
function validarDatos(datos) {
  const errores = [];

  // Campos obligatorios
  if (!datos.nombre || datos.nombre.trim() === "") {
    errores.push("El nombre es obligatorio.");
  }
  if (!datos.correo || datos.correo.trim() === "") {
    errores.push("El correo es obligatorio.");
  }
  if (!datos.mensaje || datos.mensaje.trim() === "") {
    errores.push("El mensaje es obligatorio.");
  }

  // Formato de correo válido (expresión regular)
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (datos.correo && !regexCorreo.test(datos.correo)) {
    errores.push("El formato del correo no es válido.");
  }

  return errores;
}

/* ---------- ALMACENAMIENTO (simulación de Firebase) ----------
   En producción, aquí se usaría el SDK de Firebase:
   db.collection("contactos").add(datos);
   Aquí guardamos en un archivo JSON con la misma estructura. */
function guardarEnColeccion(datos) {
  let coleccion = [];
  if (fs.existsSync(COLECCION)) {
    coleccion = JSON.parse(fs.readFileSync(COLECCION, "utf8"));
  }
  const documento = {
    id: Date.now(),              // identificador único (como el doc.id de Firebase)
    nombre: datos.nombre.trim(),
    correo: datos.correo.trim(),
    mensaje: datos.mensaje.trim(),
    creado: new Date().toISOString()
  };
  coleccion.push(documento);
  fs.writeFileSync(COLECCION, JSON.stringify(coleccion, null, 2), "utf8");
  return documento;
}

/* ---------- FORMULARIO HTML ---------- */
function paginaFormulario(mensaje) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Formulario de contacto - PropertyStream</title>
  <link rel="stylesheet" href="/estilos.css">
</head>
<body>
  <div class="caja">
    <h1>Contacto - PropertyStream Tech</h1>
    <form method="POST" action="/enviar">
      <label>Nombre:<input type="text" name="nombre"></label>
      <label>Correo:<input type="text" name="correo"></label>
      <label>Mensaje:<textarea name="mensaje" rows="3"></textarea></label>
      <button type="submit">Enviar</button>
    </form>
    <div class="mensaje">${mensaje || ""}</div>
  </div>
</body>
</html>`;
}

/* ---------- SERVIDOR ---------- */
const servidor = http.createServer((req, res) => {
  // Servir la hoja de estilos
  if (req.url === "/estilos.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(fs.readFileSync(path.join(__dirname, "estilos.css"), "utf8"));
    return;
  }

  // Mostrar el formulario
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(paginaFormulario(""));
    return;
  }

  // Procesar el envío del formulario
  if (req.method === "POST" && req.url === "/enviar") {
    let cuerpo = "";
    req.on("data", chunk => { cuerpo += chunk; });
    req.on("end", () => {
      // Parsear los datos del formulario (formato url-encoded)
      const datos = {};
      cuerpo.split("&").forEach(par => {
        const [clave, valor] = par.split("=");
        datos[clave] = decodeURIComponent((valor || "").replace(/\+/g, " "));
      });

      // Validar
      const errores = validarDatos(datos);
      let mensaje;
      if (errores.length > 0) {
        mensaje = `<p class="error">Errores:<br>${errores.join("<br>")}</p>`;
      } else {
        const doc = guardarEnColeccion(datos);
        mensaje = `<p class="ok">Datos guardados en la coleccion "contactos" ` +
                  `(ID: ${doc.id}).</p>`;
      }
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(paginaFormulario(mensaje));
    });
    return;
  }

  res.writeHead(404);
  res.end("No encontrado");
});

const PUERTO = 3000;
servidor.listen(PUERTO, () => {
  console.log(`Servidor de formularios en http://localhost:${PUERTO}`);
});
