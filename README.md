# BluePanel – sitio público

Landing y política de privacidad de la app BluePanel, para publicar con GitHub Pages.

| Archivo | Contenido |
|---|---|
| `index.html` | Landing con las características de la app |
| `privacy.html` | Política de privacidad (la URL que pide Google Play) |
| `styles.css` | Estilos compartidos, con modo claro y oscuro |
| `lang.js` | Cambio entre español e inglés |
| `img/` | Capturas de la app |

Es HTML estático sin dependencias ni recursos externos: no carga fuentes, scripts ni rastreadores de terceros.

## Idiomas

Cada texto está dos veces, marcado con `data-lang="en"` y `data-lang="es"`. Se elige por `?lang=es` o `?lang=en` en la URL, después por el botón (se recuerda) y por último por el idioma del navegador. Sin JavaScript se muestra en inglés.

## Publicar

1. Subir estos archivos a la rama `main` de `franbenaglia/universalESP32BlePages`.
2. En GitHub: Settings → Pages → Source: «Deploy from a branch», rama `main`, carpeta `/ (root)`.
3. El sitio queda en `https://franbenaglia.github.io/universalESP32BlePages/` y la política en `https://franbenaglia.github.io/universalESP32BlePages/privacy.html`.

## Qué revisar antes de publicar la app

- La política nombra el paquete `com.bluepanel.app` y al desarrollador como `franbenaglia`; actualizar si cambian.
- El contacto es la página de issues de este repositorio; se puede sumar un correo.
- El botón «Próximamente en Google Play» no tiene enlace; reemplazarlo por el enlace a la ficha cuando exista.
- La landing enlaza a `github.com/franbenaglia/universalESP32Ble` por el firmware de demostración; quitar el enlace si ese repositorio es privado.
- Si la app cambia qué datos guarda o agrega red, anuncios o analíticas, hay que actualizar `privacy.html` y su fecha.

Para verla en local: `python3 -m http.server` dentro de esta carpeta.
