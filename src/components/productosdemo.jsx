import React from "react";

const ProductsDemo = () => {
  // Datos de productos para demostración
  const products = [
    {
      id: 1,
      name: "Cuenta Corriente",
      description: "Administra tus finanzas diarias con facilidad.",
      actions: [
        { label: "Solicitar", onClick: () => alert("Cuenta Corriente seleccionada.") },
        { label: "Más información", onClick: () => alert("Detalles de Cuenta Corriente.") },
      ],
    },
    {
      id: 2,
      name: "Tarjeta de Crédito",
      description: "Disfruta de beneficios exclusivos y recompensas.",
      actions: [
        { label: "Solicitar", onClick: () => alert("Tarjeta de Crédito seleccionada.") },
        { label: "Más información", onClick: () => alert("Detalles de Tarjeta de Crédito.") },
      ],
    },
    {
      id: 3,
      name: "Préstamo Personal",
      description: "Accede a financiamiento rápido y sencillo.",
      actions: [
        { label: "Solicitar", onClick: () => alert("Préstamo Personal seleccionado.") },
        { label: "Más información", onClick: () => alert("Detalles de Préstamo Personal.") },
      ],
    },
  ];

  return (
    <div className="bg-gray-300 rounded-lg flex-auto  py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Productos Financieros       </h2>
      <div className="flex gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-400 shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold  mb-3">

              {product.name}
            </h3>
            <p className="text-gray-800 mb-4">{product.description}</p>
            <div className="flex gap-3">
              {product.actions.map((action, index) => (
                <button
                  key={index}
                  className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-400"
                  onClick={action.onClick}
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsDemo;
