// Enfoque reutilizable
function InputNumber({ label, value, onChange, labelId }) {
  return (
    <div>
      <label htmlFor={labelId}> {label} </label>
      <input type="number" value={value} onChange={onChange} id={labelId} />
    </div>
  );
}

export default InputNumber