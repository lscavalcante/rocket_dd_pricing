import React, { ReactElement } from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    width?: string | number
    disable?: boolean
    transparent?: boolean
}

export function Button(data: ButtonProps) {
    const {
        title,
        width = '100%',
        disable = false,
        transparent = false,
        ...props
    } = data;


    function isDisable(): boolean {
        if (props.onClick == null || undefined || disable) return true;

        return false
    }


    return <button
        disabled={isDisable()}
        style={{ width: width }}
        className={
            `${styles.button}  
             ${ data.transparent ? styles.transparent_button: null}
             `
        }
        {...props}>
        {title}
    </button>
}

