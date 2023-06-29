import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Box, Flex, HStack, Text, VStack, Stack } from '@chakra-ui/react';
import { useState } from 'react';

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <Box height="100vh" display="flex" alignItems="center" px={{base: 3, lg: 0}}>
            <Flex alignItems="center" direction="column" justifyContent="center" width="100%">
                {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
                <HStack>
                    {showLogin ? (
                    <>
                        <VStack>
                        <Stack paddingTop={4} direction={{base: 'column', md: 'row'}}>
                            <Text>New to Tienda Maya?{' '}</Text>
                            <Text as={'b'} _hover={{ color: 'rgb(230, 137, 50)' }} cursor={'pointer'} onClick={() => setShowLogin(false)}>Create your account</Text>
                        </Stack>
                        <Text>(Demo: email: user@user.com password: user)</Text>
                        </VStack>
                    </>
                    ) : (
                    <HStack mt={3}>
                        <Text>Already have an account?{' '}</Text>
                        <Text as={'b'} _hover={{ color: 'rgb(230, 137, 50)' }} cursor={'pointer'} onClick={() => setShowLogin(true)}>Log in</Text>
                    </HStack>
                    )}
                </HStack>
            </Flex>
        </ Box>
    )
}