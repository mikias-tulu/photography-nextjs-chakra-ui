import {
    Box,
    Flex,
    Heading,
    SimpleGrid,
    Image,
    useColorModeValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
  } from "@chakra-ui/react"

  import { Highlight } from '@chakra-ui/react'

  import { useState } from "react"
  
  const GalleryPage = () => {
    const [selectedImage, setSelectedImage] = useState(null)
  
   
    const images = [
      "/gallery(1).jpg",
      "/gallery(2).jpg",
      "/gallery(3).jpg",
      "/gallery(4).jpg",
      "/gallery(5).jpg",
      "/gallery(6).jpg",
      "/gallery(7).jpg",
      "/gallery(8).jpg",
      "/gallery(9).jpg",
      "/gallery(10).jpg",
      "/gallery(11).jpg",
      "/gallery(12).jpg",
      "/gallery(13).jpg",
      "/gallery(14).jpg",
      "/gallery(15).jpg",
      "/gallery(16).jpg",
      "/gallery(17).jpg",
      "/gallery(18).jpg",
      "/gallery(19).jpg",
      "/gallery(20).jpg",
      "/gallery(21).jpg",
      "/gallery(22).jpg",
      "/gallery(23).jpg",
      "/gallery(24).jpg",
      "/gallery(25).jpg",
      "/gallery(26).jpg",
    ];
    
  
    const handleImageClick = (image) => {
      setSelectedImage(image)
    }
  
    const handleCloseModal = () => {
      setSelectedImage(null)
    }
  
    return (
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
        py={8}
      >
      
        <Box width={"100%"} maxW={"6xl"} px={8}>


        <Heading fontSize={"4xl"} textAlign={"center"} mb={8}>
          Addis Ababa Street Photography Gallery
        </Heading>

        <Heading lineHeight='tall' mb={4}>
          <Highlight
            query='Addis Ababa'
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
          >
            Discover and Get familiar with Addis Ababa through mobile photography.
          </Highlight>
        </Heading>


          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {images.map((image, index) => (
              <Box
                key={index}
                onClick={() => handleImageClick(image)}
                borderRadius={"md"}
                overflow={"hidden"}
                cursor={"pointer"}
                _hover={{
                  boxShadow: "md",
                }}
              >
                <Image
                  src={image}
                  alt={`Image ${index}`}
                  w={"full"}
                  h={"full"}
                  objectFit={"cover"}
                />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <Modal isOpen={!!selectedImage} onClose={handleCloseModal} size={"xl"}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <Image src={selectedImage} alt={"Selected Image"} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    )
  }
  
  export default GalleryPage
  