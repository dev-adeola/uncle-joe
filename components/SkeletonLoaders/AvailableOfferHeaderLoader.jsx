import { Box, Skeleton, Stack, Typography } from '@mui/material'
import React from 'react'

function AvailableOfferHeaderLoader() {
    return (
        <Box className='w-full h-12 px-4 bg-black/75'>
            <div className='py-3 flex items-center justify-between'>
                <Typography className='w-20 h-3' variant='subtitle1' >
                    <Skeleton variant='text' />
                </Typography>
                <Typography className='w-20 h-3' variant='subtitle1' >
                    <Skeleton variant='text' />
                </Typography>
                <Typography className='w-20 h-3' variant='subtitle1' >
                    <Skeleton variant='text' />
                </Typography>
                <Typography className='w-20 h-3' variant='subtitle1' >
                    <Skeleton variant='text' />
                </Typography>
                <Typography className='w-20 h-3' variant='subtitle1' >
                    <Skeleton variant='text' />
                </Typography>
            </div>
        </Box>
    )
}

export default AvailableOfferHeaderLoader