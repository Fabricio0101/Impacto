import {
    Flex,
    VStack,
    Stack,
    HStack,
    Heading,
    Button,
    Image,
    useBreakpointValue,
} from '@chakra-ui/react'

import School from '../../assets/internationalschool.png'
import Sas from '../../assets/SAS.png'

export default function Schedule() {

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
                    gap={20}
                >
                    <VStack
                        w="100%"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <HStack
                            w="100%"
                            justifyContent="center"
                            alignItems="center"
                            gap={5}
                        >
                            <VStack
                                w="40%"
                                data-aos="fade-right"
                            >
                                <Stack w="60%" justifyContent="center" mb="-10px" alignItems="start">
                                    <Heading
                                        fontSize="28px"
                                        fontWeight="600"
                                        fontFamily="Kurdis"
                                    >
                                        ESCOLHA UMA
                                    </Heading>
                                </Stack>
                                <Stack w="50%" mb="-60px" justifyContent="center" alignItems="start">
                                    <Heading
                                        fontSize="28px"
                                        fontWeight="600"
                                        fontFamily="Kurdis"
                                    >
                                        EDUCAÇÃO QUE FAZ
                                    </Heading>
                                </Stack>
                                <Stack>
                                    <Heading
                                        fontSize="130px"
                                        color="#006bd9"
                                        fontFamily="Vlated"
                                    >
                                        impacto
                                    </Heading>
                                </Stack>
                            </VStack>
                            <Stack
                                alignItems="center"
                                justifyContent="end"
                                w="30%"
                                data-aos="fade-left"
                            >
                                <Button
                                    bg="#fdc73b"
                                    w="210px"
                                    h="80px"
                                    borderRadius="10px"
                                    fontSize="15px"
                                    fontWeight="700"
                                    fontFamily="Kurdis"
                                    _hover={{
                                        bg: 'transparent',
                                        border: '2px solid #fdc73b',
                                        color: '#000000',
                                        fontFamily: 'Kurdis'
                                    }}
                                >
                                    CLIQUE AQUI E AGENDE<br />UMA VISITA COM<br />NOSSOS CONSULTORES
                                </Button>
                            </Stack>
                        </HStack>
                    </VStack>
                    <VStack gap={5}>
                        <HStack
                            gap={5}
                            data-aos="zoom-in"
                        >
                            <Stack
                                boxShadow="0px 1px 17px 0px rgba(160, 126, 46, 0.25)"
                                w="250px"
                                h="180px"
                                bg="#fef4dc"
                                borderRadius="10px"
                                alignItems="center"
                                justifyContent="center"
                                transition="0.5s"
                                _hover={{
                                    transform: 'scale(1.1)'
                                }}
                            >
                                <Image w="70%" src={School} />
                                <Heading
                                    textAlign="center"
                                    fontSize="16px"
                                    fontFamily="Kurdis"
                                >
                                    PROGRAMA<br />BÍLINGUE
                                </Heading>
                            </Stack>
                            <Stack
                                boxShadow="0px 1px 17px 0px rgba(160, 126, 46, 0.25)"
                                w="250px"
                                h="180px"
                                bg="#fef4dc"
                                borderRadius="10px"
                                alignItems="center"
                                justifyContent="center"
                                transition="0.5s"
                                _hover={{
                                    transform: 'scale(1.1)'
                                }}
                            >
                                <Image w="40%" src={Sas} />
                                <Heading
                                    textAlign="center"
                                    fontSize="16px"
                                    fontFamily="Kurdis"
                                >
                                    UMA DAS MELHORES<br />PLATAFORMAS DE<br />EDUCAÇÃO DO BRASIL
                                </Heading>
                            </Stack>
                            <Stack
                                boxShadow="0px 1px 17px 0px rgba(160, 126, 46, 0.25)"
                                w="250px"
                                h="180px"
                                bg="#fef4dc"
                                borderRadius="10px"
                                alignItems="center"
                                justifyContent="center"
                                transition="0.5s"
                                _hover={{
                                    transform: 'scale(1.1)'
                                }}
                            >
                                <Heading
                                    color="#006bd9"
                                    fontSize="50px"
                                    fontFamily="Vlated"
                                >
                                    52anos
                                </Heading>
                                <Heading
                                    textAlign="center"
                                    fontSize="16px"
                                    fontFamily="Kurdis"
                                >
                                    DE IMPACTO<br />& APRENDIZADO
                                </Heading>
                            </Stack>
                        </HStack>
                        <HStack
                            gap={5}
                            data-aos="zoom-in"
                        >
                            <Stack
                                boxShadow="0px 1px 17px 0px rgba(160, 126, 46, 0.25)"
                                w="250px"
                                h="180px"
                                bg="#fef4dc"
                                borderRadius="10px"
                                alignItems="center"
                                justifyContent="center"
                                transition="0.5s"
                                _hover={{
                                    transform: 'scale(1.1)'
                                }}
                            >
                                <Heading
                                    color="#006bd9"
                                    fontSize="50px"
                                    fontFamily="Vlated"
                                >
                                    99%
                                </Heading>
                                <Heading
                                    textAlign="center"
                                    fontSize="16px"
                                    fontFamily="Kurdis"
                                >
                                    DE APROVAÇÃO<br />NO ENEM
                                </Heading>
                            </Stack>
                            <Stack
                                boxShadow="0px 1px 17px 0px rgba(160, 126, 46, 0.25)"
                                w="250px"
                                h="180px"
                                bg="#fef4dc"
                                borderRadius="10px"
                                alignItems="center"
                                justifyContent="center"
                                transition="0.5s"
                                _hover={{
                                    transform: 'scale(1.1)'
                                }}
                            >
                                <Heading
                                    color="#006bd9"
                                    fontSize="30px"
                                    fontFamily="Vlated"
                                >
                                    compromisso
                                </Heading>
                                <Heading
                                    textAlign="center"
                                    fontSize="16px"
                                    fontFamily="Kurdis"
                                >
                                    COM EDUCAÇÃO<br />DE QUALIDADE
                                </Heading>
                            </Stack>
                            <Stack
                                boxShadow="0px 1px 17px 0px rgba(160, 126, 46, 0.25)"
                                w="250px"
                                h="180px"
                                bg="#fef4dc"
                                borderRadius="10px"
                                alignItems="center"
                                justifyContent="center"
                                gap={0}
                                transition="0.5s"
                                _hover={{
                                    transform: 'scale(1.1)'
                                }}
                            >
                                <Heading
                                    textAlign="center"
                                    fontSize="16px"
                                    mb="-2"
                                    fontFamily="Kurdis"
                                >
                                    PROFESSORES
                                </Heading>
                                <Heading
                                    color="#006bd9"
                                    fontSize="30px"
                                    fontFamily="Vlated"
                                >
                                    capacitados
                                </Heading>
                                <Heading
                                    textAlign="center"
                                    fontSize="16px"
                                    fontFamily="Kurdis"
                                >
                                    E ATUALIZADOS
                                </Heading>
                            </Stack>
                        </HStack>
                    </VStack>
                </Flex>
            )}

            {isMobileVersion && (
                <Flex
                    w="100%"
                    h="110vh"
                    bg="#fef4dc"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    gap={20}
                >
                    <VStack
                        w="100%"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <VStack
                            w="100%"
                            justifyContent="center"
                            alignItems="center"
                            gap={10}
                        >
                            <VStack
                                w="80%"
                                data-aos="fade-right"
                            >
                                <Stack w="85%" justifyContent="center" mb="-4px" alignItems="start">
                                    <Heading
                                        fontSize="18px"
                                        fontWeight="600"
                                        fontFamily="Kurdis"
                                    >
                                        ESCOLHA UMA
                                    </Heading>
                                </Stack>
                                <Stack w="75%" mb="-53px" justifyContent="center" alignItems="start">
                                    <Heading
                                        fontSize="18px"
                                        fontWeight="600"
                                        fontFamily="Kurdis"
                                    >
                                        EDUCAÇÃO QUE FAZ
                                    </Heading>
                                </Stack>
                                <Stack>
                                    <Heading
                                        fontSize="90px"
                                        color="#006bd9"
                                        fontFamily="Vlated"
                                    >
                                        impacto
                                    </Heading>
                                </Stack>
                            </VStack>
                            <Stack
                                alignItems="center"
                                justifyContent="end"
                                w="30%"
                                data-aos="fade-down"
                            >
                                <Button
                                    bg="#fdc73b"
                                    w="210px"
                                    h="80px"
                                    borderRadius="10px"
                                    fontSize="15px"
                                    fontWeight="700"
                                    fontFamily="Kurdis"
                                    _hover={{
                                        bg: 'transparent',
                                        border: '2px solid #fdc73b',
                                        color: '#000000',
                                        fontFamily: 'Kurdis'
                                    }}
                                >
                                    CLIQUE AQUI E AGENDE<br />UMA VISITA COM<br />NOSSOS CONSULTORES
                                </Button>
                            </Stack>
                        </VStack>
                    </VStack>
                    <VStack gap={2}>
                        <HStack
                            gap={2}
                            data-aos="zoom-in"
                        >
                            <Stack
                                boxShadow="0px 1px 17px 0px rgba(160, 126, 46, 0.25)"
                                w="160px"
                                h="130px"
                                bg="#fef4dc"
                                borderRadius="10px"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Image w="70%" src={School} />
                                <Heading
                                    textAlign="center"
                                    fontSize="16px"
                                    fontFamily="Kurdis"
                                >
                                    PROGRAMA<br />BÍLINGUE
                                </Heading>
                            </Stack>
                            <Stack
                                boxShadow="0px 1px 17px 0px rgba(160, 126, 46, 0.25)"
                                w="160px"
                                h="130px"
                                bg="#fef4dc"
                                borderRadius="10px"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Image w="40%" src={Sas} />
                                <Heading
                                    textAlign="center"
                                    fontSize="16px"
                                    fontFamily="Kurdis"
                                >
                                    UMA DAS MELHORES<br />PLATAFORMAS DE<br />EDUCAÇÃO DO BRASIL
                                </Heading>
                            </Stack>
                        </HStack>
                        <HStack
                            gap={2}
                            data-aos="zoom-in"
                        >
                            <Stack
                                boxShadow="0px 1px 17px 0px rgba(160, 126, 46, 0.25)"
                                w="160px"
                                h="130px"
                                bg="#fef4dc"
                                borderRadius="10px"
                                alignItems="center"
                                justifyContent="center"

                            >
                                <Heading
                                    color="#006bd9"
                                    fontSize="40px"
                                    fontFamily="Vlated"
                                >
                                    52anos
                                </Heading>
                                <Heading
                                    textAlign="center"
                                    fontSize="16px"
                                    fontFamily="Kurdis"
                                >
                                    DE IMPACTO<br />& APRENDIZADO
                                </Heading>
                            </Stack>
                            <Stack
                                boxShadow="0px 1px 17px 0px rgba(160, 126, 46, 0.25)"
                                w="160px"
                                h="130px"
                                bg="#fef4dc"
                                borderRadius="10px"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Heading
                                    color="#006bd9"
                                    fontSize="40px"
                                    fontFamily="Vlated"
                                >
                                    99%
                                </Heading>
                                <Heading
                                    textAlign="center"
                                    fontSize="16px"
                                    fontFamily="Kurdis"
                                >
                                    DE APROVAÇÃO<br />NO ENEM
                                </Heading>
                            </Stack>
                        </HStack>
                        <HStack
                            gap={2}
                            data-aos="zoom-in"
                        >
                            <Stack
                                boxShadow="0px 1px 17px 0px rgba(160, 126, 46, 0.25)"
                                w="160px"
                                h="130px"
                                bg="#fef4dc"
                                borderRadius="10px"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Heading
                                    color="#006bd9"
                                    fontSize="25px"
                                    fontFamily="Vlated"
                                >
                                    compromisso
                                </Heading>
                                <Heading
                                    textAlign="center"
                                    fontSize="16px"
                                    fontFamily="Kurdis"
                                >
                                    COM EDUCAÇÃO<br />DE QUALIDADE
                                </Heading>
                            </Stack>
                            <Stack
                                boxShadow="0px 1px 17px 0px rgba(160, 126, 46, 0.25)"
                                w="160px"
                                h="130px"
                                bg="#fef4dc"
                                borderRadius="10px"
                                alignItems="center"
                                justifyContent="center"
                                gap={0}
                            >
                                <Heading
                                    textAlign="center"
                                    fontSize="16px"
                                    mb="-2"
                                    fontFamily="Kurdis"
                                >
                                    PROFESSORES
                                </Heading>
                                <Heading
                                    color="#006bd9"
                                    fontSize="25px"
                                    fontFamily="Vlated"
                                >
                                    capacitados
                                </Heading>
                                <Heading
                                    textAlign="center"
                                    fontSize="16px"
                                    fontFamily="Kurdis"
                                >
                                    E ATUALIZADOS
                                </Heading>
                            </Stack>
                        </HStack>
                    </VStack>
                </Flex>
            )}
        </>
    )
}