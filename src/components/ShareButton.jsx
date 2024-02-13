import ShareIcon from '@mui/icons-material/Share';
import { IconButton, Menu, MenuItem } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useState } from 'react';

function ShareButton({shareUrl, title}){
    const [anchorEl, setAnchorEl]=useState(null)

    const handleClick = (event)=>{
        setAnchorEl(event.target);
    };
    const handleClose = ()=>{
        setAnchorEl(null)
    }

    const handleShare = (platform) => {
        let shareUrl;
        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`;
                break;
            case 'whatsapp':
                shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(title + ': ' + shareUrl)}`;
                break;
            default:
                return;
        }
        window.open(shareUrl, '_blank');
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