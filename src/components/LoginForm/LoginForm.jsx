import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';
import { FormControl, FormLabel, Input, Button, Text, VStack, Heading, Stack } from "@chakra-ui/react";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
      navigate('/'); 
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <Stack width={{ base: "100%", md: "50%" }} m="auto">
      <VStack spacing={4}>
        <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>Login</Heading>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" value={credentials.email} onChange={handleChange} required />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" value={credentials.password} onChange={handleChange} required />
        </FormControl>
        <Button background={'rgb(230, 137, 50)'} color={'white'} type="submit" onClick={handleSubmit}>
          Continue
        </Button>
        {error && <Text color="red.500">{error}</Text>}
      </VStack>
    </Stack>
  );
}
