import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

interface IAddedNewFeedbackErrorProps {
    openAddedNewFeedbackError: boolean,
    setOpenAddedNewFeedbackError: React.Dispatch<React.SetStateAction<boolean>>
}

export function AlertAddedNewFeedbackError({ 
    openAddedNewFeedbackError, 
    setOpenAddedNewFeedbackError 
}: IAddedNewFeedbackErrorProps) {
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }

        setOpenAddedNewFeedbackError(false)
    }

    return (
        <Snackbar
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            open={openAddedNewFeedbackError}
            autoHideDuration={4000}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                severity="error"
                variant="filled"
                sx={{ width: '100%' }}
            >
                <b>Ops!</b> Houve um erro ao tentar adicionar um novo feedback. Tente novamente mais tarde.
            </Alert>
        </Snackbar>
    )
}