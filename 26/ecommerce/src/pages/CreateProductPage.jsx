import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from '../components/Input'
import { statusData, statusTranslations, translateStatus } from "../utils/statusTranslations";
import usePostProduct from "../hooks/usePostProduct";

function CreateProductPage() {
  const navigate = useNavigate();

  // hook de creacion
  const { error, fetchProduct } = usePostProduct()
  // state
  const [form, setForm] = useState({
    name: "",
    description: "",
    status: "AVAILABLE",
    price: 0,
    stock: 0,
    image: ""
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

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    // En null debemos mandar el hook
    const success = await fetchProduct(form)
    if(success){
          navigate("/products")
    }
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
        <textarea name="description" required id="description" onChange={handleInputChange} value={form.description} placeholder="Escriba la descripcion del producto"></textarea>

        {/* Status */}
        <label htmlFor="status">Estado</label>
        <select name="status" required value={form.status} id="status" onChange={handleInputChange} >
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

           {/* error puede ser null (falsy). si hay error lo muestra  */}
           { error && <p> {error.message || error} </p> }
           <button type="submit" > Crear producto </button>
      </form>
    </div>
  );
}

export default CreateProductPage;
