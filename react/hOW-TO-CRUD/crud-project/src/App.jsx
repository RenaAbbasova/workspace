import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import TableList from './components/TableList'
import ModalForm from './components/ModalForm'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setmodalMode] = useState('add');

  const handleOpen = (mode) => {
    setmodalMode(mode);
    setIsOpen(true);
  }


  const handleSubmit = () => {
    if (modalMode === 'add') {
      console.log('modal mode Add');

    } else {
      console.log('modal mode Edit');

    }
  }

  return (
    <>
     <NavBar onOpen={() => handleOpen('add')} />
     <TableList handleOpen={handleOpen} />
     <ModalForm 
     isOpen={isOpen} OnSubmit={handleSubmit}
     onClose={() => setIsOpen(false)} 
     mode={modalMode}/>
    </>
  )
}

export default App
