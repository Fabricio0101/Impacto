import {
    Flex,
    VStack,
    Stack,
    HStack,
    Heading,
    useBreakpointValue,
} from '@chakra-ui/react'

import Forma from '../../assets/formaAmarela.png'

export default function Pillars() {

    const isMobileVersion = useBreakpointValue({
        base: true,
        lg: false,
    })

    return (
        <>
            {!isMobileVersion && (
                <Flex
                    w="100%"
                    h="110vh"
                    bg="#fef4dc"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    <HStack
                        w="100%"
                        justifyContent="center"
                        alignItems="center"
                        gap="10"
                    >
                        <VStack
                            w="32%"
                            data-aos="fade-right"
                        >
                            <Stack
                                justifyContent="center"
                                alignItems="end"
                                mb="-10"
                                w="35%"
                            >
                                <Heading
                                    color="#006bd9"
                                    fontSize="40px"
                                    fontFamily="Vlated"
                                >
                                    nossos
                                </Heading>
                            </Stack>
                            <Stack>
                                <Heading
                                    color="#006bd9"
                                    fontSize="90px"
                                    fontFamily="Vlated"
                                >
                                    pilares
                                </Heading>
                            </Stack>
                        </VStack>
                        <Stack
                            w="25%"
                            data-aos="fade-left"
                        >
                            <Heading
                                fontSize="20px"
                                fontWeight="600"
                            >
                                Nossa forma de educar prioriza os 4 pilares.
                                Juntos, eles formam a base para que o nosso aluno
                                possa gerar Impacto onde quer que ele vá.
                            </Heading>
                        </Stack>
                    </HStack>
                    <HStack
                        bgImage={Forma}
                        bgSize="40%"
                        bgPosition="center"
                        bgRepeat="no-repeat"
                        w="100%"
                        h="100%"
                        justifyContent="center"
                        alignItems="center"
                        gap="120"
                        data-aos="zoom-in"
                    >
                        <VStack
                            alignItems="start"
                            justifyContent="center"
                            gap="200px"
                        >
                            <Stack
                                w="100%"
                                mt="-60px"
                            >
                                <Heading
                                    fontSize="35px"
                                    transform="rotate(10deg)"
                                >
                                    Aprender<br />a conhecer
                                </Heading>
                            </Stack>
                            <Stack mt="-20px">
                                <Heading
                                    fontSize="35px"
                                    transform="rotate(-30deg)"
                                >
                                    Aprender<br />a fazer
                                </Heading>
                            </Stack>
                        </VStack>
                        <VStack
                            alignItems="center"
                            justifyContent="end"
                            gap="200px"
                        >
                            <Stack mt="90px">
                                <Heading
                                    fontSize="35px"
                                    transform="rotate(-30deg)"
                                >
                                    Aprender<br />a conviver
                                </Heading>
                            </Stack>
                            <Stack mt="-20px">
                                <Heading
                                    fontSize="35px"
                                    transform="rotate(10deg)"
                                >
                                    Aprender<br />a ser
                                </Heading>
                            </Stack>
                        </VStack>
                    </HStack>
                </Flex>
            )}

            {isMobileVersion && (
                <Flex
                    w="100%"
                    h="90vh"
                    bg="#fef4dc"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    <VStack
                        w="100%"
                        justifyContent="center"
                        alignItems="center"
                        gap="8"
                    >
                        <VStack
                            mt="60px"
                            w="32%"
                            data-aos="fade-right"
                        >
                            <Stack
                                justifyContent="center"
                                alignItems="end"
                                mb="-12"
                                w="100%"
                            >
                                <Heading
                                    color="#006bd9"
                                    fontSize="30px"
                                    fontFamily="Vlated"
                                >
                                    nossos
                                </Heading>
                            </Stack>
                            <Stack>
                                <Heading
                                    color="#006bd9"
                                    fontSize="70px"
                                    fontFamily="Vlated"
                                >
                                    pilares
                                </Heading>
                            </Stack>
                        </VStack>
                        <Stack
                            w="80%"
                            data-aos="fade-right"
                        >
                            <Heading
                                fontSize="18px"
                                fontWeight="600"
                                fontFamily="Kurdis"
                                textAlign="justify"
                            >
                                Nossa forma de educar prioriza os 4 pilares.
                                Juntos, eles formam a base para que o nosso aluno
                                possa gerar Impacto onde quer que ele vá.
                            </Heading>
                        </Stack>
                    </VStack>
                    <HStack
                        bgImage={Forma}
                        bgSize="85%"
                        bgPosition="center"
                        bgRepeat="no-repeat"
                        w="100%"
                        h="110vh"
                        justifyContent="center"
                        alignItems="center"
                        gap="70"
                        data-aos="zoom-in"
                    >
                        <VStack
                            alignItems="start"
                            justifyContent="center"
                            gap="110px"
                        >
                            <Stack
                                w="100%"
                                mt="-20px"
                            >
                                <Heading
                                    fontSize="18px"
                                    transform="rotate(10deg)"
                                    fontFamily="Kurdis"
                                >
                                    Aprender<br />a conhecer
                                </Heading>
                            </Stack>
                            <Stack mt="-20px">
                                <Heading
                                    fontSize="18px"
                                    transform="rotate(-30deg)"
                                    fontFamily="Kurdis"
                                    ml="2"
                                >
                                    Aprender<br />a fazer
                                </Heading>
                            </Stack>
                        </VStack>
                        <VStack
                            alignItems="center"
                            justifyContent="end"
                            gap="99px"
                        >
                            <Stack mt="50px">
                                <Heading
                                    fontSize="18px"
                                    transform="rotate(-30deg)"
                                    fontFamily="Kurdis"
                                >
                                    Aprender<br />a conviver
                                </Heading>
                            </Stack>
                            <Stack mt="0px">
                                <Heading
                                    fontSize="18px"
                                    transform="rotate(10deg)"
                                    fontFamily="Kurdis"
                                >
                                    Aprender<br />a ser
                                </Heading>
                            </Stack>
                        </VStack>
                    </HStack>
                </Flex>
            )}
        </>
    )
}