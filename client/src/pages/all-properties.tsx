import React from 'react';
import { Add } from '@mui/icons-material';
import { useList } from '@pankod/refine-core';
import { Box, Stack, Typography } from '@pankod/refine-mui';
import { useNavigate } from '@pankod/refine-react-router-v6';
import { PropertyCard, CustomButton } from 'components';

const AllProperties = () => {
    const navigate = useNavigate();
    return (
        <Box>
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
                <Typography fontSize={25} fontWeight={700} color="#11142d">
                    All Properties
                </Typography>

                <CustomButton
                    title='Add Property'
                    handleClick={() => navigate('/properties/create')}
                    color='#fcfcfc'
                    backgroundColor='#475be8'
                    icon={<Add />}
                />
            </Stack>
        </Box>
    )
}

export default AllProperties