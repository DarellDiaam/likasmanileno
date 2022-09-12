import "./widget.scss"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonIcon from '@mui/icons-material/Person';
import HouseIcon from '@mui/icons-material/House';
import GroupIcon from '@mui/icons-material/Group';
import ElderlyIcon from '@mui/icons-material/Elderly';
import axios from "axios";
import React,{useState,useEffect} from 'react'


const Widget = ({ type }) => {

    // const setData=(data_user,data_senior, data_families,data_sites) =>{
    //     const Data ={
    //         data_user: data_user,
    //         data_senior: data_senior,  
    //         data_families:data_families,
    //         data_sites:data_sites,
    //     }
    // }
    
    let DataUser;
    let DataSenior;
    let DataFamilies;
    let DataSites;
    
    //temporary
    // const amount = 50000;
    //function para makuha yung bilang ng nasa table
    const diff = 0;
    const[totalUsers,setTotalUser,] = useState([])
    const[totalSeniors,setTotalSenior,] = useState([])
    const[totalFamilies,setTotalFamilies,] = useState([])
    const[totalSites,setTotalSites,] = useState([])


    useEffect(() => {
        const fetchPosts = async () => {
            axios.post('http://localhost:4000/app/getUsers')
            .then(res => {
                console.log(res);
                setTotalUser(res.DataUser.length);
            }).catch(err => {
                console.log(err);
            })
                
                .then(res => {
                    console.log(res);
                    setTotalSenior(res.DataSenior.length);
                }).catch(err => {
                    console.log(err);
                })

                .then(res => {
                    console.log(res);
                    setTotalFamilies(res.DataFamilies.length);
                  
                }).catch(err => {
                    console.log(err);
                })

                .then(res => {
                    console.log(res);
                    setTotalSites(res.DataSites.length);
                }).catch(err => {
                    console.log(err);
                })


        };
        fetchPosts();
    }, 
    []);

    switch(type){
        case"newuser":
        DataUser={
            title:"NEW USERS",
            isUser: false,
            link:"Compared to last month",
            icon:(<PersonIcon className="icon"  style={{color:"#FDF02D", backgroundColor:"#0047AB"}}/>),
            
        };
        break;
        case"senior":
        DataSenior={
            title:"SENIOR CITIZENS",
            isUser: true,
            link:"Compared to last month",
            icon:(<ElderlyIcon className="icon" style={{color:"#FDF02D", backgroundColor:"#0047AB"}}/>),
        };
        break;
        case"families":
        DataFamilies={
            title:"NUMBER OF FAMILIES",
            isFamilies: false,
            link:"Compared to last month",
            icon:(<GroupIcon className="icon"  style={{color:"#FDF02D", backgroundColor:"#0047AB"}}/>),
        };
        break;
        case"evacuation":
        DataSites={
            title:"EVACUATION SITES",
            isSites: true,
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
        <span className="title">{DataUser.title}</span>
        <span className="counter">{DataUser.isUser} {totalUsers} </span>
        <span className="link">{DataUser.link}</span>
        </div>
        
        <div className="left">
        <span className="title">{DataSenior.title}</span>
        <span className="counter">{DataSenior.isSenior} {totalSeniors} </span>
        <span className="link">{DataSenior.link}</span>
        </div>

        <div className="left">
        <span className="title">{DataFamilies.title}</span> 
        <span className="counter">{DataFamilies.isFamilies} {totalFamilies} </span>
        <span className="link">{DataFamilies.link}</span>
        </div>

        <div className="left">
        <span className="title">{DataSites.title}</span> 
        <span className="counter">{DataSites.isSites} {totalSites} </span>
        <span className="link">{DataSites.link}</span>
        </div>



        
        <div className="right">
            <div className="percentage positive">
                <ArrowDropUpIcon/>
                {diff}  %
            </div>
            {DataUser.icon}
            {DataSenior.icon}
            {DataFamilies.icon}
            {DataSites.icon}
        </div>
    </div>
  )
}

export default Widget