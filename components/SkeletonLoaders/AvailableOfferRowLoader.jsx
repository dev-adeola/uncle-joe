import { Box, Skeleton, Stack, Typography } from '@mui/material'
import React from 'react'

function AvailableOfferRowLoader() {
    return (
        <Box className='w-full flex items-center justify-between gap-2'>
            {/*  */}
            <Stack gap={2} direction={'row'} className='items-center'>
                <Skeleton variant='circular' width={50} height={50} />
                <div className='flex flex-col space-y-2 items-start'>
                    <Typography className='w-20 h-3' variant='subtitle1' >
                        <Skeleton variant='text' />
                    </Typography>
                    <Typography className='w-20 h-3' variant='subtitle1' >
                        <Skeleton variant='text' />
                    </Typography>

                </div>
            </Stack>
            {/*  */}
            <Typography className='w-24' variant='h4' >
                <Skeleton variant='text' />
            </Typography>
            {/*  */}
            <Stack gap={1} direction={'row'}>
                <Typography className='w-20 h-4' variant='subtitle1' >
                    <Skeleton variant='text' />
                </Typography>  <Typography className='w-20 h-4' variant='body1' >
                    <Skeleton variant='text' />
                </Typography>  <Typography className='w-20 h-4' variant='body1' >
                    <Skeleton variant='text' />
                </Typography>
            </Stack>
            {/*  */}
            <Stack gap={1} direction={'column'}>
                <Typography className='w-20 h-4' variant='body1' >
                    <Skeleton variant='text' />
                </Typography>
                <Typography className='w-20 h-4' variant='body1' >
                    <Skeleton variant='text' />
                </Typography>
                <Typography className='w-20 h-4' variant='body1' >
                    <Skeleton variant='text' />
                </Typography>
            </Stack>
            {/*  */}
            <Skeleton variant='rounded' width={120} height={40} />
        </Box>
    )
}

export default AvailableOfferRowLoader