// Chakra imports
import {
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesTableRow from "components/Tables/TablesTableRow";
import React from "react";
import { SidebarHelp } from "components/Sidebar/SidebarHelp";

const Authors = ({ title, captions, data }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='6px 0px 22px 0px'>
        <Text fontSize='xl' color={textColor} fontWeight='bold'>
          {title}
        </Text>
      </CardHeader>
      <CardBody>
        <Table variant='simple' color={textColor}>
          <Thead>
            <Tr my='.8rem' pl='0px' color='gray.400'>
              {captions.map((caption, idx) => {
                return (
                  <Th color='gray.400' key={idx} ps={idx === 0 ? "0px" : null}>
                    {caption}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody >
            {data.map((row) => {
              return (
                <TablesTableRow 

                  key={`${row.email}-${row.name}`}
                  name={row.name}
                  logo={row.logo}

                  info={row.info}
                  Rating={row.Rating}
                  Genre={row.Genre}
                  OriginalLanguage={row.OriginalLanguage}
                  Director={row.Director}
                  Producer={row.Producer}
                  Writer={row.Writer}
                  TheatersDate={row.TheatersDate}
                  StreamingDate={row.StreamingDate}
                  BoxOfficeUSA={row.BoxOfficeUSA}
                  Runtime={row.Runtime}
                  Distributor={row.Distributor}
                  SoundMix={row.SoundMix}
                  AspectRatio={row.AspectRatio}
                  collection={row.collection}

                />
              );
            })}
          </Tbody>
        </Table>
        <SidebarHelp  />

      </CardBody>
    </Card>
  );
};

export default Authors;
