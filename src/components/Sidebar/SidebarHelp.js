import { QuestionIcon } from "@chakra-ui/icons";
import { Button, Flex, Link, Text } from "@chakra-ui/react";
import SidebarHelpImage from "assets/img/SidebarHelpImage.png";
import IconBox from "components/Icons/IconBox";
import OtherFile from "./Otherfile";
import React, { useState } from "react";
export function SidebarHelp(props) {
  // Pass the computed styles into the `__css` prop
  const { children, ...rest } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    // <>
    // </>
    <Flex
      borderRadius="15px"
      flexDirection="column"
      bgImage={SidebarHelpImage}
      justifyContent="flex-start"
      alignItems="start"
      boxSize="border-box"
      p="16px"
      h="500px"
      w="100%"
    >
      <Button onClick={handleToggle}>
        <IconBox icon={<QuestionIcon />} />
        <Text ml="8px">Help</Text>
      </Button>
      <OtherFile handleToggle={handleToggle} />
      {isOpen && (
        <Link href="#" mt="16px">
          Click here for help fffffffffffffffffffff
        </Link>
      )}
    </Flex>
  );
}
