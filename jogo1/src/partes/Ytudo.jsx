import Box from '@mui/material/Box'
import Ycabecalho from './Ycabecalho'
import Ycorpo from './Ycorpo'
import Yrodape from './Yrodape'

function Ytudo() {

    return (

        <Box
        
        width={'100vh'}
        border={'2px solid black'}

        display={'flex'}
        justifyContent={'space-between'}
        flexDirection={'column'}
        >
            <Ycabecalho />
            <Ycorpo />
            <Yrodape />

        </Box>

    )
}

export default Ytudo