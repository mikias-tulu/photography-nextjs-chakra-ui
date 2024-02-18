import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Button,
  Stack,
} from '@chakra-ui/react'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


const BlogTags = ({ tags }: { tags: string[] }) => (
  <Wrap spacing={2} marginTop={4}>
    {tags.map((tag, index) => (
      <WrapItem key={index}>
        <Tag size={'md'} variant="solid" colorScheme="orange">
          {tag}
        </Tag>
      </WrapItem>
    ))}
  </Wrap>
)


const BlogAuthor = ({ name, date }: { name: string; date: Date }) => (
  <HStack marginTop={4} spacing="2" alignItems="center">
    <Image
      borderRadius="full"
      boxSize="40px"
      src="https://100k-faces.glitch.me/random-image"
      alt={`Avatar of ${name}`}
    />
    <Text fontWeight="medium">{name}</Text>
    <Text>—</Text>
    <Text>{date.toLocaleDateString()}</Text>
  </HStack>
)

const AboutUsPage = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1" mb={8}>
        About Us
      </Heading>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={8}>
        <Box flex={1}>
          <Image
            borderRadius="lg"
            src={
              '/gallery(3).jpg'
            }
            alt="Street Photography"
            objectFit="cover"
            mb={8}
          />
          <BlogTags tags={['Street Photography', 'Addis Ababa', 'Mobile Capture']} />
        </Box>
        <Box flex={1}>
  <Heading as="h2" size="lg" mb={4}>
    Our Story
  </Heading>
  <Text fontSize="xl" mb={4}>
    Our story begins with a group of friends passionate about capturing the essence of Addis Ababa&apos;s vibrant streets through the lens of our mobile phones. We set out on a journey to explore every corner of the city, from its bustling markets to its serene alleyways.
  </Text>
  <Text fontSize="xl" mb={4}>
    Armed with nothing but our phones and a shared love for photography, we embarked on urban adventures, seeking to uncover the hidden gems and everyday moments that define Addis Ababa&apos;s unique charm.
  </Text>
  <Text fontSize="xl" mb={8}>
    With each click of the shutter, we aimed to preserve the spirit of the city and share our perspective with the world. Our journey is a testament to the power of photography to capture the beauty of everyday life and the rich tapestry of experiences found in Addis Ababa.
  </Text>
  <Divider />
  <Heading as="h2" size="lg" my={8}>
    Our Mission
  </Heading>
  <VStack spacing={4} align="start">
    <Text fontSize="xl">
      Our mission is to capture the essence of Addis Ababa&apos;s streets through mobile lenses and showcase the vibrant culture and diversity of the city.
    </Text>
    <Text fontSize="xl">
      We believe in storytelling through images and aim to share the unique stories and everyday moments that make Addis Ababa special.
    </Text>
    <Text fontSize="xl">
      Through our photography, we hope to inspire others to explore the beauty of urban life and appreciate the rich tapestry of experiences found in Addis Ababa.
    </Text>
  </VStack>
  <Divider />
  <Heading as="h2" size="lg" my={8}>
    Meet the Team
  </Heading>
  <Tabs variant='unstyled'>
  <TabList>
    <Tab _selected={{ color: 'white', bg: 'yellow.500' }}>Miki tulu</Tab>
    <Tab _selected={{ color: 'white', bg: 'green.400' }}>Neba Seyium</Tab>
    <Tab _selected={{ color: 'white', bg: 'blue.400' }}>Faf Melese</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Box p={4}>
        <Image src="/placeholder-user.jpg" alt="Miki tulu" borderRadius="full" boxSize="150px" />
        <Heading as="h3" size="md" mt={4}>Miki tulu</Heading>
        <Text>Computer Science Student & Photographer</Text>
        <Text mt={2}>
          Miki is a passionate photographer with a keen eye for capturing the essence of street life. When he&apos;s not coding, you will often find him exploring the streets of Addis Ababa with his trusty smartphone, seeking out unique photo opportunities.
        </Text>
      </Box>
    </TabPanel>
    <TabPanel>
      <Box p={4}>
        <Image src="/placeholder-user.jpg" alt="Neba Seyium" borderRadius="full" boxSize="150px" />
        <Heading as="h3" size="md" mt={4}>Neba Seyium</Heading>
        <Text>Computer Science Student & Photography Enthusiast</Text>
        <Text mt={2}>
          Neba&apos;s love for photography blossomed during her travels, and she&apos;s always eager to capture the beauty of different cultures and landscapes. As a computer science student, she enjoys merging her technical skills with her creative pursuits.
        </Text>
      </Box>
    </TabPanel>
    <TabPanel>
      <Box p={4}>
        <Image src="/placeholder-user.jpg" alt="Faf Melese" borderRadius="full" boxSize="150px" />
        <Heading as="h3" size="md" mt={4}>Faf Melese</Heading>
        <Text>Computer Science Student & Mobile Photography Enthusiast</Text>
        <Text mt={2}>
          a fascination with mobile photography stems from her desire to document everyday moments and share stories through images. As a computer science student, she sees photography as a creative outlet that complements her technical studies.
        </Text>
      </Box>
    </TabPanel>
  </TabPanels>
</Tabs>
</Box>

      </Stack>
    </Container>
  )
}

export default AboutUsPage
