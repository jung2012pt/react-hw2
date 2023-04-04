import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
function moviesRow(props) {

  const { name, info, Rating, Genre, OriginalLanguage, Director, Producer, Writer, TheatersDate, StreamingDate, BoxOfficeUSA
    , Runtime, Distributor, SoundMix, AspectRatio, collection } = props;
  return (
    <Flex my="1rem" justifyContent="space-between">
      <Flex alignItems="left">
        <Box
          me="12px"
          borderRadius="50%"
          border="1px solid"
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="35px"
          h="35px"
        >
        </Box>
        <Flex direction="column">
          <Text
            fontSize={{ sm: "md", md: "lg", lg: "md" }}
            fontWeight="bold"
          >
            {name}
          </Text>
          <Text
            fontSize={{ sm: "md", md: "lg", lg: "md" }}
            fontWeight="bold"
          >
            {info}
          </Text>
          <Text
            fontSize={{ sm: "md", md: "lg", lg: "md" }}
            fontWeight="bold"
          >
            {Rating}
          </Text>
          <Text
            fontSize={{ sm: "md", md: "lg", lg: "md" }}
            fontWeight="bold"
          >
            {Genre}
          </Text>
          <Text
            fontSize={{ sm: "md", md: "lg", lg: "md" }}
            fontWeight="bold"
          >
            {OriginalLanguage}
          </Text>
          <Text
            fontSize={{ sm: "md", md: "lg", lg: "md" }}
            fontWeight="bold"
          >
            {Director}
          </Text>
          <Text
            fontSize={{ sm: "md", md: "lg", lg: "md" }}
            fontWeight="bold"
          >
            {Producer}
          </Text>
          <Text
            fontSize={{ sm: "md", md: "lg", lg: "md" }}
            fontWeight="bold"
          >
            {Writer}
          </Text>
          <Text
            fontSize={{ sm: "md", md: "lg", lg: "md" }}
            fontWeight="bold"
          >
            {TheatersDate}
          </Text>
          <Text
            fontSize={{ sm: "md", md: "lg", lg: "md" }}
            fontWeight="bold"
          >
            {StreamingDate}
          </Text>
          <Text
            fontSize={{ sm: "md", md: "lg", lg: "md" }}
            fontWeight="bold"
          >
            {BoxOfficeUSA}
          </Text>
          <Text
            fontSize={{ sm: "md", md: "lg", lg: "md" }}
            fontWeight="bold"
          >
            {Runtime}
          </Text>
          <Text
            fontSize={{ sm: "md", md: "lg", lg: "md" }}
            fontWeight="bold"
          >
            {Distributor}
          </Text>
          <Text
            fontSize={{ sm: "md", md: "lg", lg: "md" }}
            fontWeight="bold"
          >
            {SoundMix}
          </Text>
          <Text
            fontSize={{ sm: "md", md: "lg", lg: "md" }}
            fontWeight="bold"
          >
            {AspectRatio}
          </Text>
          <Text
            fontSize={{ sm: "md", md: "lg", lg: "md" }}
            fontWeight="bold"
          >
            {collection}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default movies;






















