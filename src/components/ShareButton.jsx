import ShareIcon from '@mui/icons-material/Share';
import { IconButton, Menu, MenuItem } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useState } from 'react';

function ShareButton({shareUrl}){
    const [anchorEl, setAnchorEl]=useState(null)

    const handleClick = (event)=>{
        setAnchorEl(event.target);
    };
    const handleClose = ()=>{
        setAnchorEl(null)
    }

    console.log(shareUrl)
    const handleShare = (platform) => {
        let Url;
        console.log(shareUrl)
        switch (platform) {
            case 'facebook': 
                Url = `https://www.facebook.com/dialog/share?app_id=redirect_uri&display=popup&href=${encodeURIComponent(shareUrl)}`;
                break;
            case 'twitter':
                Url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent('')}`;
                break;
            case 'whatsapp':
                Url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`;
                break;
            default:
                return;
        }
        window.open(Url, '_blank');
    };


        return (
            <>
                <IconButton aria-controls="share-menu" aria-haspopup="true" aria-label="share" onClick={handleClick}>
                    <ShareIcon />
                </IconButton>
                <Menu
                    id="share-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={() => handleShare('facebook')}>
                        <FacebookIcon />
                    </MenuItem>
                    <MenuItem onClick={() => handleShare('twitter')}>
                        <TwitterIcon />
                    </MenuItem>
                    <MenuItem onClick={() => handleShare('whatsapp')}>
                        <WhatsAppIcon />
                    </MenuItem>
                </Menu>
            </>
    )
}
export default ShareButton