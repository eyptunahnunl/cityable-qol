import { useEffect, useState } from "react";

function Header() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 576
  );
  useEffect(() => {
    console.log("mobile render", isMobile);
  });

  return <div>Header</div>;
}

export default Header;
