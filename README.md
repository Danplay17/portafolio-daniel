# Portafolio personal — V1

Primera versión estática del portafolio personal. Está construida con HTML, CSS y JavaScript, lista para editar localmente y publicar en GitHub Pages o Netlify.

## Incluye
- Diseño responsive para escritorio, tablet y móvil.
- Secciones: presentación, sobre mí, habilidades, proyectos y contacto.
- Navegación móvil.
- Estilos y scripts separados.
- Accesibilidad básica, metadatos y respeto a `prefers-reduced-motion`.
- Sin backend ni dependencias de instalación.

## Antes de publicar
1. Revisa y personaliza el contenido de `index.html`.
2. Cambia el correo `tu.correo@example.com`.
3. Actualiza los enlaces de GitHub y LinkedIn.
4. Verifica que las descripciones de proyectos correspondan a trabajos reales.
5. Agrega tu CV en `assets/documents/` si deseas ofrecerlo para descarga.
6. Prueba la página en móvil y escritorio.

## Ejecutar localmente
Abre `index.html` directamente en el navegador o utiliza la extensión **Live Server** de Visual Studio Code.

## Publicar en GitHub
1. Crea un repositorio nuevo en GitHub, por ejemplo `mi-portafolio`.
2. Descomprime este proyecto y abre la carpeta en VS Code.
3. En la terminal ejecuta:

```bash
git init
git add .
git commit -m "Initial portfolio version"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/mi-portafolio.git
git push -u origin main
```

4. En GitHub abre **Settings → Pages**.
5. En **Build and deployment**, selecciona **Deploy from a branch**.
6. Elige `main` y `/ (root)`, guarda y espera el despliegue.
7. GitHub mostrará la URL pública del sitio.

## Publicar en Netlify
Puedes importar el repositorio desde Netlify. Como es un sitio estático:
- Build command: dejar vacío.
- Publish directory: `.`

Netlify desplegará automáticamente cada vez que actualices la rama conectada.

## Actualizaciones
Edita los archivos, prueba los cambios y súbelos a GitHub. El hosting conectado publicará la nueva versión automáticamente.

## Estructura
```text
mi-portafolio/
├── index.html
├── css/styles.css
├── js/script.js
├── assets/
│   ├── img/
│   └── documents/
└── README.md
```


## Versión 2 - Habilidades y contacto
- Filtros de 20 habilidades en 5 categorías (HTML/CSS/JavaScript puro).
- Barras y porcentajes ilustrativos; edítalos en `index.html` según tu nivel real.
- Contacto por correo y teléfono con botones para copiar.
- Acción rápida a WhatsApp: `https://wa.me/525617455065`.
- Compatible con GitHub Pages.
- Para desplegar: sube el contenido de esta carpeta a la raíz del repositorio, activa Settings > Pages > Deploy from a branch > main > /(root).


## Versión 4
Se agregaron las secciones **Servicios especializados** (8 tarjetas) y **Aprendizaje continuo**, con énfasis en análisis de datos. Son áreas de interés y aprendizaje, no certificaciones ni servicios profesionales acreditados.


## Tema visual (V5)

Paleta 9: Azul océano y gris perla. Se modificaron exclusivamente los colores en `css/styles.css`; se conservaron el HTML, JavaScript, estructura y funcionalidades de la versión 4.
