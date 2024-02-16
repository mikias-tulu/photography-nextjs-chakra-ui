import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Card,
  CardHeader,
  CardBody,
  Stack,
} from "@chakra-ui/react";

const PostProcessingPage = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" fontSize="4xl" mb={4}>
        Post-Processing Tips for Stunning Images
      </Heading>

      <Text fontSize="lg" mb={6}>
        Enhance the visual appeal of your photos through effective
        post-processing techniques.
      </Text>

      <Image
        src="/addis-streets-march.jpg"
        boxSize="1000px"
        height="500px"
        objectFit="cover"
        alt="Post-Processing Example"
        mb={8}
      />

      <Card boxShadow="md" borderRadius="lg">
        <CardHeader>
          <Heading size="md">1. Color Correction</Heading>
        </CardHeader>
        <CardBody>
          <Text>
            Adjust the color balance and saturation to achieve the desired mood
            in your images.
          </Text>
        </CardBody>
      </Card>

      <Card boxShadow="md" borderRadius="lg" mt={6}>
        <CardHeader>
          <Heading size="md">2. Sharpening</Heading>
        </CardHeader>
        <CardBody>
          <Text>
            Apply appropriate sharpening techniques to bring out finer details
            and enhance clarity.
          </Text>
        </CardBody>
      </Card>

      <Table variant="simple" mt={8}>
        <Thead>
          <Tr>
            <Th>Technique</Th>
            <Th>Description</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>3. Noise Reduction</Td>
            <Td>
              Use noise reduction tools to minimize graininess in high ISO
              images.
            </Td>
          </Tr>
          <Tr>
            <Td>4. Cropping</Td>
            <Td>
              Experiment with cropping to improve composition and focus on key
              elements.
            </Td>
          </Tr>
          <Tr>
            <Td>5. Vignette</Td>
            <Td>
              Add a subtle vignette to draw attention to the center of the
              image.
            </Td>
          </Tr>
        </Tbody>
      </Table>

      <Card boxShadow="md" borderRadius="lg" mt={8}>
        <CardHeader>
          <Heading size="md">6. Contrast Adjustment</Heading>
        </CardHeader>
        <CardBody>
          <Text>
            Fine-tune contrast settings to make your images more visually
            appealing and dynamic.
          </Text>
        </CardBody>
      </Card>

      <Stack direction="row" spacing={4} mt={8}>
        <Image
          src="/gallery(24).jpg"
          boxSize="300px"
          height="200px"
          objectFit="cover"
          alt="Post-Processing Example 1"
        />
        <Image
          src="/gallery(25).jpg"
          boxSize="300px"
          height="200px"
          objectFit="cover"
          alt="Post-Processing Example 2"
        />
        <Image
          src="/gallery(26).jpg"
          boxSize="300px"
          height="200px"
          objectFit="cover"
          alt="Post-Processing Example 3"
        />
      </Stack>
    </Container>
  );
};

export default PostProcessingPage;
