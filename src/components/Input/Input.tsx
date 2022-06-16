import React, {} from 'react'
import { Box } from '../index'


interface Props {
    type: string;
}

const Input: React.FC<Props>  = () => {

    return (
        <Box >
            <input />
        </Box>
    )
}

export { Input }