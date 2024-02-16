import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useDisclosure,
  Alert,
  AlertIcon,
  Checkbox,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";


const tips = [
  {
    id: 1,
    title: "Use Natural Light",
    description:
      "Take advantage of natural light sources for better mobile photos.",
  },
  {
    id: 2,
    title: "Experiment with Angles",
    description:
      "Try different angles and perspectives to capture unique shots.",
  },
  {
    id: 3,
    title: "Use Gridlines",
    description:
      "Enable gridlines on your camera app to help compose your shots.",
  },
  {
    id: 4,
    title: "Keep it Steady",
    description: "Hold your phone steady or use a tripod for sharper images.",
  },
];

export default function PhotographyTips() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box p={4} mt={8}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>
          Photography Tips with Mobile Equipment
        </Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Elevate your mobile photography game with these simple tips and
          techniques.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {tips.map((tip) => (
            <HStack key={tip.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{tip.title}</Text>
                <Text color={"gray.600"}>{tip.description}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>

      {/* Modal with Photography Equipment */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Heading mb={4}>Essential Photography Equipment for Mobile</Heading>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Equipment</Th>
                  <Th>Description</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Image src="https://via.placeholder.com/50" alt="Tripod" />
                  </Td>
                  <Td>Sturdy tripod for stable shots</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Image src="https://via.placeholder.com/50" alt="Lens" />
                  </Td>
                  <Td>External lenses for enhanced creativity</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Image
                      src="https://via.placeholder.com/50"
                      alt="Lighting"
                    />
                  </Td>
                  <Td>Portable lighting for low-light situations</Td>
                </Tr>
              </Tbody>
            </Table>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Box mt={8}>
        <HStack>
          {/* Image on the side */}
          <Image
            src="/gallery(6).jpg"
            boxSize="500px"
            objectFit="cover"
            alt="Sample Image"
            display={{ base: "none", md: "block" }}
          />

          {/* Checkboxes */}
          <VStack align="start">
            <Checkbox>Enable HDR mode for better dynamic range</Checkbox>
            <Checkbox>Experiment with long exposure shots</Checkbox>
            <Checkbox>Use manual focus for precise control</Checkbox>
          </VStack>
        </HStack>
      </Box>

      {/* Alert */}
      <Alert status="info" mt={8}>
        <AlertIcon />
        <Text fontSize="lg" ml={2}>
          Don't forget to experiment with different settings!
        </Text>
      </Alert>

      {/* Additional Content */}
      <Box mt={8}>
        <Heading mb={4}>Tips for Mobile Photography</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Elevate your mobile photography skills with these handy tips and
          techniques. Whether you're a beginner or a seasoned pro, these tips
          will help you capture stunning images with your smartphone.
        </Text>
        <Stack spacing={6}>
          <Heading as="h1" size="4xl" noOfLines={1}>
            (4xl) Mastering Composition
          </Heading>
          <Heading as="h2" size="3xl" noOfLines={1}>
            (3xl) Using Natural Light
          </Heading>
          <Heading as="h2" size="2xl">
            (2xl) Exploring Perspectives
          </Heading>
          <Heading as="h2" size="xl">
            (xl) Experimenting with Angles
          </Heading>
          <Heading as="h3" size="lg">
            (lg) Harnessing the Rule of Thirds
          </Heading>
          <Heading as="h4" size="md">
            (md) Understanding Exposure
          </Heading>
          <Heading as="h5" size="sm">
            (sm) Perfecting Focus
          </Heading>
          <Heading as="h6" size="xs">
            (xs) Utilizing Mobile Editing Apps
          </Heading>
        </Stack>
      </Box>
    </Box>
  );
}
