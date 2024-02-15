import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
  Select,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react"
import { SetStateAction, useState } from "react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"

export default function ContactUs() {
  const [showPassword, setShowPassword] = useState(false)
  const [selectedOption, setSelectedOption] = useState("Feedback")

  const handleSelectChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSelectedOption(event.target.value)
  }
  

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      pt={8} 
    >
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
        mt={8} 
        maxW={"xl"} 
      >
        <Heading fontSize={"4xl"} textAlign={"center"} mb={6}>
          Contact Us
        </Heading>
        <Text fontSize={"lg"} color={"gray.600"} textAlign={"center"} mb={6}>
          To leave feedback, sponsor, or request photo removal ✌️
        </Text>
        <FormControl id="firstName" isRequired mb={4}>
          <FormLabel>First Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="lastName" mb={4}>
          <FormLabel>Last Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email" isRequired mb={4}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="subject" isRequired mb={4}>
          <FormLabel>Subject</FormLabel>
          <Select value={selectedOption} onChange={handleSelectChange}>
            <option value="Feedback">Feedback</option>
            <option value="Sponsorship">Sponsorship</option>
            <option value="Photo Removal Request">Photo Removal Request</option>
          </Select>
        </FormControl>
        <FormControl id="message" isRequired mb={4}>
          <FormLabel>Message</FormLabel>
          <Textarea rows={4} />
        </FormControl>
        <Box textAlign={"center"}>
          <Button
            loadingText="Submitting"
            size="lg"
            bg={"yellow.400"}
            color={"white"}
            _hover={{
              bg: "yellow.500",
            }}
            width="full"
            mb={4}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Flex>
  )
}
