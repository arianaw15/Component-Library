import React from 'react'
import {Box, Input} from '../../../../src/components/index'

const InputPage: React.FC = () => {
    return (
        <Box>
        <Input type='text'/>
        <Input type='checkbox' checked/>
        </Box>
    )
}

export {InputPage}