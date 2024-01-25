import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

interface GoogleAuthErrorProps {
    openSnackbarGoogleAuthError: boolean,
    setOpenSnackbarGoogleAuthError: React.Dispatch<React.SetStateAction<boolean>>
}

export function AlertGoogleAuthError({ openSnackbarGoogleAuthError, setOpenSnackbarGoogleAuthError }: GoogleAuthErrorProps) {
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }

        setOpenSnackbarGoogleAuthError(false)
    }

    return (
        <Snackbar
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            open={openSnackbarGoogleAuthError}
            autoHideDuration={4000}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                severity="error"
                variant="filled"
                sx={{ width: '100%' }}
            >
                <b>Ops!</b> Houve um erro ao tentar efetuar o login. Tente novamente mais tarde.
            </Alert>
        </Snackbar>
    )
}