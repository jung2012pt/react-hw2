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
import { Form} from 'react-router-dom'
// import  OtherFile  from "../Sidebar/Otherfile";
import { SidebarHelp } from "components/Sidebar/SidebarHelp";
import { movies } from "variables/general.js";
function edittable(props) {
  const { handleToggle } = props;
  const { id } = { params }
  const handleClick = () => {
    // Call the handleToggle function when the button is clicked
    OtherFile.handleToggle();
  };
const updateProduct = () => {
        const formdata = await request.formData()
      let product = movies.find((product)=>product.name === {name});
        if (!product) throw new Error("No product found for", {name});
       let updates = Object.fromEntries(formdata)
       Object.assign(product,updates);
         await set(products);
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
    <Form>
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
            <input defaultValue={movies[id].name} type="text" name="name" required />
              </Text>
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
              <input defaultValue={movies[id].Rating} type="text" name="rating" required />
              </Text>
            </Flex>
          </Flex>
        </Td>

        <Td>
          <Flex direction="column">
            <Text fontSize="md" color={textColor} fontWeight="bold">
              <input defaultValue={movies[id].Genre} type="text" name="genre" required />
            </Text>
            {/* <Text fontSize="sm" color="gray.400" fontWeight="normal">
            {Director}
          </Text> */}
          </Flex>
        </Td>
        <Td>

          <Text fontSize="md" color={textColor} fontWeight="bold">
            	<input defaultValue={movies[id].Director} type="text" name="director" required />
          </Text>


        </Td>
        <Td>

          <Text fontSize="md" color={textColor} fontWeight="bold">
            <input defaultValue={movies[id].Producer} type="text" name="producer" required />
          </Text>


        </Td>

        <Td>
          <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
            	<input defaultValue={movies[id].StreamingDate} type="text" name="date" required />
          </Text>
        </Td>
        <Td>
          <Button p="0px" bg="transparent" variant="no-hover"
            onClick={updateProduct}
          >
            <Text
              fontSize="md"
              color="gray.400"
              fontWeight="bold"
              cursor="pointer"
            >
              Submit
            </Text>
          </Button>
          {/* <button onClick={handleClick}>Toggle Help</button> */}
        </Td>
      </Tr>
      {/* <SidebarHelp /> */}
    </Form>
  );
}

export default edittable;