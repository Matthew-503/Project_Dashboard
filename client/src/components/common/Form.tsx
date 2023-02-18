import React from 'react';
import { Box, Typography, FormControl, FormHelperText, TextField, TextareaAutosize, Stack, Select, MenuItem, Button } from '@pankod/refine-mui';

import { FormProps } from 'interfaces/common';
import CustomButton from './CustomButton';

const Form = ({ type, register, propertyImage, handleImageChange, formLoading, onFinishHandler, handleSubmit }: FormProps) => {
    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142d">
                {type} a Property
            </Typography>

            <Box mt={2.5} borderRadius='15px' padding='20px' bgcolor='#fcfcfc'>
                <form
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '20px',
                        gap: '20px',
                    }}
                    onSubmit={handleSubmit(onFinishHandler)}
                >

                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontSize: 16,
                                fontWeight: 500,
                                color: '#11142d',
                                margin: '10px'
                            }}
                        >
                            Enter property name
                        </FormHelperText>

                        <TextField
                            fullWidth
                            required
                            id='outlined-basic'
                            placeHolder='Title*'
                            color='info'
                            variant='outlined'
                            {...register('title', { required: true })}
                        />
                    </FormControl>

                    <FormControl sx={{ flex: 1 }}>
                        <FormHelperText
                            sx={{
                                fontSize: 16,
                                fontWeight: 500,
                                color: '#11142d',
                                margin: '10px'
                            }}
                        >
                            Enter Description
                        </FormHelperText>

                        <TextareaAutosize
                            minRows={5}
                            required
                            placeHolder='Enter Description'
                            color='info'
                            style={{
                                width: '100%',
                                fontSize: '16px',
                                color: '#919191',
                                background: 'transparent',
                                borderColor: 'rgba(0, 0, 0, 0.23)',
                                borderRadius: 6,
                                padding: 10,
                            }}
                            {...register('description', { required: true })}
                        />
                    </FormControl>

                    <Stack direction='row' gap={4}>
                        <FormControl sx={{ flex: 1 }}>
                            <FormHelperText
                                sx={{
                                    fontSize: 16,
                                    fontWeight: 500,
                                    color: '#11142d',
                                    margin: '10px 0'
                                }}
                            >
                                Select Property Type
                            </FormHelperText>

                            <Select
                                required
                                displayEmpty
                                color='info'
                                varient='outlined'
                                inputProps={{ 'aria-label': 'Without label' }}
                                defaultValue='apartment'
                                {...register('propertyType', { required: true })}
                            >
                                <MenuItem value="apartment">
                                    Apartment
                                </MenuItem>
                                <MenuItem value="villa">
                                    Villa
                                </MenuItem>
                                <MenuItem value="farmhouse">
                                    Farmhouse
                                </MenuItem>
                                <MenuItem value="condos">
                                    Condos
                                </MenuItem>
                                <MenuItem value="townhouse">
                                    Townhouse
                                </MenuItem>
                                <MenuItem value="duplex">
                                    Duplex
                                </MenuItem>
                                <MenuItem value="studio">
                                    Studio
                                </MenuItem>
                                <MenuItem value="chalet">
                                    Chalet
                                </MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl>
                            <FormHelperText
                                sx={{
                                    fontSize: 16,
                                    fontWeight: 500,
                                    color: '#11142d',
                                    margin: '10px'
                                }}
                            >
                                Enter property price
                            </FormHelperText>

                            <TextField
                                fullWidth
                                required
                                id='outlined-basic'
                                type='number'
                                color='info'
                                variant='outlined'
                                {...register('price', { required: true })}
                            />
                        </FormControl>
                    </Stack>

                    <FormControl>
                        <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d' }}>Enter Location</FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            placeHolder='Location*'
                            color="info"
                            variant="outlined"
                            {...register('location', { required: true })}
                        />
                    </FormControl>

                    <Stack direction='column' gap={1} justifyContent='center' mb={2}>
                        <Stack direction='row' gap={2}>
                            <Typography fontSize={16} fontWeight={500} color='#11142d' my='10px'>
                                Property Photo
                            </Typography>

                            <Button
                                component='label'
                                sx={{
                                    width: 'fit-content',
                                    fontSize: 16,
                                    textTransform: 'capitalize',
                                    color: '#2ed480',
                                }}
                            >
                                Upload *
                                <input
                                    hidden
                                    type='file'
                                    accept='image/*'
                                    onChange={(e) => {
                                        // @ts-ignore
                                        handleImageChange(e.target.files[0])
                                    }}
                                />
                            </Button>
                        </Stack>

                        <Typography fontSize={16} fontWeight={500} sx={{ wordBreak: 'break-all' }}>
                            {propertyImage?.name}
                        </Typography>
                    </Stack>

                    <CustomButton
                        type='submit'
                        title={formLoading ? 'Submitting...' : 'Submit'}
                        color='#fcfcfc'
                        backgroundColor='#475be8'
                    />
                </form>
            </Box>
        </Box>
    )
}

export default Form