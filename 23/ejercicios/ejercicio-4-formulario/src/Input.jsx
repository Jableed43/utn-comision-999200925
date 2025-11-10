// ============================================
// Componente: Input
// ============================================
// Recibe props: label, type, value, onChange, error, placeholder
// Ejemplo de componente reutilizable con props

function Input({ label, type, value, onChange, error, placeholder }) {
  return (
    <div className="campo">
      <label htmlFor={label.toLowerCase()}>{label}:</label>
      <input
        type={type}
        id={label.toLowerCase()}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={error ? 'input-error' : ''}
      />
      {error && (
        <span className="error-mensaje">{error}</span>
      )}
    </div>
  )
}

export default Input

