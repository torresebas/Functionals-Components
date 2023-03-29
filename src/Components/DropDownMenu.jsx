import { useEffect, useState, useRef } from "react";


const useDropdown = () => {
  const ref = useRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const clickIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", clickIfClickedOutside);
    return () => {
      //Cleanup the event listener
      document.removeEventListener("mousedown", clickIfClickedOutside);
    };
  }, [isMenuOpen]);


  const clickMenu = () => {
    setIsMenuOpen(true)
  }


  return {
    isMenuOpen,
    ref,
    clickMenu
  }

}

const DropDownMenu = () => {
  // const ref = useRef();

  const {isMenuOpen, ref, clickMenu} = useDropdown()
  
  return (
    <div className="wapper">
      <button className="button" onClick={clickMenu}>
        Click me
      </button>
      {isMenuOpen && (
        <ul className="list" ref={ref}>
          <li className="list-item">op 1</li>
          <li className="list-item">op 2</li>
          <li className="list-item">op 3</li>
          <li className="list-item">op 4</li>
          <li className="list-item">op 5</li>
        </ul>
      )}
    </div>
  );
};

export default DropDownMenu;
