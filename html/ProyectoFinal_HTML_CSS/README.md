
# Proyecto Final Modulo HTML y CSS
### Alumno: Rena Abbasova
### Tematica: Sitio Web de Representación de Actores

## Descripción

La idea de crear esta página web surgió a partir de una necesidad que me comentó una amiga, quien tiene un negocio de representación de actores para castings. Ella quería un sitio web donde pudiera acceder fácilmente a los perfiles de los actores y centralizar toda la información de cada uno, como sus currículums, videobooks, descripciones de perfil, redes sociales, fotos y otros documentos relevantes.

La **página principal** incluye un header con un menú de navegación que permite acceder a otras secciones del sitio:

- **Home**: Siempre regresa a la página principal.
- **About Us**: Descripción de los servicios y el enfoque de la agencia.
- **Actors**: Una sección visualmente atractiva con imágenes de los actores representados.
- **Contact**: Un formulario para consultas sobre castings o solicitudes de representación.
- **Casting**: Aquí se pueden ver los perfiles de los actores. La idea es que cada perfil tenga un botón que permita ver más detalles. Aunque el diseño del botón ya está implementado, aún no he enlazado la funcionalidad para acceder al perfil completo de cada actor.
- **Log In**: Opción para iniciar sesión y navegar por la página con un perfil personal.
- **WhatsApp Button**: También implementé un botón de WhatsApp para poder usar el chat de manera más directa.

En la parte izquierda del header se encuentra el logo de la empresa, que se llama **Vanessa**.

## Estructura del Proyecto

Para desarrollar este proyecto, creé una carpeta de **CSS**  que contiene 3 archivos de css 
- style.css
- login.css
- actors.css

Otra carpeta de **Imágenes**,
- images

Una de **JS**
- main.js

Y 7 páginas HTML 
- index.html (página principal)
- about.html
- actores.html
- casting.html
- contact.html
- forgot-password.html
- login.html

Cada botón en la navegación lleva a estas páginas HTML correspondientes.

## Tecnologías Utilizadas

- **HTML y CSS**: Para la estructura básica y el diseño de la página, incluyendo estilos personalizados y animaciones.
- **JavaScript**: Utilicé JavaScript para implementar el botón que permite cambiar entre el modo oscuro y el modo claro en la página principal.
- **CSS Variables**: Centralicé los colores y estilos globales usando `:root`, lo que me facilita realizar cambios de estilo en el futuro.
- **Google Fonts**: Utilicé la fuente **Roboto** para la tipografía de todo el sitio, lo que le da un aspecto moderno y profesional.

## Problemas Encontrados

Algunos de los desafíos que encontré fueron:

- **Implementación de la galería de fotos**: La estructura de la galería requirió algunos ajustes, especialmente con el uso de grid y flexbox, para que las imágenes se adaptaran bien a distintos tamaños de dispositivos.
- **Light Mode y Dark Mode**: Configurar los colores para que cambiaran automáticamente entre el modo oscuro y el modo claro fue algo complicado, especialmente al ajustar los iconos y el texto para garantizar que fueran siempre visibles y legibles. 

## Recursos Utilizados

