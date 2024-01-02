import logo from '../images/logo.webp'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='py-3 bg-danger text-white' >
      <div className='container'>
        <div className='row'>
          <div className='col-2'>
        <Link to = "/"><img src={logo} className='w-75 mx-auto' alt="" /></Link>    
          </div> {/*col-2*/}
          <div className='col-10'>
            <div className="input-group mt-2">
              <span className="input-group-text" id="basic-addon1">  <FaSearch size={36} color='gray' /> </span>
              <input type="text" className="form-control form-control-lg" placeholder="ابحث من هنا" />
            </div>
          </div>{/*col-10*/}
        </div> {/*row*/}
      </div>{/*container*/}
    </header>
  )
}
export default Header