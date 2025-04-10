import React, { useState } from "react";
import { Search, Person, Cart3, Heart, GeoAlt } from "react-bootstrap-icons";

const CartWidget = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Datos de ejemplo del carrito
  const cartItems = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: "$999",
      description: "128GB - Titanio Negro",
      image: "/images/producto_en_venta.png"
    },
    {
      id: 2,
      name: "MacBook Air",
      price: "$899",
      description: "Chip M2 - 13 pulgadas",
      image: "/images/macbookair.jpg"
    }
  ];

  return (
    <div className="d-flex align-items-center gap-4 pe-3">
      {/* Búsqueda expansible (sin cambios) */}
      <div 
        className={`search-container ${isSearchExpanded ? "expanded" : ""}`}
        onMouseEnter={() => setIsSearchExpanded(true)}
        onMouseLeave={() => !searchQuery && setIsSearchExpanded(false)}
      >
        <Search size={20} className="search-icon text-white" />
        <input
          type="text"
          placeholder="Buscar en la tienda..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Ícono de Usuario */}
      <button className="nav-link text-white mx-2">
        <Person size={20} title="Usuario"/>
      </button>

      {/* Carrito con Dropdown (modificado) */}
      <div 
        className="nav-item dropdown position-relative"
        onMouseEnter={() => setIsCartOpen(true)}
        onMouseLeave={() => setIsCartOpen(false)}
      >
        <button className="nav-link text-white mx-2 position-relative">
          <Cart3 size={20} title="Ver carrito"/>
          <span className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill">
            {cartItems.length}
          </span>
        </button>

        {/* Dropdown del carrito */}
        {isCartOpen && (
          <div className="dropdown-menu cart-dropdown" style={{ right: '-10px', marginTop: '10px' }}>
            <div className="cart-header">
              <h6> Mi Carrito ({cartItems.length})</h6>
            </div>
            
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  width="80"
                  className="cart-item-img me-3"
                />
                <div>
                  <h6 className="cart-item-name mb-1">{item.name}</h6>
                  <p className="cart-item-desc mb-2">{item.description}</p>
                  <p className="cart-item-price fw-bold mb-2">{item.price}</p>
                  <div className="cart-actions mt-2">
                    <a href="#" className="d-block text-decoration-none small mb-1">Modificar compra</a>
                    <a href="#" className="d-block text-decoration-none small mb-1">Seguir con la compra</a>
                    <a href="#" className="d-block text-decoration-none small">Enviar</a>
                  </div>
                </div>
              </div>
            ))}

            <div className="cart-footer mt-3">
              <button className="btn btn-dark w-100">Ver carrito completo</button>
            </div>
          </div>
        )}
      </div>

      {/* Ícono de Favoritos */}
      <button className="nav-link text-white mx-2">
        <Heart size={20} title="Ver favoritos" />
      </button>

      {/* Ícono de Ubicación */}
      <button className="nav-link text-white mx-2">
        <GeoAlt size={20} title="Donde encontrarnos" />
      </button>
    </div>
  );
};

export default CartWidget;