import React, { useState, useEffect } from "react";
import "./Components.css"; // Importamos los estilos de Header

const Header = () => {
  const [scrolled, setScrolled] = useState(false); // Estado para saber si hemos hecho scroll
  const [selectedService, setSelectedService] = useState(null); // Estado para almacenar el servicio seleccionado
  const [isMenuVisible, setIsMenuVisible] = useState(false); // Estado para controlar la visibilidad del menu
  const [activeService, setActiveService] = useState(null); // Para gestionar el servicio activo
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [isCountriesVisible, setIsCountriesVisible] = useState(false); // Estado para manejar la visibilidad de la lista de países

  // Datos de los servicios

  const services = [
    {
      id: 1,
      description: <></>,
    },
    {
      id: 2,
      name: "Certificados digitales",
      description: (
        <>
          <div className="columns-container">
            {/* Columna 1 */}
            <div className="column beneficios">
              <h4>Para ciudadanos</h4>
              <a>Persona natural</a>
            </div>
          </div>
          <div className="columns-container">
            {/* Columna 2 */}
            <div className="column beneficios">
              <h4>Para empresas</h4>
              <a>Representante legal</a>
              <a>Empleado</a>
              <a>Agente automatizado</a>
            </div>
          </div>
          <div className="columns-container">
            {/* Columna 3 */}
            <div className="column beneficios">
              <h4>Para profesionales</h4>
              <a>Abogado</a>
              <a>Contador</a>
              <a>Médico</a>
              <a>Otras profesiones</a>
            </div>
          </div>
          <a href="#vermas1" className="ver-mas-link">
            Ver más <span>&#8594;</span> {/* Flecha hacia la derecha */}
          </a>
        </>
      ),
    },
    {
      id: 2,
      name: "Firma remota",
      description: (
        <>
          <div className="columns-container">
            {/* Columna 1 */}
            <div className="column beneficios"></div>
          </div>
        </>
      ),
    },
    {
      id: 2,
      name: "Sellos de tiempo",
      description: (
        <>
          <div className="columns-container">
          </div>
          <a href="#vermas" className="ver-mas-link">
            Ver más <span>&#8594;</span>
          </a>
        </>
      ),
    },
    {
      id: 2,
      name: "Acreditaciones",
      description: (
        <>
          <div className="columns-container">
            {/* Columna 1 */}
            <div className="column beneficios">
              <h4>Acreditaciones</h4>
              <a>Entidad de Certificación</a>
              <a>Sellado de Tiempo</a>
              <a>Servicio de Valor Añadido</a>
            </div>
            {/* Columna 2 */}
            <div className="column beneficios">
              <h4>Reconocimiento</h4>
              <a>Firma remota</a>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 2,
      name: "Repositorio",
      description: (
        <>
          <div className="columns-container">
            {/* Columna 1 */}
            <div className="column beneficios">
              <h4>Entidad de Certificación</h4>
              <a>Politica y Declaración de Prácticas</a>
              <a>Politica y Plan de Seguridad</a>
              <a>Politica de Privacidad</a>
            </div>
            {/* Columna 1 */}
            <div className="column beneficios">
              <h4>Autoridad de Sellado de Tiempo</h4>
              <a>Politica y Declaración de Prácticas</a>
              <a>Politica y Plan de Seguridad</a>
              <a>Politica de Privacidad</a>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 3,
      name: "Identificación digital",
      description: (
        <>
          <div className="columns-container">
            <div className="column beneficios">
            </div>
          </div>
        </>
      ),
    },
    {
      id: 3,
      name: "Procesos de negocio",
      description: (
        <>
          <div className="columns-container">
          </div>
          <a href="#vermas" className="ver-mas-link">
            Ver más <span>&#8594;</span>
          </a>
        </>
      ),
    },
    {
      id: 3,
      name: "FirmaYa",
      description: (
        <>
          <div className="columns-container">
            <div className="column beneficios">
            </div>
          </div>
        </>
      ),
    },
    {
      id: 3,
      name: "Gestor documental",
      description: (
        <>
          <div className="columns-container">
          </div>
          <a href="#vermas" className="ver-mas-link">
            Ver más <span>&#8594;</span>
          </a>
        </>
      ),
    },
    {
      id: 4,
      name: "Noticias",
      description: (
        <>
          <div className="columns-container">
          </div>
        </>
      ),
    },
    {
      id: 4,
      name: "Contáctanos",
      description: (
        <>
          <div className="columns-container">
          </div>
        </>
      ),
    },
  ];

  // Función que se llama cada vez que el usuario hace scroll
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true); // Si se hizo scroll hacia abajo más de 50px, mostramos el logo scroll
    } else {
      setScrolled(false); // Si estamos en la parte superior, mostramos el logo inicial
    }
  };

  // Usamos useEffect para agregar el listener de scroll cuando el componente se monta
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Limpiamos el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función para actualizar el servicio seleccionado
  const handleServiceClick = (service) => {
    setSelectedService(service); // Actualiza el servicio seleccionado
    setActiveService(service.name); // Marca el servicio como activo
  };

  // Función para manejar el mouse enter
  const handleMouseEnter = (menuId) => {
    setActiveMenuItem(menuId); // Establece el id del menú que está activo
    setIsMenuVisible(true);
    setSelectedService(null);
  };

  const handleMouseLeave = () => {
    setIsMenuVisible(false); // Ocultar el submenú al quitar el ratón
  };

  // Función para alternar la visibilidad de la lista de países
  const toggleCountriesList = () => {
    setIsCountriesVisible(!isCountriesVisible);
  };

  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""} ${
        isMenuVisible ? "visible" : ""
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="logo-container">
        {/* Cambiamos la imagen según el estado del scroll */}
        <img src={"/idok.png"} alt="Logo" className="logo" />
      </div>

      {scrolled && ( // Solo mostramos el menú cuando hay scroll
        <nav className="navbar">
          <ul>
            <li
              className={`nav-item ${activeMenuItem === 1 ? "active" : ""}`}
              onMouseEnter={() => handleMouseEnter(1)}
            >
              <a href="#servicios">Nosotros</a>
            </li>
            <li
              className={`nav-item ${activeMenuItem === 2 ? "active" : ""}`}
              onMouseEnter={() => handleMouseEnter(2)}
            >
              <a href="#servicios">Servicios digitales</a>
            </li>
            <li
              className={`nav-item ${activeMenuItem === 3 ? "active" : ""}`}
              onMouseEnter={() => handleMouseEnter(3)}
            >
              <a href="#servicios">Soluciones</a>
            </li>
            <li
              className={`nav-item ${activeMenuItem === 4 ? "active" : ""}`}
              onMouseEnter={() => handleMouseEnter(4)}
            >
              <a href="#paises">Más</a>
            </li>
          </ul>
        </nav>
      )}
      {scrolled && (
        <div onClick={toggleCountriesList}>
          <div className="pais-section">
            <i className="fas fa-globe"></i> {/* Icono del planeta */}
            <i className="fas fa-chevron-down"></i>{" "}
            {/* Icono de la flecha hacia abajo */}
          </div>
          {/* Solo mostramos la lista si isCountriesVisible es true */}
          {isCountriesVisible && (
            <ul className="countries-list">
              <li>Argentina</li>
              <li>Chile</li>
              <li>Colombia</li>
              <li>México</li>
              <li>Perú</li>
            </ul>
          )}
        </div>
      )}

      {/* Contenedor para las dos columnas */}
      <div className="container-menu">
        <div className="option-menu">
          <ul>
            {services.map((service) => (
              <li
                className={`${service.id} ${
                  activeMenuItem === service.id ? "active" : ""
                }`}
                key={service.id}
              >
                <a
                  onClick={() => handleServiceClick(service)}
                  className={activeService === service.name ? "active" : ""} // Agrega la clase 'active'
                >
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="content-option">
          {selectedService ? (
            <>
              <h3>{selectedService.name}</h3>
              <p>{selectedService.description}</p>
            </>
          ) : (
            <p>Selecciona una opción para ver más detalles.</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
