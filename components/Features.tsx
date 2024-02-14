import React, { useState } from 'react';
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons";

import { FaCamera, FaMapMarkerAlt, FaCity, FaShoppingBag, FaGlobeAfrica } from 'react-icons/fa';
import { ReactElement } from "react"

interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
  description: string
}

const Feature = ({ text, icon, iconBg, description }: FeatureProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Stack direction={"column"}>
      <Stack
        direction={"row"}
        align={"center"}
        onClick={toggleDescription}
        cursor="pointer"
      >
        <Flex
          w={8}
          h={8}
          align={"center"}
          justify={"center"}
          rounded={"full"}
          bg={iconBg}
        >
          {icon}
        </Flex>
        <Text fontWeight={600} mr={2}>{text}</Text>
        <ChevronDownIcon w={5} h={5} />
      </Stack>
      {isOpen && (
        <Text fontSize="sm">{description}</Text>
      )}
    </Stack>
  )
}

export default function SplitWithImage() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Story
          </Text>
          <Heading>Capturing the Essence of Addis Ababa Streets Through Mobile Lenses</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
          Me and my friends, we're dedicated to capturing the vibrant spirit and unique beauty of Addis Ababa's streets. 
          With a passion for storytelling through images, we aim to showcase the rich culture, diverse communities, 
          and everyday moments that make Addis Ababa a truly special place.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <FaCamera color={"yellow.500"} size={20} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Capture Authentic Street Scenes"}
              description={"Immerse yourself in the vibrant energy of Addis Ababa's streets and capture authentic moments that tell stories."}
            />
            <Feature
              icon={<FaMapMarkerAlt color={"green.500"} size={20} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Explore Diverse Neighborhoods"}
              description={"Embark on a journey through the diverse neighborhoods of Addis Ababa, each offering a unique perspective and cultural experience."}
            />
            <Feature
              icon={
                <FaCity color={"purple.500"} size={20} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Showcase Urban Transformation"}
              description={"Witness the ongoing transformation of Addis Ababa's urban landscape and capture the essence of change through your lens."}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "/addis-feature.jpg"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}
