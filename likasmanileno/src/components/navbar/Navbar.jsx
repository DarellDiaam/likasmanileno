import "./navbar.scss"
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
function Navbar() {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="search">
               
            </div>
            <div className="items">
                 
                <div className="item">
                 <ChatBubbleIcon className="icon"/>
                 <div className="counter">4</div>
                </div>


                <div className="item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Z3W2C0eZEZIVC0Wz-VYWxYe9agaXhlp1TFB1xwM&s" alt="" className="avatar" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar