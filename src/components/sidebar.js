import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from './sidebarChat';

function Sidebar() {
    return(
        <div className = "sidebar">
            <div className="sidebar__header">

                <div className="sidebar__header_left">
                    <IconButton>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </IconButton>    
                </div>

                <div className="sidebar__header_right">
                    <IconButton>
                        <DonutLargeIcon></DonutLargeIcon>
                    </IconButton> 
                    <IconButton>
                        <ChatIcon></ChatIcon>
                    </IconButton> 
                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton> 
                </div>

            </div>

            <div className="sidebar__search">
                <div className="sidebar__search_container">
                   <SearchOutlinedIcon></SearchOutlinedIcon>
                   <input placeholder="Cerca o inizia una nuova chat"></input>
                </div>    
            </div>

            <div className="sidebar__chat">
                <SidebarChat />
            </div>
        </div>

    );
}

export default Sidebar;