import React from 'react';
import { Box, Typography, Stack } from '@pankod/refine-mui';
import { propertyReferralsInfo } from 'constants/index';

interface ProgressBarProps {
    title: string,
    percentage: number,
    color: string,
}

const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => (
    <Box width='100%'>
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
        >
            <Typography fontSize={16} fontWeight={500} color="#11142d">
                {title}
            </Typography>

            <Typography fontSize={16} fontWeight={500} color="#11142d">
                {percentage}%
            </Typography>
        </Stack>

        <Box
            width='100%'
            height='8px'
            position='relative'
            bgcolor='#e4e8ef'
            mt={2}
            borderRadius={1}
        >
            <Box
                width={`${percentage}%`}
                height='100%'
                position='absolute'
                bgcolor={color}
                borderRadius={1}
            >

            </Box>
        </Box>
    </Box>
)

const PropertyReferrals = () => {
    return (
        <Box
            id="chart"
            display="flex"
            flex={1}
            flexDirection="column"
            p={4}
            minWidth={490}
            bgcolor="#fcfcfc"
            borderRadius="15px"
        >
            <Typography fontSize={18} fontWeight={600} color="#11142d">
                Property Referrals
            </Typography>

            <Stack direction='column' my='20px' gap={4}>
                {propertyReferralsInfo.map((bar) =>
                    <ProgressBar key={bar.title} {...bar} />
                )}
            </Stack>
        </Box>
    )
}

export default PropertyReferrals