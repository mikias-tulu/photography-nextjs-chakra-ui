import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  Radio,
  RadioGroup,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const SubmitPhotoCard = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState<File | undefined>(undefined);
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [purpose, setPurpose] = useState<string>("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile =
      event.target.files && event.target.files.length > 0
        ? event.target.files[0]
        : undefined;
    setFile(selectedFile);
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const handlePurposeChange = (nextValue: string) => {
    setPurpose(nextValue);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  const handleTagChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTags = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    ) as never[];
    setTags(selectedTags);
  };

  const handleAgreeTermsChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  const handleSubmit = () => {
    console.log("Submitting photo...");
  };

  return (
    <Flex minH={"100vh"} mt={12}>
      <Box flex={1} bg={"gray.100"}>
        {/* Left Side - Image */}
        <Flex justify={"center"} align={"center"} h={"100vh"}>
          <img
            src="/gallery(8).jpg"
            alt="Outside Image"
            style={{ borderRadius: "8px", width: "100%", height: "auto" }}
          />
        </Flex>
      </Box>
      <Box flex={1} bg={"white"} p={8}>
        {/* Right Side - Form */}
        <Box maxW={"500px"} mx={"auto"}>
          <Heading fontSize={"2xl"}>Submit a Photo</Heading>
          <Text fontSize={"md"} color={"gray.600"}>
            If you took a photo with your phone and want it here ✌️
          </Text>
          <FormControl mb={4}>
            <FormLabel>Name</FormLabel>
            <Input type="text" value={name} onChange={handleNameChange} />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Phone Number</FormLabel>
            <Input type="text" value={phone} onChange={handlePhoneChange} />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Upload Photo</FormLabel>
            <Input type="file" onChange={handleFileChange} />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Street Address</FormLabel>
            <Input type="text" value={address} onChange={handleAddressChange} />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="Write a description of the photo..."
              value={description}
              onChange={handleDescriptionChange}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Purpose of the Photo</FormLabel>
            <RadioGroup value={purpose} onChange={handlePurposeChange}>
              <Radio value="personal">Personal</Radio>
              <Radio value="educational">Educational</Radio>
              <Radio value="artistic">Artistic</Radio>
            </RadioGroup>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Category</FormLabel>
            <Input
              type="text"
              value={category}
              onChange={handleCategoryChange}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Tags</FormLabel>
            <select multiple value={tags} onChange={handleTagChange}>
              <option value="landscape">Landscape</option>
              <option value="portrait">Portrait</option>
              <option value="street">Street</option>
              <option value="architecture">Architecture</option>
            </select>
          </FormControl>
          <FormControl mb={4}>
            <Checkbox isChecked={agreeTerms} onChange={handleAgreeTermsChange}>
              Agree to terms and conditions
            </Checkbox>
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
          <Text mt={2} fontSize="sm" textAlign="center">
            Unable to submit? <Link color={"blue.400"}>Contact Us</Link>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default SubmitPhotoCard;
