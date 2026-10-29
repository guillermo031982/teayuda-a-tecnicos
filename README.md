# TeAyuda · Teneplagas

Guía de campo instalable para técnicos. Misma cara que TePresupuesto: cabecera blanca con línea roja, cards y barra inferior.

Cucaracha alemana lleva los 5 pasos validados y las fotos de `fotos/cucaracha-alemana/`. Americana, hormigas, roedores, dosis y fuera de horario salen de `protocolos-texto/` (esas tres plagas, todavía sin fotos).

## Abrir en local

Hace falta un servidor estático. Abrir `index.html` como archivo no instala la app ni registra el service worker.

```bash
python3 -m http.server 8080
```

Entra en http://localhost:8080

## Instalar en el móvil

La carpeta tiene que servirse por HTTPS, o en la red local del teléfono.

1. Android (Chrome): menú → **Añadir a pantalla de inicio** o **Instalar aplicación**.
2. iPhone (Safari): Compartir → **Añadir a pantalla de inicio**.

Se abre a pantalla completa, con el icono de Teneplagas.

## Fuente

`protocolos-texto/` sigue siendo el texto de los protocolos. Si se actualiza un `.txt`, hay que reflejarlo en `app.js`.
