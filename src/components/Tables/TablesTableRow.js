import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
// import  OtherFile  from "../Sidebar/Otherfile";
import { SidebarHelp } from "components/Sidebar/SidebarHelp";

function TablesTableRow(props) {
  const { handleToggle } = props;

  const handleClick = () => {
    // Call the handleToggle function when the button is clicked
    OtherFile.handleToggle();
  };
  // info={row.info}
  //                 Rating={row.Rating}
  //                 Genre={row.Genre}
  //                 OriginalLanguage={row.OriginalLanguage}
  //                 Director={row.Director}
  //                 Producer={row.Producer}
  //                 Writer={row.Writer}
  //                 TheatersDate={row.TheatersDate}
  //                 StreamingDate={row.StreamingDate}
  //                 BoxOfficeUSA={row.BoxOfficeUSA}
  //                 Runtime={row.Runtime}
  //                 Distributor={row.Distributor}
  //                 SoundMix={row.SoundMix}
  //                 AspectRatio={row.AspectRatio}
  //                 collection={row.collection}
  const { logo, name, info, Rating, Genre, OriginalLanguage, Director, Producer, Writer, TheatersDate, StreamingDate, BoxOfficeUSA, Runtime, Distributor, SoundMix, AspectRatio, collection } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <>
      <Tr >
        <Td minWidth={{ sm: "250px" }} pl="0px">
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
            <Avatar src={logo} w="50px" borderRadius="12px" me="18px" />
            <Flex direction="column">
              <Text
                fontSize="md"
                color={textColor}
                fontWeight="bold"
                minWidth="100%"
              >
                {name}
              </Text>
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                {Rating}
              </Text>
            </Flex>
          </Flex>
        </Td>

        <Td>
          <Flex direction="column">
            <Text fontSize="md" color={textColor} fontWeight="bold">
              {Genre}
            </Text>
            {/* <Text fontSize="sm" color="gray.400" fontWeight="normal">
            {Director}
          </Text> */}
          </Flex>
        </Td>
        <Td>

          <Text fontSize="md" color={textColor} fontWeight="bold">
            {Director}
          </Text>


        </Td>
        <Td>

          <Text fontSize="md" color={textColor} fontWeight="bold">
            {Producer}
          </Text>


        </Td>

        <Td>
          <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
            {StreamingDate}
          </Text>
        </Td>
        <Td>
          <Button p="0px" bg="transparent" variant="no-hover"
            onClick={handleClick}
          >
            <Text
              fontSize="md"
              color="gray.400"
              fontWeight="bold"
              cursor="pointer"
            >
              Edit
            </Text>
          </Button>
          {/* <button onClick={handleClick}>Toggle Help</button> */}
        </Td>
      </Tr>
      {/* <SidebarHelp /> */}
    </>
  );
}

export default TablesTableRow;
