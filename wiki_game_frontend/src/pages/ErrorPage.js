import { Heading, Image, HStack, Box, Progress, Center, Text } from "@chakra-ui/react"
import { useState } from "react";
import BackButton from "../components/BackButton";
import HelpDoneButton from "../components/HelpDoneButton";

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
