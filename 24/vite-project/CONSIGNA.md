# 📝 Ejercicio: Gestor de Tareas

## 🎯 Objetivo
Crear una aplicación web con React que permita gestionar una lista de tareas personales.

---

## 📋 ¿Qué debe hacer la aplicación?

Tu aplicación debe permitir:

### 1. Agregar tareas nuevas
- Un campo de texto donde el usuario escribe el nombre de la tarea
- Un botón "Agregar" que agrega la tarea a la lista
- El campo se debe limpiar después de agregar

### 2. Ver todas las tareas
- Mostrar todas las tareas en una lista
- Cada tarea debe mostrar:
  - Su nombre
  - Su estado (Pendiente o Completada)
  - Un botón "Completar" (solo funciona si está pendiente)
  - Un botón "Eliminar"

### 3. Marcar tareas como completadas
- Al hacer clic en "Completar", la tarea cambia a completada
- Las tareas completadas deben verse diferentes (tachadas, otro color)
- El botón "Completar" se deshabilita cuando la tarea ya está completada

### 4. Eliminar tareas
- Botón "Eliminar" en cada tarea que la quita de la lista

### 5. Mostrar contadores
- Mostrar cuántas tareas están pendientes
- Mostrar cuántas tareas están completadas
- Ejemplo: "3 pendientes" y "2 completadas"

### 6. Validaciones
- Si intentas agregar una tarea vacía → mostrar mensaje: "El nombre de la tarea no puede estar vacío"
- Si intentas agregar una tarea que ya existe → mostrar mensaje: "Esta tarea ya existe"
- Los mensajes deben aparecer en pantalla (no solo en la consola)

---

## 📁 Estructura de archivos

Debes crear estos archivos:

```
src/
├── components/
│   └── TareaItem.jsx      ← Componente de una tarea individual
├── App.jsx                ← Componente principal (aquí va la lógica)
├── App.css                ← Estilos (ya te los damos)
└── main.jsx               ← Ya existe, no modificar
```

---

## 💡 Estructura de datos

Cada tarea es un objeto con esta forma:

```javascript
{
  id: 1234567890,           // Número único (usa Date.now())
  nombre: "Estudiar React", // Texto de la tarea
  completada: false         // true o false
}
```

Las tareas se guardan en un array en el estado:

```javascript
const [tareas, setTareas] = useState([])
```

---

## ✅ Criterios de evaluación

| Requisito | Puntos |
|-----------|--------|
| Agregar tareas | 25 |
| Mostrar lista | 20 |
| Completar tareas | 20 |
| Eliminar tareas | 15 |
| Contadores | 10 |
| Validaciones | 10 |

**Total: 100 puntos**

---

## 🧪 Ejemplo de uso

1. Usuario escribe: `"Estudiar React"` → Click en "Agregar"
   - ✅ Aparece en la lista como pendiente
   - ✅ Contador muestra: "1 pendientes, 0 completadas"

2. Usuario escribe: `""` (vacío) → Click en "Agregar"
   - ❌ Muestra: "El nombre de la tarea no puede estar vacío"

3. Usuario escribe: `"Estudiar React"` (duplicado) → Click en "Agregar"
   - ❌ Muestra: "Esta tarea ya existe"

4. Usuario hace click en "Completar" de una tarea
   - ✅ La tarea se marca como completada
   - ✅ Se tacha el texto
   - ✅ Contador actualiza: "0 pendientes, 1 completadas"

5. Usuario hace click en "Eliminar"
   - ✅ La tarea desaparece de la lista

---

## 💻 Pistas útiles

### Para agregar una tarea:
```javascript
const nuevaTarea = {
  id: Date.now(),
  nombre: "Mi tarea",
  completada: false
}
setTareas([...tareas, nuevaTarea])
```

### Para marcar como completada:
```javascript
setTareas(tareas.map(tarea => 
  tarea.id === id ? { ...tarea, completada: true } : tarea
))
```

### Para eliminar:
```javascript
setTareas(tareas.filter(tarea => tarea.id !== id))
```

### Para validar si está vacío:
```javascript
if (nombre.trim() === '') {
  // mostrar error
}
```

### Para validar si existe:
```javascript
const existe = tareas.some(t => 
  t.nombre.toLowerCase() === nombre.toLowerCase()
)
```

### Para contar tareas:
```javascript
const pendientes = tareas.filter(t => !t.completada).length
const completadas = tareas.filter(t => t.completada).length
```

---

## 📤 Entregables

1. ✅ Código completo funcionando
2. ✅ Captura de pantalla de la aplicación en funcionamiento
3. ✅ Breve explicación (2-3 párrafos) respondiendo:
   - ¿Cómo manejaste el estado de las tareas?
   - ¿Qué método de arrays usaste para agregar/eliminar/modificar tareas?

---

## 🎨 Nota sobre estilos
Los estilos CSS ya están incluidos. Solo necesitas enfocarte en la lógica de React.

