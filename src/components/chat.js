import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Chat() {
    return(
        <div className="chat">

            <div className="chat__header">
                <div className="chat__header_info">
                    <h3>Chat Name</h3>
                    <p>Visto l'ultima volta...</p>                    
                </div>
                <div className="chat__header_right">
                    <IconButton>
                        <SearchOutlinedIcon></SearchOutlinedIcon>
                    </IconButton> 
                    <IconButton>
                        <AttachFileOutlinedIcon></AttachFileOutlinedIcon>
                    </IconButton> 
                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>
                </div>
            </div>

            
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Mike</span>
                    Messages
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Mike</span>
                    Messages
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Mike</span>
                    Messages
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
            </div>

            <div className="chat__footer">
                <iconButton>
                    <InsertEmoticonIcon />
                </iconButton>
                <form>
                    <input placeholder="Scrivi un messaggio..."></input>
                    <button type="submit"><SendOutlinedIcon /></button>
                </form>
                <iconButton>
                    <MicIcon />
                </iconButton>
            </div>
        </div>
    );
}

export default Chat;