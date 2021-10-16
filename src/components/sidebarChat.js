import { Avatar } from "@mui/material";

const SidebarChat = () => {
    return(
        <div className="sidebarChat">
           <Avatar />
           <div className="sidebarChat__info">
               <h2>Name</h2>
               <p>Message</p>
           </div> 
        </div>
    )
}

export default SidebarChat;