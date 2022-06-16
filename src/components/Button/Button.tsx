import React from 'react'
import cx from 'classnames'


interface Props {
    children: React.ReactNode;
    isError?: boolean;
    onClick: () => void;
}

const Button: React.FC<Props> = ({children, isError, onClick}) => {
const classNames = cx('button', {
    'button--is-error': isError,
})
    return(
        <button className = {classNames} onClick={onClick} >{children}</button>
    )
}