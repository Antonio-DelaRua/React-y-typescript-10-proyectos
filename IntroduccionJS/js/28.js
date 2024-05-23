// Selectores - Todas las interacciones que haces en el DOM o en el codigo html por medio de javascript requieren o inician con un selector. 


const heading = document.querySelector('.heading')
// console.log(heading)
// console.log(heading.tagName)
// console.log(heading.textContent)
// console.log(heading.classList)


const enlaces = document.querySelector('.navegacion a')
const enlaces2 = document.querySelectorAll('.navegacion a')
console.log(enlaces)
console.log(enlaces2)





/**
 * Conceptos Clave del DOM en JavaScript:
Nodo (Node): Cada punto en el árbol del DOM es un nodo. Hay varios tipos de nodos, incluyendo elementos, atributos y nodos de texto.

Elemento (Element): Representa un elemento HTML (p. ej., <div>, <p>, <a>).
Texto (Text): Representa el contenido textual dentro de un elemento.
Acceso al DOM:

Document: El objeto principal del DOM es document, que representa toda la página HTML. A través de document, se puede acceder y manipular cualquier parte de la página.
Métodos comunes: getElementById(), getElementsByClassName(), getElementsByTagName(), querySelector(), y querySelectorAll() permiten seleccionar y manipular elementos específicos del DOM.
Manipulación del DOM:

Creación de Elementos: document.createElement(tagName) permite crear nuevos elementos HTML.
Inserción de Elementos: Métodos como appendChild(), insertBefore(), replaceChild(), y removeChild() permiten insertar, reemplazar o eliminar nodos.
Modificación de Atributos: Métodos como setAttribute(), getAttribute(), y removeAttribute() permiten manipular los atributos de los elementos HTML.
Modificación de Contenido: Propiedades como innerHTML, textContent y innerText permiten cambiar el contenido de los elementos.
Eventos del DOM:

Asignación de Eventos: Se pueden asignar eventos a los elementos del DOM para que respondan a las interacciones del usuario. Ejemplo: element.addEventListener(event, function).
Eventos Comunes: click, mouseover, mouseout, keydown, load, entre otros.
 */ 