import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addContact } from '../Redux/action';

function ContactForm() {
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        status: "active"
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    function handleSave() {
        dispatch(addContact(form));
    }

    return (
        <div className="w-1/2 mx-auto my-4 pt-16">
            <h2 className="text-2xl font-bold mb-4" >Create Contact</h2>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="first-name">
                    First Name:
                </label>
                <input
                    className="w-full border border-gray-400 p-2 rounded-md"
                    id="first-name"
                    type="text"
                    name="first_name"
                    value={form.first_name}
                    onChange={handleChange}
                />
                
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="last-name">
                    Last Name
                </label>
                <input
                    className="w-full border border-gray-400 p-2 rounded-md"
                    id="last-name"
                    type="text"
                    name="last_name"
                    value={form.last_name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="status">
                    Status
                </label>
                <div className="flex">
                    <label className="block mr-4">
                        <input
                            type="radio"
                            name="status"
                            value="active"
                            checked={form.status === 'active'}
                            onChange={handleChange}
                        />
                        <span className="bullet-button active"></span>
                        Active
                    </label>
                   
                    <label className="block">
                        <input
                            type="radio"
                            name="status"
                            value="inactive"
                            checked={form.status === 'inactive'}
                            onChange={handleChange}
                        />
                        <span className="bullet-button inactive"></span>
                        Inactive
                    </label>
                </div>
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSave}
            >
                Save Contact
            </button>
        </div>
    );
}

export default ContactForm;
