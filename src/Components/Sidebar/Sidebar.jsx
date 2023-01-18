import React,{useState} from "react";
import './Sidebar.css'

const Slidebar = (props)=>{
    const [listOpen, setListOpen] = useState("");

    const colors = ["#fe9b72","#fec971","#00d4fe","#b693fd","#e4ee91"];
    return(
        <>
            <div className="slidebar">
                <div className="slidebar_addBtn" onClick={()=>{setListOpen(!listOpen)}}>+</div>
                <ul className={`slidebar_list ${listOpen?"slidebar_list_active":""}  `} >
                    {
                    colors.map((item,index)=>(
                    <li key={index} 
                    className="slidebar_list_iteam" 
                    style={{backgroundColor:item}}
                    onClick={()=>props.addNote(item)}
                    />))
                    }
                </ul>
            </div>
        </>
    )
}

export default Slidebar;

