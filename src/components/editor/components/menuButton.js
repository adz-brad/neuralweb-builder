import React from 'react' 

const MenuButton = ({ className, label, onClick, icon }) => {
    return (
      <button
        className={`editorMenuButton ${className}`}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
          padding: "2px",
          cursor: "pointer",
          background: "transparent",
          border: "none",
          fontSize: "12px",
          fontWeight: "bold",
        }}
        onClick={onClick}
      >
        {icon}
        {label}
      </button>
    );
  };

  export default MenuButton