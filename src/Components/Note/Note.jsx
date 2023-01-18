import React from "react";
import './Note.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

let timer=500,timeout;

const Note = (props)=>{
    const formatDate=(value)=>{
        // if(!value) return ""

        const date = new Date(value);
        const monthNanes =[
            'January','February','March','April','May','June','July','August','September','October','November','December'
        ]
        let hrs = date.getHours();
        let amPm = hrs>12?"PM":"AM"
        hrs =hrs?hrs:12
        hrs= hrs>12 ?hrs= hrs-12:hrs
        
        let min = date.getMinutes();
        min=min<10?"0"+min:min;

        let day = date.getDate();
        const month= monthNanes[date.getMonth()];

        return `${hrs}:${min} ${amPm} ${day} ${month}`
    }

    const debounce=(func)=>{
        clearTimeout(timeout);
        timeout= setTimeout(func,timer);
    }

    const updateText=(text,id)=>{
        debounce(()=>props.updateText(text,id))
    }
    return(
        <>
            <div className="note" style={{ backgroundColor : props.note.color}}>
                <textarea className="note_text" title="text" placeholder="Thought Of The Day"  rows="10" columns="10" defaultValue={props.note.text} 
                onChange={(event)=>updateText(event.target.value,props.note.id)}/>
                <div className="note_footer">
                    <p>{formatDate(props.note.time)}</p>
                    <DeleteForeverIcon className="note_delIcon" onClick={()=>props.deleteNote(props.note.id)}  />
                </div>
            </div>
        </>
    )
}

export default Note;
