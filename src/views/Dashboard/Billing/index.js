// Chakra imports


import { Box, Flex, Grid, Button, Text, Avatar, Icon, useColorModeValue, Input } from "@chakra-ui/react";
// Assets
import BackgroundCard1 from "assets/img/BackgroundCard1.png";
import { MastercardIcon, VisaIcon } from "components/Icons/Icons";
// import React from "react";
import { FaPaypal, FaWallet } from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";

import { movies, tablesTableData, dashboardTableData } from "variables/general";
import React, { useState } from "react";
// import ProjectCard from "./";

function Billing() {
  console.log("movies");
  const textColor = useColorModeValue("gray.700", "white");

  console.log(movies);
  let id = "1";
  let movie;

  const [isId, setisId] = useState('1');

  const handleToggle = (selectId) => {
    setisId(selectId);
    id = selectId
  };
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id == isId) {
      movie = movies[i]
    }
  }
  console.log(movie.name);
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Grid templateColumns={{ sm: "1fr", lg: "2fr 1.2fr" }} templateRows='1fr'>
        <Box>

          <label for="cars">Choose a Movie:</label>

          <select name="cars" id="cars" onChange={e => handleToggle(e.target.value)} style={{ backgroundColor: 'black' }} >
            <option value="1" color='gray.500'>AVENGERS: ENDGAME</option>
            <option value="2" color='gray.500'>AVATAR: THE WAY OF WATER</option>
            <option value="3" style={{ Color: 'gray.500' }}>JOHN WICK: CHAPTER 4</option>
            <option value="4" style={{ Color: 'gray.500' }}>PREY</option>
            <option value="5" style={{ Color: 'gray.500' }}>THE LORD OF THE RINGS: THE TWO TOWERS</option>
            <option value="6" style={{ Color: 'gray.500' }}>PUSS IN BOOTS: THE LAST WISH</option>
          </select>
          {/* <form>
            <Avatar src={movie.logo} w="50px" borderRadius="12px" me="18px" />
            <label>
              Name:
              <input type="text" name="name" value={movie.name} />
            </label>
            <p />
            <p />

            <label>
              Genre:
              <input type="text" name="Genre" value={movie.Genre} />
            </label>
            <p />
            <p />

            <label>
              Director:
              <input type="text" name="Director" value={movie.Director} />
            </label>
            <p />
            <p />

            <label>
              Producer:
              <input type="text" name="Producer" value={movie.Producer} />
            </label>
            <p />
            <p />

            <label>
              TheatersDate:
              <input type="text" name="TheatersDate" value={movie.TheatersDate} />
            </label>
            <label>
              Ticket Price:
              <input type="text" name="ticketAmont" value={movie.ticketAmont} />
            </label>
            <input type="submit" value="Submit" />
          </form> */}

          <Flex direction='column' style={{ paddingTop: 20 }}>
            <Avatar src={movie.logo} w="300px" h="500px" borderRadius="12px" me="18px" />
            <Flex direction='column'>
              <Text fontSize='md' color={textColor} fontWeight='bold' style={{ fontSize: 30, paddingTop: 20 }} mb='10px'>
                {movie.name}
              </Text>
              <Text fontSize='xl' color='gray.500' fontWeight='400' mb='10px'>
                {movie.Genre}
              </Text>
              <Text fontSize='md' color='gray.500' fontWeight='400' mb='20px'>
                {movie.Director}
              </Text>
              <Text fontSize='md' color='gray.500' fontWeight='400' mb='20px'>
                {movie.info}
              </Text>

              <Text fontSize='md' color='green' fontWeight='400' style={{ fontSize: 30, paddingTop: 20 }} mb='20px'>
                {movie.ticketAmont} บาท
              </Text>
              <Flex justifyContent='space-between'>
                <Button
                  variant='outline'
                  colorScheme='teal'
                  minW='110px'
                  h='50px'
                  fontSize='xs'
                  px='2.5rem'>
                  Buy now
                </Button>

              </Flex>
            </Flex>
          </Flex>
        </Box>

      </Grid>

    </Flex >
  );
}

export default Billing;
