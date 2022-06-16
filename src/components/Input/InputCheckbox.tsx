import React from 'react'
import {Box, Input} from '../index'

interface Props {
    checked: boolean;

}
const InputCheckbox: React.FC<Props> = () => {
    return (
        <Box>
            <Input type='checkbox'></Input>
        </Box>
    )
}

export default InputCheckbox