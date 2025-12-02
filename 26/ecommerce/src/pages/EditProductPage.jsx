import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../components/Input";
import { statusData, statusTranslations } from "../utils/statusTranslations";
import usePutProduct from "../hooks/usePutProduct";
import useGetProductById from "../hooks/useGetProductById";

function EditProductPage() {
  // state
  const [form, setForm] = useState({
    name: "",
    description: "",
    status: "AVAILABLE",
    price: 0,
    stock: 0,
    image: "",
  });

  // Path param -> permite a traves de un valor usar un id y buscar un registro especifico
  const { id } = useParams();
  const navigate = useNavigate();
  // hook de creacion
  const {
    error: errorProductById,
    fetchProductById,
    loading,
  } = useGetProductById();

  useEffect(() => {
    const loadProduct = async () => {
      const response = await fetchProductById(id);
      if (response) {
        setForm({
          name: response.name,
          description: response.description,
          status: response.status,
          price: response.price,
          stock: response.stock,
          image: response.image,
        });
      }
    };
    if (id) {
      loadProduct();
    } else {
      console.log("id:", id);
    }
  }, [id]);

  const { error: putError, putProduct } = usePutProduct();

  // handler
  // handler para los inputs
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setForm({
      ...form,
      [name]: type === "number" ? parseInt(value) || 0 : value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // En null debemos mandar el hook
    const success = await putProduct(id, form);
    console.log(success);
    if (success) {
      navigate("/products");
    }
  };

  return (
    <div>
      <h1> Editar producto </h1>
      <button onClick={() => navigate("/products")}>Volver a productos</button>

      <form onSubmit={handleFormSubmit}>
        {/* Name */}
        <Input
          label="Nombre"
          labelId="name"
          type="text"
          onChange={handleInputChange}
          value={form.name}
          isRequired={true}
        />
        <br />
        {/* Image */}
        <Input
          label="Imagen"
          labelId="image"
          type="text"
          onChange={handleInputChange}
          value={form.image}
          isRequired={true}
        />
        <br />
        <img
          style={{ width: "200px", height: "200px" }}
          src={form.image}
          alt={form.name}
        />
        <br />
        {/* Description */}
        <label htmlFor="description">Descripcion</label>
        <textarea
          name="description"
          required
          id="description"
          onChange={handleInputChange}
          value={form.description}
          placeholder="Escriba la descripcion del producto"
        ></textarea>
        <br />
        {/* Status */}
        <label htmlFor="status">Estado</label>
        <select
          name="status"
          required
          value={form.status}
          id="status"
          onChange={handleInputChange}
        >
          {statusData.map((status) => (
            <option key={status} value={status}>
              {statusTranslations[status] || status}
            </option>
          ))}
        </select>
        <br />
        {/* Price */}
        <Input
          isRequired={true}
          label="Precio"
          labelId="price"
          type="number"
          value={form.price}
          onChange={handleInputChange}
        />
        <br />
        {/* Stock */}
        <Input
          isRequired={true}
          label="Stock"
          labelId="stock"
          type="number"
          value={form.stock}
          onChange={handleInputChange}
        />

        {/* error puede ser null (falsy). si hay error lo muestra  */}
        <br />
        {errorProductById && (
          <p> {errorProductById.message || errorProductById} </p>
        )}

        {putError && <p> {putError.message || putError} </p>}
        <button type="submit"> Editar producto </button>
      </form>
    </div>
  );
}

export default EditProductPage;
