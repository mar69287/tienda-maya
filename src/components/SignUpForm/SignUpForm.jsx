import { useState } from 'react';
import { signUp } from '../../utilities/users-service';
import { Box, Button, Stack, Heading, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm({ setUser }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  });

  const navigate = useNavigate();

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = await signUp(formData);
      setUser(user);
      navigate('/'); // Navigate to the home page
    } catch {
      setFormData({ ...formData, error: 'Sign Up Failed - Try Again' });
    }
  };

  const disable = formData.password !== formData.confirm;

  return (
    <Stack width={{ base: "100%", md: "50%" }} m="auto">
      <Box>
        <Stack spacing={4}>
          <Heading textAlign={'center'} fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>Sign Up</Heading>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </FormControl>
          <FormControl id="confirm" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
          </FormControl>
          <Button background={'rgb(230, 137, 50)'} color={'white'} disabled={disable} onClick={handleSubmit}>
            Create Account
          </Button>
          {formData.error && <Text color="red.500">{formData.error}</Text>}
        </Stack>
      </Box>
    </Stack>
  );
}
