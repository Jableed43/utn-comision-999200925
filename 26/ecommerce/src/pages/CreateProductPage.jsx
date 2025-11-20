import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from '../components/Input'
import { statusData, statusTranslations, translateStatus } from "../utils/statusTranslations";

function CreateProductPage() {
  const navigate = useNavigate();

  // hook
    // clase proxima vemos el hook de creacion

  // state
  const [form, setForm] = useState({
    name: "",
    description: "",
    status: "AVAILABLE",
    price: 0,
    stock: 0,
    image: null
  })
  // handler
  // handler para los inputs
  const handleInputChange = (e) => {
    const { name, value, type } = e.target
    setForm({
        ...form,
        [name]: type === "number" ? parseInt(value) || 0 : value
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // En null debemos mandar el hook
    const success = null
    console.log(form)
    navigate("/products")
  }

  return (
    <div>
      <h1> Crear producto </h1>
      <button onClick={() => navigate("/products")}>
        Volver a productos
      </button>

      <form onSubmit={handleFormSubmit}>

        {/* Name */}
        <Input label="Nombre" labelId="name" type="text" onChange={handleInputChange} value={form.name} isRequired={true} />

        {/* Image */}
        <Input label="Imagen" labelId="image" type="text" onChange={handleInputChange} value={form.image} isRequired={true} />

        {/* Description */}
        <label htmlFor="description">Descripcion</label>
        <textarea name="description" isRequired id="description" onChange={handleInputChange} value={form.description} placeholder="Escriba la descripcion del producto"></textarea>

        {/* Status */}
        <label htmlFor="status">Estado</label>
        <select name="status" isRequired value={form.status} id="status" onChange={handleInputChange} >
           { statusData.map((status) => (
            <option key={status} value={status}>
                {statusTranslations[status] || status}
            </option>
           ) ) }
        </select>

        {/* Price */}
        <Input isRequired={true} label="Precio" labelId="price" type="number" value={form.price} onChange={handleInputChange} />

        {/* Stock */}
        <Input isRequired={true} label="Stock" labelId="stock" type="number" value={form.stock} onChange={handleInputChange} />

           {/* mas adelante colocamos el error aqui */}

           <button type="submit" > Crear producto </button>
      </form>
    </div>
  );
}

export default CreateProductPage;
