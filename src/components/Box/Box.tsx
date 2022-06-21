import React from 'react'

interface Props {
    children: React.ReactNode;
}
const Box: React.FC<Props> = ({children}) => {
    return (
        <div>{children}</div>
    )
}

export {Box}