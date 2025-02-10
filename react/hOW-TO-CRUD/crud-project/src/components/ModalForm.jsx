import { useState } from 'react';
export default function ModalForm({ isOpen, onClose, mode, OnSubmit }) {
    const [dni, setDni] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [dateofbirth, setDateOfBirth] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents page reload

        // Send form data to parent component
        OnSubmit({ dni, name, lastname, dateofbirth });

        // Close modal after submission
        onClose();
    };

    return(
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            
            <dialog id="my_modal_3" className="modal" open={isOpen}>
            <div className="modal-box">
                <h3 className="font-bold text-lg py-4">{mode === 'edit' ? 'Edit Student' : 'Student Details' }</h3>
                <form method="dialog" onSubmit={handleSubmit}>
                {/* if there is a button in form, it will close the modal */}

                <label className="input input-bordered  my-4 flex items-center gap-2">
                    Dni
                    <input type="text" className="grow" value={dni} onChange={(e) => setDni(e.target.value)} />
                </label>
                <label className="input input-bordered  my-4 flex items-center gap-2">
                    Name
                    <input type="text" className="grow" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label className="input input-bordered  my-4 flex items-center gap-2">
                    Last Name
                    <input type="text" className="grow" value={lastname} onChange={(e) => setLastName(e.target.value)}/>
                </label>
                <label className="input input-bordered  my-4 flex items-center gap-2">
                    Date Of Birth
                    <input type="date" className="grow" value={dateofbirth} onChange={(e) => setDateOfBirth(e.target.value)}/>
                </label>
                
                {/* Close Button */}
                <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
                 {/* Submit Button */}
                <button type="submit" className="btn btn-success">
                    {mode === 'edit' ? 'Save Changes' : 'Add Student' }
                </button>
                </form>
            </div>
          </dialog>
        </>
    )
}