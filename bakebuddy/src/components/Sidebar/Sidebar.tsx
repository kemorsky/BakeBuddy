import { useNavigate } from "react-router-dom"
import { useState } from "react";
import SidebarIcon from '../../assets/sidebar-icon.png'
import BreakfastIcon from '../../assets/breakfast-icon.png'
import LunchIcon from '../../assets/lunch-icon.png'
import DinnerIcon from '../../assets/dinner-icon.png'
import BakingIcon from '../../assets/baking-icon.png'
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
                <img src={SidebarIcon} alt="" className="sidebar-icon" />
            </button>
            <section className="sidebar-head">
                <h2>Recipes</h2>
            </section>
            <ul className="sidebar-list">
                <li className="nav-item-1">
                    <a href="" className="nav-link" onClick={goToBaking}>
                        <i></i>
                        <img src={BakingIcon} alt="" className="sidebar-icons" />
                        <span>Baking</span>
                    </a>
                </li>
                <li className="nav-item-2">
                    <a href="" className="nav-link" onClick={goToBreakfast}>
                            <i></i>
                            <img src={BreakfastIcon} alt="" className="sidebar-icons" />
                            <span>Breakfast</span>
                        </a>
                </li>
                <li className="nav-item-3">
                    <a href="" className="nav-link" onClick={goToLunch}>
                            <i></i>
                            <img src={LunchIcon} alt="" className="sidebar-icons" />
                            <span>Lunch</span>
                        </a>
                </li>
                <li className="nav-item-4">
                    <a href="" className="nav-link" onClick={goToDinner}>
                            <i></i>
                            <img src={DinnerIcon} alt="" className="sidebar-icons" />
                            <span>Dinner</span>
                        </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar