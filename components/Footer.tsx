'use client'

import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Box as="a" href={'/'}>
            Home
          </Box>
          <Box as="a" href={'/dog-health'}>
            Dog Health 
          </Box>
          <Box as="a" href={'/dog-training'}>
            Dog 
          </Box>
          <Box as="a" href={'/blog'}>
            Blog
          </Box>
        </Stack>
        <Text>© Vetti. All rights reserved</Text>
      </Container>
    </Box>
  )
}