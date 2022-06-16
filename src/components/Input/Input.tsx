import React, {} from 'react'
import { Box } from '../index'


interface Props {
    checked?: boolean;
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