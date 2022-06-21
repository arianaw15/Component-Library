import React from 'react'
import { Box, Form, Input } from '../../components/index'

interface Props {

}
const FormComponent: React.FC<Props> = () => {
    return (
        <Box>
            <Form isSubmit>
                <Input type='text' />
            </Form>
        </Box>

    )
}

export {FormComponent}