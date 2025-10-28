# 🎯 **ACTIVIDAD PRÁCTICA: "Selector de Temas"**

## **📋 Consigna**
Crea un selector de temas interactivo que permita cambiar el nombre y el tema visual de una tarjeta de perfil. El usuario podrá personalizar su perfil usando un input de texto y botones de tema. Entre los documentos se encuentran el html y el css necesarios. Solo debes leer el codigo e implementar en el archivo js lo necesario.

## **🎯 Objetivos de Aprendizaje**

### **1. Manipulación de Contenido (Nivel Básico)**
- Cambiar el texto de un elemento usando `textContent`
- Conectar un input con un elemento del DOM
- Manejar eventos de `input` en tiempo real

### **2. Gestión de Clases CSS (Nivel Básico)**
- Agregar y remover clases CSS usando `classList`
- Cambiar el aspecto visual de elementos dinámicamente

### **3. Eventos del DOM (Nivel Básico)**
- Conectar eventos de click a botones
- Conectar eventos de input a campos de texto
- Manejar múltiples elementos con `querySelectorAll()`

## **📝 Tareas Específicas**

### **Tarea 1: Configuración Básica**
1. Obtener todos los elementos del DOM usando `getElementById()`
2. Configurar el evento `DOMContentLoaded` para asegurar que el DOM esté listo
3. Crear variables para los elementos principales

### **Tarea 2: Input de Nombre**
1. Conectar el input `#nombreInput` con el elemento `#nombre`
2. Usar `addEventListener('input', callback)` para detectar cambios
3. Actualizar el texto usando `textContent`
4. Manejar el caso cuando el input esté vacío

### **Tarea 3: Botones de Tema**
1. Usar `querySelectorAll('.tema-btn')` para obtener todos los botones
2. Conectar eventos de click a cada botón
3. Usar `getAttribute('data-tema')` para obtener el tema del botón. 
Ejemplo -> const temaClaroBtn = document.querySelector('[data-tema="claro"]');
4. Implementar cambio de clases: `classList.remove()` y `classList.add()`

### **Tarea 4: Botón Resetear**
1. Conectar el botón `#reset` con un evento de click
2. Limpiar el input de nombre
3. Resetear el texto del nombre a "Tu Nombre"
4. Remover todas las clases de tema de la tarjeta

### **Tarea 5: Funcionalidad Extra (Opcional)**
1. Agregar clase `activo` al botón de tema seleccionado
2. Remover clase `activo` de otros botones
3. Agregar mensajes de consola para debugging

## **💡 Pistas para el JavaScript**

### **Estructura básica:**
```javascript
document.addEventListener('DOMContentLoaded', function() {
    // 1. Obtener elementos del DOM
    // 2. Crear funciones para cada tarea
    // 3. Conectar eventos a los elementos
});
```

### **Conceptos que necesitarán:**
- `document.getElementById()`
- `document.querySelectorAll()`
- `addEventListener('input', callback)`
- `addEventListener('click', callback)`
- `element.textContent`
- `element.classList.add()`, `element.classList.remove()`
- `element.getAttribute()`
- `element.value`

## **🔧 Indicaciones Técnicas**

### **Paso 1: Obtener Elementos con selectores**

### **Paso 2: Función para Cambiar Nombre**

### **Paso 3: Función para Cambiar Tema**

### **Paso 4: Conectar Eventos**

## **🎨 Estilos CSS Disponibles**

### **Clases de Tema:**
- `.tema-claro` - Fondo azul-púrpura
- `.tema-oscuro` - Fondo gris oscuro
- `.tema-colorido` - Fondo rosa degradado

### **Clases de Botones:**
- `.tema-btn` - Estilo base de botones
- `.tema-btn.activo` - Botón seleccionado (azul)

## **🚀 Funcionalidades Esperadas**

### **Comportamiento del Input:**
- Al escribir en el input, el nombre en la tarjeta cambia inmediatamente
- Si el input está vacío, muestra "Tu Nombre"
- El cambio es en tiempo real (evento `input`)

### **Comportamiento de los Botones:**
- Al hacer clic en un botón de tema, la tarjeta cambia de color
- Solo un tema puede estar activo a la vez
- Los botones pueden mostrar cuál está seleccionado

### **Comportamiento del Reset:**
- Limpia el input de nombre
- Vuelve el nombre a "Tu Nombre"
- Remueve todos los temas de la tarjeta
- Resetea el estado de los botones

## **💡 Consejos de Desarrollo**

### **Orden de Implementación:**
1. **Primero:** Configurar `DOMContentLoaded` y obtener elementos
2. **Segundo:** Implementar el cambio de nombre (más simple)
3. **Tercero:** Implementar el cambio de temas
4. **Cuarto:** Implementar el botón resetear
5. **Quinto:** Agregar funcionalidades extra

### **Debugging:**
- Usa `console.log()` para verificar que los elementos se obtienen correctamente
- Verifica que los eventos se conectan correctamente
- Revisa la consola del navegador para errores

### **Errores Comunes:**
- No usar `DOMContentLoaded` puede causar errores si el script se ejecuta antes de que el DOM esté listo
- Olvidar usar `trim()` en el input puede causar problemas con espacios
- No remover todas las clases antes de agregar la nueva puede causar conflictos

## **🎯 Resultado Final**

Al completar el ejercicio, tendrás:
- ✅ Un input que cambia el nombre en tiempo real
- ✅ Botones que cambian el tema visual de la tarjeta
- ✅ Un botón que resetea todo a valores por defecto
- ✅ Código JavaScript limpio y bien estructurado
- ✅ Comprensión de los conceptos básicos del DOM

---
**¡Disfruta aprendiendo los fundamentos del DOM!** 🎉
