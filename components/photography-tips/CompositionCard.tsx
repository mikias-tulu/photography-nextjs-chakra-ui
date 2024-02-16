import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    Icon,
    VStack,
    HStack,
  } from '@chakra-ui/react'
  import { CheckIcon } from '@chakra-ui/icons'
  

  const features = [
    {
      id: 1,
      title: 'Rule of Thirds',
      text: 'Compose your photos by dividing the frame into thirds both horizontally and vertically, and placing key elements along these lines or at their intersections.',
    },
    {
      id: 2,
      title: 'Leading Lines',
      text: 'Use natural or man-made lines in your composition to lead the viewer’s eye through the image, creating depth and visual interest.',
    },
    {
      id: 3,
      title: 'Symmetry and Patterns',
      text: 'Look for symmetrical subjects or patterns in your surroundings to create visually appealing compositions that draw the viewer in.',
    },
    {
      id: 4,
      title: 'Negative Space',
      text: 'Incorporate negative space around your main subject to emphasize it and create a sense of balance and simplicity in your composition.',
    },
    {
      id: 5,
      title: 'Foreground Interest',
      text: 'Include objects in the foreground of your composition to add depth and context, leading the viewer’s eye into the image.',
    },
  ]
  
  export default function MobilePhotographyComposition() {
    return (
      <Box p={4} mt={8}>
        <Container maxW={'6xl'}>
          <Heading as="h1" fontSize={'3xl'} mb={4}>
            Mobile Photography Composition Techniques
          </Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Elevate your mobile photography with these composition techniques that will help you capture stunning and compelling images.
          </Text>
  
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} mt={8}>
            {features.map((feature) => (
              <HStack key={feature.id} align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={'gray.600'}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    )
  }
  