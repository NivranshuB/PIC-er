import { Heading, Center } from "@chakra-ui/react"
import BackButton from "../components/BackButton";

export const ErrorPage = () => {
  return (
    <>
      <BackButton />

      <Center>
        <Heading fontSize="4xl" color="accent">404: Page not found</Heading>
      </Center>
    </>
  );
};
