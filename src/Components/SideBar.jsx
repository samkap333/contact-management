import { useNavigate } from "react-router-dom";
import { AiOutlineContacts } from 'react-icons/ai';
import { BsBarChartFill } from 'react-icons/bs';

export default function Sidebar() {
    const navigate = useNavigate();
    
    return (
        <nav id="sidebar" className="sidebar js-sidebar">
            <div className="sidebar-content js-simplebar">
                <br/><br/>
                <ul className="sidebar-nav">
                    <li className="sidebar-item">
                        <a className="sidebar-link d-flex" onClick={() => navigate('/')}>
                            <AiOutlineContacts size={16} className="align-middle" />
                            <span className="align-middle align-items-center">Contacts</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-link d-flex" onClick={() => navigate('/dashboard')}>
                            <BsBarChartFill size={16} className="align-middle" />
                            <span className="align-middle align-items-center">Charts and Maps</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
