import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  Heading,
  Image,
  Box,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

export default function FAQPage() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      mt={10}
    >
      <Container maxW="container.xl">
        <Heading as="h1" mb={8} textAlign="center">
          Frequently Asked Questions
        </Heading>
        <Flex direction={{ base: "column", lg: "row" }}>
          <Box flex={{ base: 1, lg: 1 }} ml={{ base: 0, lg: 8 }}>
            <Image src="/gallery(9).jpg" alt="Photography" />
          </Box>
          <Box flex={{ base: 1, lg: 1 }}>
            <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
              <AccordionItem>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                >
                  <Text fontSize="md">
                    What are the benefits of participating in photography
                    sessions?
                  </Text>
                  <ChevronDownIcon fontSize="24px" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text color="gray.600">
                    Participating in photography sessions offers numerous
                    benefits, including improving your photography skills,
                    discovering new perspectives, and capturing memorable
                    moments. It's also an opportunity to explore your
                    creativity, connect with like-minded individuals, and
                    immerse yourself in the beauty of your surroundings.
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                >
                  <Text fontSize="md">
                    Can I use my smartphone for photography sessions?
                  </Text>
                  <ChevronDownIcon fontSize="24px" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text color="gray.600">
                    Yes, you can absolutely use your smartphone for our
                    photography sessions. Smartphone cameras have advanced
                    significantly in recent years, allowing you to capture
                    high-quality images with ease. Our guides will provide tips
                    and techniques specifically tailored to smartphone
                    photography, helping you maximize the potential of your
                    device.
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                >
                  <Text fontSize="md">
                    What kind of photography do you offer in Addis Ababa?
                  </Text>
                  <ChevronDownIcon fontSize="24px" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text color="gray.600">
                    We offer a diverse range of photography experiences in Addis
                    Ababa, from capturing the bustling streets and vibrant
                    markets to exploring the city's rich cultural heritage and
                    stunning landscapes. Our photography sessions include guided
                    tours to iconic landmarks, themed photo walks focusing on
                    specific aspects of Addis Ababa, and customized photo
                    adventures tailored to your interests and preferences.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                >
                  <Text fontSize="md">
                    How can I schedule a photography session in Addis Ababa?
                  </Text>
                  <ChevronDownIcon fontSize="24px" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text color="gray.600">
                    Scheduling a photography session in Addis Ababa is simple.
                    You can book a session by contacting us through our website,
                    email, or phone. We'll work closely with you to understand
                    your photography goals, preferences, and schedule. Whether
                    you're a beginner looking for guidance or a seasoned
                    photographer seeking unique perspectives, we'll ensure you
                    have an unforgettable photography experience in Addis Ababa.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                >
                  <Text fontSize="md">
                    What photography equipment do I need for your sessions?
                  </Text>
                  <ChevronDownIcon fontSize="24px" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text color="gray.600">
                    You don't need to have professional photography equipment to
                    participate in our sessions. Whether you're using a
                    smartphone, a compact camera, or a DSLR, our experienced
                    guides will help you make the most of your gear. We'll
                    provide tips on composition, lighting, and settings to
                    ensure you capture stunning images of Addis Ababa's beauty,
                    regardless of your equipment.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                >
                  <Text fontSize="md">
                    Can you recommend photography spots in Addis Ababa?
                  </Text>
                  <ChevronDownIcon fontSize="24px" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text color="gray.600">
                    Addis Ababa offers numerous picturesque locations ideal for
                    photography enthusiasts. Some popular spots include Meskel
                    Square, Holy Trinity Cathedral, National Museum of Ethiopia,
                    and Mount Entoto. Whether you're interested in street
                    photography, architectural shots, or nature photography, our
                    guides will take you to the best spots in the city to
                    capture stunning images.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
}