- **Documentación de MDN Web Docs**: Para resolver dudas sobre el uso de grid, flexbox y CSS variables.
  - [Grid Layout: MDN Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
  - [Flexbox: MDN Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
  - [CSS Variables: MDN CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- **ChatGPT y tutoriales de YouTube**: Para implementar el modo oscuro y el modo claro en el sitio.
  - [Tutorial YouTube - Dark Mode / Light Mode](https://www.youtube.com/watch?v=_gKEUYarehE)
- **Tutoriales de YouTube**: Consulté varios videos específicos sobre la creación de galerías en CSS y la implementación de botones con hover y animaciones.







# PÁGINA  ABOUT US

En la página **About Us**, he mantenido el estilo general de la página principal para asegurar una experiencia visual consistente en el sitio. Sin embargo, he realizado algunos ajustes específicos para esta sección:

- Botón de Modo Oscuro y Claro: Eliminé el botón de cambio entre modo oscuro y claro en esta página para simplificar el diseño y centrar la atención en el contenido.
- Galería de Fotos: Ajusté la galería dejando solo una foto, ubicada en el lado derecho de la pantalla para crear un equilibrio visual. Además, la imagen tiene un efecto de movimiento, lo que aporta un toque dinámico y profesional, haciendo la sección más atractiva.

Uso compartido del archivo **style.css** asegura que cualquier cambio estilístico en el diseño global se refleje en ambas páginas de manera eficiente y uniforme.

## Recursos Utilizados
https://www.geeksforgeeks.org/design-an-about-us-page-using-html-and-css/








# PÁGINA  ACTORS

La página Actores utiliza el archivo de estilos compartido **actors.css**, que también personaliza la página **Casting** (casting.html). Este archivo define el estilo visual y la estructura de ambas páginas.

En esta página, he integrado la navegación desde la página principal. Para mostrar las imágenes de forma ordenada, he creado un contenedor que agrupa las imágenes en una caja. Dentro de la caja, hay tres secciones de imágenes, cada una con la clase dream, que permite organizar las imágenes en bloques.

Además, he implementado un botón que permite al usuario ver más **imágenes**, mejorando la experiencia de navegación en la galería.
Para que el botón funcione, he implementado el código **JavaScript** que está en el archivo **main.js.**

Para mantener el archivo **CSS** más limpio y evitar que se haga demasiado grande, esta página no comparte el mismo archivo **style.css** con la página principal. En su lugar, he creado un archivo **CSS** independiente llamado **actor.css** que contiene los estilos específicos para esta página de la galería.

Para hacer la pagina responsive **.container y .box** son flexibles y pueden ajustar facilmente segun el tamaño de la pantalla. Para las secciones de  **imágenes**(con la clase .dream), los anchos estan definidos como porcentajes **(width: 32.5%)**. Esto asegura que el diseño pueda reducirse o expandirse a medida que cambia el tamaño de la pantalla. El **encabezado**está posicionado de manera absoluta en la parte superior, aplicando F**lexbox** para la navegación. Esto permite un encabezado flexible con espacio entre los elementos y redimensionado dinámico.
La navegación **(.nav)** tiene un espacio entre los elementos mediante **gap: 40px**, y los enlaces de navegación se ajustarán dinámicamente según el tamaño del contenedor.

## Recursos Utilizados
https://www.w3schools.com/css/css_image_gallery.asp 
https://www.geeksforgeeks.org/css-image-gallery/








# PÁGINA CASTING

Esta página está diseñada para mostrar perfiles de actores en formato de tarjetas interactivas y visualmente atractivas.

Estructura Sencilla: La estructura **HTML** está diseñada para ser minimalista y eficiente. Incluye un contenedor principal **.container** que centra la tarjeta en el viewport.

- Configuración del Contenedor (.container):
Dimensiones Responsivas: **.container** ocupa el 100% del ancho y alto de la pantalla usando **100vw y 100vh**.
Centrado: **Se usa display: flex, align-items: center, y justify-content: center para centrar la tarjeta en la ventana de visualización, garantizando una disposición armoniosa.**

## Diseño de la Tarjeta (.card):
La tarjeta ocupa el espacio completo del contenedor con width: 100% y height: 100%.
- Elementos de Perfil:
Barra de Progreso (**.bar, .emptybar, .fillebar**): Se anima cuando el usuario coloca el cursor sobre la tarjeta, aumentando el ancho de **.fillebar.**
- Detalles del Perfil (.profile-detail):
Imagen de Perfil: Tiene un borde circular **(border-radius: 50%)**, simulando el estilo de una foto de perfil profesional.
- Texto del Perfil: El nombre, título y descripción están alineados al centro con márgenes específicos para una apariencia limpia y ordenada.
- Botón de Contacto: Redondeado y con un fondo oscuro para atraer la atención y ser fácilmente clickeable.

## Tecnologías y Recursos Utilizados
HTML5: Estructura semántica de la página.
CSS3: Diseño avanzado de estilos y gradientes, incluyendo propiedades modernas como flex, transition, y box-shadow.
Google Fonts: Fuente **Poppins** para una tipografía estilizada y profesional.
Gradientes CSS: El efecto radial-gradient da un fondo atractivo y visualmente impactante a la tarjeta.

## Problemas Encontrados y Soluciones:
Tuve problemas para centrar el contenido. Al usar **position: absolute** en el contenedor **.container**, la tarjeta no se centraba correctamente en todas las pantallas. La solución fue cambiar a **display: flex** en el contenedor, logrando un centrado preciso.

También, la imagen y el texto se desbordaban debido a dimensiones fijas. Ajusté el **width** de la imagen y modifiqué el **padding** de la tarjeta para mantener todos los elementos dentro de los límites.

## Recursos Utilizados
https://medium.com/@castonboyd/building-a-profile-card-with-html-and-css-grid-5b1af4c3f59d








# PÁGINA LOGIN

Esta página utiliza **login.css** para la personalización de estilos.
Encabezado (<header>): Contiene navegación básica con enlaces a secciones como Inicio, Sobre Nosotros, Actores, etc.    
Formulario de Login (<form>): Incluye campos de entrada para usuario y contraseña, un botón de envío, una opción de "Recordar me", y un enlace para restablecer la contraseña.    
El formulario incluye un enlace para **"forgot password"** que lleva a la página **forgot-password.html** para restablecer la contraseña en caso de ser necesario.

## Recursos utilizados

- **HTML5 & CSS3**: Con flexbox, variables CSS y sombras.
- **Boxicons**: Para iconos de usuario y contraseña.
- **Google Fonts**: Tipografía principal (Roboto). 
Los recursos fueron aplicados basándose en lo aprendido en clase, con apoyo de tutoriales y ChatGPT.








# PÁGINA FORGOT-PASSWORD

## [Página de Recuperar Contraseña] 
La página de "Recuperar Contraseña" permite a los usuarios restablecer su contraseña en caso de olvido. Esta página sigue el mismo diseño y estilo de la página de **Login**, con algunos campos adicionales para verificación de seguridad.

Formulario de Restablecimiento:
- Campos de Seguridad Adicionales: Incluye campos para que el usuario ingrese su teléfono, correo electrónico, y fecha de nacimiento
Estos datos permiten  verificar la identidad del usuario de manera más segura.

- Botón de Acción: Incluye un botón de restablecimiento de contraseña **("Send email")**. Este botón no envía datos, sino que, por el momento, simula un restablecimiento y redirige al usuario de regreso a la página de login. Para rediriguir a la pagina anterior, he implementado el código JavaScript que está en el archivo **main.js.**








# PÁGINA CONTACT

## Descripción del Proyecto
Este proyecto es una página de contacto desarrollada con HTML, CSS personalizado y Bootstrap 4. Su objetivo es permitir que los usuarios envíen un mensaje a través de un formulario de contacto que recolecta su nombre, número de teléfono, correo electrónico y mensaje. Además, se incluye un mapa de Google embebido para mostrar la ubicación de la empresa.

Componentes:

- **HTML**: Estructura del formulario de contacto y mapa.
- **CSS Personalizado (login.css)**: Estilos personalizados y efectos visuales.
- **Bootstrap 4**: Diseño responsivo con rejillas para una estructura adaptable.

Problemas y Soluciones:

- Diseño Responsivo: Ajustado con rejillas de Bootstrap y consultas de medios para alineación correcta en dispositivos móviles.
- Fondos Diferentes para Cada Página: Usando clases específicas (.contact-page) para aplicar imágenes de fondo sin duplicar código.
- Mapa de Google: Ajustado en un container de Bootstrap para adaptarse bien a pantallas pequeñas.

Recursos:

- Bootstrap 4 para diseño responsivo.
- Google Maps Embed API para la ubicación interactiva.
- https://boxicons.com/usage


## Todas las páginas son responsivas, excepto las páginas index.html y about.html.