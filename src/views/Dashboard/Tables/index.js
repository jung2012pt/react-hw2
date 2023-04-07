// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Authors from "./components/Authors";
import { movies, tablesTableData, dashboardTableData } from "variables/general";

function Tables() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Authors
        title={"Movie Table"}
        captions={["Movie Name", "Genre", "Director", "Producer","Date Strewaming", ""]}
        data={movies}
      />

    </Flex>
  );
}

export default Tables;
