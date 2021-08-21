import * as React from 'react';
import NextLink from 'next/link';
import {
  Box,
  Link,
  Center,
  Button,
  Heading,
  HStack,
  IconButton,
  useColorMode,
  Spinner,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import { BiMoon, BiSun } from 'react-icons/bi';
import { signOut, useSession } from 'next-auth/client';
import Header from 'components/header';

export default function Home() {
  const [session, loading] = useSession();

  const alertProps = useDisclosure();

  const cancelRef = React.useRef<HTMLButtonElement>(null);
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === 'dark';
  return (
    <Box>
      <Head>
        <title>Fullstack boilerplate</title>
      </Head>
      <Header />
      <Center
        minH={{ base: 'auto', md: '100vh' }}
        p={4}
        pt={{ base: 40, md: 4 }}
      >
        <VStack spacing={6}>
          <Heading as="h1" textAlign="center">
            Welcome to the Fullstack boilerplate
          </Heading>
          {loading ? (
            <Center>
              <Spinner />
            </Center>
          ) : session?.user ? (
            <>
              <Heading as="h3" fontSize="2xl">
                Hello, {session.user.name}!
              </Heading>
              <HStack>
                <Button size="sm" variant="outline" onClick={() => signOut()}>
                  Logout
                </Button>
                <Button
                  size="sm"
                  colorScheme="red"
                  variant="outline"
                  onClick={alertProps.onOpen}
                >
                  Delete account
                </Button>
              </HStack>

              <AlertDialog
                {...alertProps}
                motionPreset="slideInBottom"
                isCentered
                leastDestructiveRef={cancelRef}
              >
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                      Delete account
                    </AlertDialogHeader>
                    <AlertDialogBody>
                      Are you sure? You can't undo this action afterwards.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                      <Button ref={cancelRef} onClick={alertProps.onClose}>
                        Cancel
                      </Button>
                      <Button colorScheme="red" ml={3}>
                        Delete
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            </>
          ) : (
            <HStack mt={4}>
              <NextLink passHref href="/api/auth/signin">
                <Button
                  as={Link}
                  colorScheme="blue"
                  sx={{ textDecor: 'none !important' }}
                >
                  Signin
                </Button>
              </NextLink>
            </HStack>
          )}
        </VStack>
      </Center>
      <Box pos="absolute" top={4} right={4}>
        <IconButton
          borderRadius="full"
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          variant="ghost"
          onClick={toggleColorMode}
          icon={<Box as={isDark ? BiSun : BiMoon} boxSize="20px" />}
        />
      </Box>
    </Box>
  );
}
