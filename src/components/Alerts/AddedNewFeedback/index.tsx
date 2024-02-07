import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

interface IAddedNewFeedbackSuccessProps {
    openAddedNewFeedbackSuccess: boolean,
    setOpenAddedNewFeedbackSuccess: React.Dispatch<React.SetStateAction<boolean>>
}

export function AlertAddedNewFeedbackSuccess({ 
    openAddedNewFeedbackSuccess, 
    setOpenAddedNewFeedbackSuccess 
}: IAddedNewFeedbackSuccessProps) {
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }

        setOpenAddedNewFeedbackSuccess(false)
    }

    return (
        <Snackbar
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            open={openAddedNewFeedbackSuccess}
            autoHideDuration={4000}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
            >
                Feedback cadastrado com sucesso!
            </Alert>
        </Snackbar>
    )
}