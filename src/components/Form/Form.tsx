import React from 'react'


interface Props {
children: React.ReactNode
isSubmit: boolean
}

const Form: React.FC<Props> = ({children, isSubmit}) => {
    return (
        <form>{children}</form>
    )
}

export {Form}