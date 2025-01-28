Resumen de lo que has hecho:
my-timer-app: Creaste un temporizador que se actualiza cada segundo.
my-third-app: Refactorizaste los componentes y los separaste en archivos.
my-fourth-app: Renderizaste una tabla con datos hardcodeados.
my-fifth-app: Usaste props para pasar datos entre componentes.


Resumen
Crea el componente Welcome en el archivo Welcome.js que acepte una prop name.
Modifica el componente App para renderizar tres instancias del componente Welcome con diferentes valores para name.

1. Componentes y Props en React:
¿Qué son los componentes en React?
En React, los componentes son bloques de
 construcción fundamentales de una aplicación. 
 Un componente es simplemente una función
  (o clase) que devuelve un fragmento de UI
   (usualmente en formato JSX). 
   Los componentes permiten dividir 
   la interfaz en partes más pequeñas y 
   reutilizables.

¿Qué son las props?
Las props (abreviatura de "propiedades") son un 
mecanismo en React para pasar datos de un 
componente padre a un componente hijo. De este
 modo, un componente puede "recibir" información
  y usarla para renderizar contenido dinámico.


Estado (State) en React:
En React, el estado (o state) es un objeto que permite almacenar 
información sobre el componente que puede cambiar a lo largo del 
tiempo. Cuando el estado cambia, el componente se vuelve a 
renderizar automáticamente.  

Funciones y Eventos en React:
Los eventos en React funcionan de manera similar a los eventos
en JavaScript puro, pero con una sintaxis ligeramente diferente 
(por ejemplo, usando onClick en lugar de onclick). El estado de 
los componentes puede cambiar como resultado de la interacción
con el usuario.

https://es.legacy.reactjs.org/docs/components-and-props.html
https://legacy.reactjs.org/docs/components-and-props.html
https://es.legacy.reactjs.org/docs/faq-state.html
https://es.legacy.reactjs.org/docs/handling-events.html


npx create-react-app my-app
cd my-app
npm install
--aumentar watches: echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
check:
cat /proc/sys/fs/inotify/max_user_watches
se puede usarvesto antes de iniciar el proyecto:
sudo sysctl fs.inotify.max_user_watches=524288
npm install web-vitals

npm start

clase 3
# Definición de FancyBorder:

FancyBorder es un componente que recibe un argumento llamado props, el cual contiene propiedades pasadas al componente cuando se usa.
En este caso, props.color es una propiedad que se pasa a FancyBorder para definir el color dinámico del borde.
El componente devuelve un <div> con una clase CSS que combina el valor de props.color con una clase base FancyBorder. Esto crea una clase dinámica como FancyBorder FancyBorder-blue si el valor de props.color es "blue".
Propiedad props.children:

props.children es una propiedad especial en React que contiene cualquier contenido o componentes hijos que estén anidados dentro de FancyBorder.
Esto hace que FancyBorder sea un contenedor flexible, ya que puede envolver cualquier tipo de contenido (texto, componentes, etc.), y todo ese contenido se renderiza dentro de la etiqueta <div>.


El patrón de Composición de Componentes es muy
recomendable para reducir el número de renderizados en
nuestra aplicación. 

https://codepen.io/fgerschau/pen/QWaRgKg