import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div id="wrap">
        <div id="main" className="container clear-top">
          <p>Employees Data {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
