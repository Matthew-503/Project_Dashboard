import ReactApexChart from 'react-apexcharts';
import { Box, Typography, Stack } from '@pankod/refine-mui';
import { ArrowCircleUpRounded } from '@mui/icons-material';

import { TotalRevenueOptions, TotalRevenueSeries } from './chart.config';

const TotalRevenue = () => {
    return (
        <Box
            id="chart"
            display="flex"
            flex={1}
            flexDirection="column"
            p={4}
            bgcolor="#fcfcfc"
            borderRadius="15px"
        >
            <Typography fontSize={18} fontWeight={600} color="#11142d">
                Total Revenue
            </Typography>

            <Stack direction="row" my="20px" gap={4} flexWrap="wrap">
                <Typography fontSize={28} fontWeight={700} color="#11142d">
                    $236,535
                </Typography>

                <Stack direction="row" alignItems="center" gap={1}>
                    <ArrowCircleUpRounded sx={{ fontSize: 25, color: '#475be8' }} />
                    <Stack>
                        <Typography fontSize={15} color="#475be8">
                            0.8%
                        </Typography>

                        <Typography fontSize={12} color="#808191">
                            Than Last Month
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>

            <ReactApexChart
                series={TotalRevenueSeries}
                type='bar'
                beight={310}
                options={TotalRevenueOptions}
            />
        </Box>
    )
}

export default TotalRevenue