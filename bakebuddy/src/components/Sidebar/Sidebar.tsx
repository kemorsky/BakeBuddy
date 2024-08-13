import { useNavigate } from "react-router-dom"
import { useState } from "react";
import './Sidebar.scss'

function Sidebar() {

    const [isOpen, setIsOpen] = useState(false)

    const navigate = useNavigate();
    const goToBaking = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); // Prevent the default anchor behavior
        navigate("/baking");
    };
    const goToBreakfast = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); // Prevent the default anchor behavior
        navigate("/breakfast");
    };
    const goToLunch = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); // Prevent the default anchor behavior
        navigate("/lunch");
    };
    const goToDinner = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); // Prevent the default anchor behavior
        navigate("/dinner");
    };

    function handleSideBarChange() {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`} >
            <button className="toggle_btn" onClick={handleSideBarChange}>
                Toggle Sidebar
            </button>
            <section className="sidebar-head">
                <h2>Recipes</h2>
            </section>
            <ul className="sidebar-list">
                <li className="nav-item-1">
                    <a href="" className="nav-link" onClick={goToBaking}>
                        <i></i>
                        <span>Baking</span>
                    </a>
                </li>
                <li className="nav-item-2">
                    <a href="" className="nav-link" onClick={goToBreakfast}>
                            <i></i>
                            <span>Breakfast</span>
                        </a>
                </li>
                <li className="nav-item-3">
                    <a href="" className="nav-link" onClick={goToLunch}>
                            <i></i>
                            <span>Lunch</span>
                        </a>
                </li>
                <li className="nav-item-4">
                    <a href="" className="nav-link" onClick={goToDinner}>
                            <i></i>
                            <span>Dinner</span>
                        </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar