import React from "react";

import InfoModal from "../modals/InfoModal";

function Header() {
    return (
      <header style={{ fontFamily: 'Poppins, sans-serif' }}>
        <h1>Könnections</h1>
        <InfoModal />
      </header>
    );
  }
  
  export default Header;