import React from 'react';
import { Button, fontWeight, minWidth } from '@pankod/refine-mui';
import { CustomButtonProps } from 'interfaces/common';

const CustomButton = ({ type, fullWidth, icon, title, color, backgroundColor, handleClick }: CustomButtonProps) => {
    return (
        <Button
            type={type === 'submit' ? 'submit' : 'button'}
            sx={{
                width: fullWidth ? '100%' : 'fit-content',
                minWidth: 130,
                flex: fullWidth ? 1 : 'unset',
                padding: '10px 15px',
                fontSize: 16,
                fontWeight: 600,
                color,
                backgroundColor,
                gap: '10px',
                textTransform: 'capitalize',
                '&:hover': {
                    opacity: 0.9,
                    backgroundColor
                }
            }}

            onClick={handleClick}

        >
            {icon}
            {title}
        </Button>
    )
}

export default CustomButton