import React from "react";
import { Link } from "react-router-dom";

// Components
import TheLogo from "../../../../Common/TheLogo";
import SearchBar from "../../../../Common/SearchBar";

// Chakra Components
import { Box, Container, Stack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

// React Icons Components
import { BsCart2 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";

const TopNav = () => {
    return (
        <React.Fragment>
            <Container as={Stack} maxW={"8xl"} pt={10} pb={5}>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    flexWrap={{
                        base: "wrap",
                        md: "nowrap",
                        lg: "nowrap",
                        xl: "nowrap",
                    }}
                >
                    <Box display="flex" gap="5">
                        <TheLogo
                            display={{
                                base: "none",
                                md: "-webkit-box",
                                lg: "-webkit-box",
                                xl: "-webkit-box",
                                "2xl": "-webkit-box",
                            }}
                        />
                        <SearchBar />
                        <Button colorScheme="blue" variant="outline" px="5">
                            SELL
                        </Button>
                    </Box>
                    <Box
                        display="flex"
                        gap={5}
                        justifyContent={{
                            base: "space-between",
                            md: "flex-end",
                            lg: "flex-end",
                            xl: "flex-end",
                        }}
                        pt={{
                            base: "10",
                            md: "0",
                        }}
                        width={"100%"}
                    >
                        <Box display="flex" gap="5">
                            <BsCart2 size={30} />
                            <AiOutlineHeart size={30} />
                            <BiUser size={30} />
                        </Box>
                        <Box display="flex" gap="5">
                            <Button>
                                <Link to="/signup">Sign In</Link>
                            </Button>
                            <Button>
                                <Link to="/signin">Sign Up</Link>
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default TopNav;
