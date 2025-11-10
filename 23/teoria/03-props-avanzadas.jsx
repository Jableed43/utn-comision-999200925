// ============================================
// TEORÍA: Props Avanzadas
// ============================================

// ============================================
// PROPS SIMPLES
// ============================================
function Saludo({ nombre, edad }) {
  return (
    <div>
      <h3>Hola, {nombre}!</h3>
      <p>Tienes {edad} años</p>
    </div>
  )
}

// ============================================
// PROPS CON OBJETOS
// ============================================
function TarjetaUsuario({ usuario }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h4>{usuario.nombre}</h4>
      <p>Email: {usuario.email}</p>
      <p>Edad: {usuario.edad}</p>
    </div>
  )
}

// ============================================
// PROPS CON FUNCIONES (CALLBACKS)
// ============================================
function BotonPersonalizado({ texto, onClick, color = 'blue' }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      {texto}
    </button>
  )
}

// ============================================
// PROPS OPCIONALES CON VALORES POR DEFECTO
// ============================================
function Mensaje({ titulo, mensaje, tipo = 'info' }) {
  const colores = {
    info: 'blue',
    success: 'green',
    warning: 'orange',
    error: 'red'
  }

  return (
    <div style={{
      padding: '15px',
      backgroundColor: colores[tipo],
      color: 'white',
      borderRadius: '5px',
      margin: '10px 0'
    }}>
      <h4>{titulo}</h4>
      <p>{mensaje}</p>
    </div>
  )
}

// ============================================
// COMPONENTE PADRE QUE USA TODOS LOS EJEMPLOS
// ============================================
function EjemploProps() {
  const usuarioEjemplo = {
    nombre: 'María',
    email: 'maria@example.com',
    edad: 28
  }

  const manejarClick = () => {
    alert('¡Botón clickeado!')
  }

  return (
    <div>
      <h2>Ejemplos de Props</h2>

      {/* Props simples */}
      <Saludo nombre="Juan" edad={25} />

      {/* Props con objetos */}
      <TarjetaUsuario usuario={usuarioEjemplo} />

      {/* Props con funciones */}
      <BotonPersonalizado
        texto="Haz clic aquí"
        onClick={manejarClick}
        color="green"
      />

      {/* Props opcionales */}
      <Mensaje
        titulo="Información"
        mensaje="Este es un mensaje informativo"
        tipo="info"
      />
      <Mensaje
        titulo="Éxito"
        mensaje="Operación completada"
        tipo="success"
      />
      {/* Sin especificar 'tipo', usa el valor por defecto */}
      <Mensaje
        titulo="Mensaje"
        mensaje="Usa el tipo por defecto"
      />
    </div>
  )
}

export default EjemploProps

