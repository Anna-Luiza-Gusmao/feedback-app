import { HeaderContainer, Profile } from "./styles"
import LogoFeedbackApp from "../../assets/logo_header.png"
import { useState } from "react"
import Menu,  { MenuProps } from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button"
import Avatar from "@mui/material/Avatar"
import { SignOut } from "@phosphor-icons/react"
import { styled } from '@mui/material/styles'
import { useNavigate } from "react-router-dom"

const CustomButton = styled(Button)({
    backgroundColor: '#17171A',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem'
})

const CustomMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(() => ({
    '& .MuiPaper-root': {
        minWidth: 200,
        boxShadow: '0px 4px 8px 0px rgba(72, 69, 69, 0.25)',
        '& .MuiMenuItem-root': {
            fontFamily: 'Inter',
            '& .MuiSvgIcon-root': {
                marginRight: '0.5rem',
            },
        },
    },
}))

export function Header() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const navigate = useNavigate()

    const handleLogoutApplication = () => {
        navigate("/")
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <HeaderContainer>
            <img src={LogoFeedbackApp} alt="Logo Feedback App" />
            <div>
                <CustomButton
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    startIcon={<Avatar />}
                >
                    <Profile>
                        <p>Anna Luiza Santos</p>
                        <p>luizasgusmao@gmail.com</p>
                    </Profile>
                </CustomButton>
                <CustomMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                      'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleLogoutApplication}>
                        <SignOut size={20} />
                        Sair
                    </MenuItem>
                </CustomMenu>
            </div>
        </HeaderContainer>
    )
}