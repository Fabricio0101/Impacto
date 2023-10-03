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
                    h="90vh"
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
                                w="30%"
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
                            w="25%"
                            data-aos="fade-left"
                        >
                            <Heading
                                fontSize="20px"
                                fontWeight="600"
                                fontFamily="Kurdis"
                            >
                                Nossa forma de educar prioriza os 4 pilares.
                                Juntos, eles formam a base para que o nosso aluno
                                possa gerar Impacto onde quer que ele vá.
                            </Heading>
                        </Stack>
                    </HStack>
                    <HStack
                        bgImage={Forma}
                        bgSize="30%"
                        bgPosition="center"
                        bgRepeat="no-repeat"
                        w="100%"
                        h="100%"
                        justifyContent="center"
                        alignItems="center"
                        gap="70"
                        data-aos="zoom-in"
                    >
                        <VStack
                            alignItems="start"
                            justifyContent="center"
                            gap="120px"
                        >
                            <Stack
                                w="100%"
                                mt="-60px"
                            >
                                <Heading
                                    fontSize="25px"
                                    transform="rotate(10deg)"
                                    fontFamily="Kurdis"
                                >
                                    Aprender<br />a conhecer
                                </Heading>
                            </Stack>
                            <Stack mt="-20px">
                                <Heading
                                    fontSize="25px"
                                    transform="rotate(-30deg)"
                                    fontFamily="Kurdis"
                                >
                                    Apender<br />a fazer
                                </Heading>
                            </Stack>
                        </VStack>
                        <VStack
                            alignItems="center"
                            justifyContent="end"
                            gap="120px"
                        >
                            <Stack mt="70px">
                                <Heading
                                    fontSize="22px"
                                    transform="rotate(-30deg)"
                                    fontFamily="Kurdis"
                                >
                                    Aprender<br />a conviver
                                </Heading>
                            </Stack>
                            <Stack mt="0px">
                                <Heading
                                    fontSize="22px"
                                    transform="rotate(10deg)"
                                    fontFamily="Kurdis"
                                >
                                    Apender<br />a ser
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
                                w="88%"
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
                                fontSize="20px"
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
                        bgSize="100%"
                        bgPosition="center"
                        bgRepeat="no-repeat"
                        w="100%"
                        h="100%"
                        justifyContent="center"
                        alignItems="center"
                        gap="70"
                        data-aos="zoom-in"
                    >
                        <VStack
                            alignItems="start"
                            justifyContent="center"
                            gap="120px"
                        >
                            <Stack
                                w="100%"
                                mt="-60px"
                            >
                                <Heading
                                    fontSize="25px"
                                    transform="rotate(10deg)"
                                    fontFamily="Kurdis"
                                >
                                    Aprender<br />a conhecer
                                </Heading>
                            </Stack>
                            <Stack mt="-20px">
                                <Heading
                                    fontSize="25px"
                                    transform="rotate(-30deg)"
                                    fontFamily="Kurdis"
                                >
                                    Apender<br />a fazer
                                </Heading>
                            </Stack>
                        </VStack>
                        <VStack
                            alignItems="center"
                            justifyContent="end"
                            gap="120px"
                        >
                            <Stack mt="70px">
                                <Heading
                                    fontSize="22px"
                                    transform="rotate(-30deg)"
                                    fontFamily="Kurdis"
                                >
                                    Aprender<br />a conviver
                                </Heading>
                            </Stack>
                            <Stack mt="0px">
                                <Heading
                                    fontSize="22px"
                                    transform="rotate(10deg)"
                                    fontFamily="Kurdis"
                                >
                                    Apender<br />a ser
                                </Heading>
                            </Stack>
                        </VStack>
                    </HStack>
                </Flex>
            )}
        </>
    )
}