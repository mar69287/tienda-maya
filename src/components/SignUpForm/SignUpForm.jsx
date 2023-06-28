import { Component } from 'react'
import { signUp } from '../../utilities/users-service'
import { Box, Button, Stack, Heading, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';

export default class SignUpForm extends Component {
  state = {
      name: '',
      email: '',
      password: '',
      confirm: '',
      error: ''
  }

  handleChange = (evt) => {
      this.setState({
          [evt.target.name]: evt.target.value,
          error: ''
      })
  }

  handleSubmit = async (evt) => {
      evt.preventDefault();
      try {
        const formData = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        }
        const user = await signUp(formData)
        this.props.setUser(user)
      } catch {
        this.setState({ error: 'Sign Up Failed - Try Again' })
      }
  } 

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <Stack width={{ base: "100%", md: "50%" }} m="auto">
        <Box p={8}>
          <Stack spacing={4}>
            <Heading textAlign={'center'} fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>Sign Up</Heading>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            </FormControl>
            <FormControl id="confirm" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            </FormControl>
            <Button background={'rgb(230, 137, 50)'} color={'white'} disabled={disable} onClick={this.handleSubmit}>
              Create Account
            </Button>
            {this.state.error && <Text color="red.500">{this.state.error}</Text>}
          </Stack>
        </Box>
      </Stack>
    );
  }
}