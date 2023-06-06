
import {Route,Routes} from "react-router-dom"
import Contacts from "./Pages/Contacts"
import Dashboard from "./Pages/Charts_and_Maps"
import EditContact from "./Components/Edit_Contact"
import ContactForm from "./Components/ContactForm"
import PanelLayout from './Components/Layouts/PanelLayout';
const App=()=>{


    return(
        <Routes >
           <Route path="/" element={<PanelLayout/>}>

            <Route path="/" element={<Contacts/>}/>
            <Route path="/contact_form" element={<ContactForm/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/edit/:id" element={<EditContact/>}/>
           </Route>
        </Routes>
    )
}

export default App