import { useState } from "react";

const AddNote=({handleAddNote})=>{
    const [noteText,setNotetext]=useState('');
    const characterLimit=200;

    const handleChange=(event)=>{
        if(characterLimit-event.target.value.length>=0){
        setNotetext(event.target.value);
        }
    };
    const handleSaveClick=()=>{
        if(noteText.trim().length>0){
            handleAddNote(noteText);
            setNotetext('');
        }
    }
    return(
        <div className="note new">
            <textarea rows="8" 
            cols='10'
            placeholder="노트 내용을 입력해 주세요"
            value={noteText}
            onChange={handleChange}>                
            </textarea>
            <div className="note-footer">
                <small>{noteText.length} / 200</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};
export default AddNote;