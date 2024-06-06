import { Box, Container, Flex, Text, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Navigation Bar */}
      <Box as="header" bg="blue.500" color="white" py={4}>
        <Container maxW="container.md">
          <Flex justify="space-between" align="center">
            <Text fontSize="xl" fontWeight="bold">
              My Website
            </Text>
            <Flex>
              <Link as={RouterLink} to="/" px={2} color="white">
                Home
              </Link>
              <Link as={RouterLink} to="/about" px={2} color="white">
                About
              </Link>
              <Link as={RouterLink} to="/contact" px={2} color="white">
                Contact
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Box as="main" flex="1">
        <Container centerContent maxW="container.md" py={8}>
          <VStack spacing={4}>
            <Text fontSize="2xl">Welcome to My Website</Text>
            <Text>This is a simple React app with a basic structure.</Text>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.500" color="white" py={4}>
        <Container maxW="container.md">
          <Text textAlign="center">&copy; {new Date().getFullYear()} My Website. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;