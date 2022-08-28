import "./widget.scss"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonIcon from '@mui/icons-material/Person';
import HouseIcon from '@mui/icons-material/House';
import GroupIcon from '@mui/icons-material/Group';
import ElderlyIcon from '@mui/icons-material/Elderly';
import axios from "axios";
import React,{useState,useEffect} from 'react'
const Widget = ({ type }) => {
    let user;
    let senior;
    let families;
    let sites;

    //temporary
    // const amount = 50000;
    //function para makuha yung bilang ng nasa table
    const diff = 30;
    const[totalUsers,setTotalUser,] = useState([])
    const[totalSeniors,setTotalSenior,] = useState([])
    const[totalFamilies,setTotalFamilies,] = useState([])
    const[totalSites,setTotalSites,] = useState([])


    useEffect(() => {
        const fetchPosts = async () => {
            axios.post('http://localhost:4000/app/getUsers')
                .then(res => {
                    console.log(res);
                    setTotalUser(res.user.length);
                    setTotalSenior(res.senior.length);
                    setTotalFamilies(res.sites.length);
                    setTotalSites(res.sites.length);
                }).catch(err => {
                    console.log(err);
                })
        };
        fetchPosts();
    }, []);
    switch(type){
        case"newuser":
        user={
            title:"NEW USERS",
            isUser: false,
            link:"Compared to last month",
            icon:(<PersonIcon className="icon"  style={{color:"#FDF02D", backgroundColor:"#0047AB"}}/>),
            
        };
        break;
        case"senior":
        senior={
            title:"SENIOR CITIZENS",
            isUser: true,
            link:"Compared to last month",
            icon:(<ElderlyIcon className="icon" style={{color:"#FDF02D", backgroundColor:"#0047AB"}}/>),
        };
        break;
        case"families":
        families={
            title:"NUMBER OF FAMILIES",
            isUser: false,
            link:"Compared to last month",
            icon:(<GroupIcon className="icon"  style={{color:"#FDF02D", backgroundColor:"#0047AB"}}/>),
        };
        break;
        case"evacuation":
        sites={
            title:"EVACUATION SITES",
            isUser: true,
            link:"Compared to last month",
            icon:(<HouseIcon className="icon" style={{color:"#FDF02D", backgroundColor:"#0047AB"}}/>),
        };
        break;

        default:
        break;
    }

//nakalagay sa totaluser kung ilang na input sa table
  return (
    <div className="widget">
        <div className="left">
        <span className="title">{user.title}</span>
        <span className="counter">{user.isUser} {totalUsers} </span>
        <span className="link">{user.link}</span>
        </div>
        
        <div className="left">
        <span className="title">{senior.title}</span>
        <span className="counter">{senior.isUser} {totalSeniors} </span>
        <span className="link">{senior.link}</span>
        </div>

        <div className="left">
        <span className="title">{families.title}</span> 
        <span className="counter">{families.isUser} {totalFamilies} </span>
        <span className="link">{families.link}</span>
        </div>

        <div className="left">
        <span className="title">{sites.title}</span> 
        <span className="counter">{sites.isUser} {totalSites} </span>
        <span className="link">{sites.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <ArrowDropUpIcon/>
                {diff}  %
            </div>
            {user.icon}
            {senior.icon}
            {families.icon}
            {sites.icon}
        </div>
    </div>
  )
}

export default Widget