import Navbar from "../../components/navbar/Navbar"
import Officials from "../../components/Officials/Officials"
import Sidebar from "../../components/sidebar/Sidebar"
import "./admin.scss"

function Admin() {
  return (
    <div className="admin">
        <Sidebar/>
    <div className='adminContainer'>
        <Navbar/>
        <Officials/>
    </div>
    </div>
  )
}

export default Admin