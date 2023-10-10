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

import Israel from '../../assets/IsraelForma.png'
import Logo from '../../assets/logo.png'
import bgHomeMobile from '../../assets/bgHomeMobile.png'

import '../../style/global.css'

export default function Home() {

    const isMobileVersion = useBreakpointValue({
        base: true,
        lg: false,
    })

    return (
        <>
            {!isMobileVersion && (
                <Flex
                    w="100%"
                    h="auto"
                    bg="#fef3d9"
                    justifyContent="center"
                    alignItems="center"
                    gap={0}
                    pt="20px"
                >
                    <HStack
                        justifyContent="center"
                        alignItems="center"
                        w="100%"
                    >
                        <VStack mr="-20" ml="200px" zIndex={3}>
                            <Stack
                                mb="-90"
                                w="78%"
                                justifyContent="center"
                                alignItems="start"
                            >
                                <Heading fontSize="50px" fontWeight="600" color="#001d3c" fontFamily="ModernType">
                                    MEU
                                </Heading>
                            </Stack>
                            <Heading fontSize="200px" color="#006bd9" fontFamily="Vlated">
                                impacto
                            </Heading>
                            <Stack
                                justifyContent="center"
                                alignItems="end"
                                w="55%"
                                mt="-10"
                            >
                                <Heading fontSize="50px" fontWeight="800" color="#001d3c" fontFamily="ModernType">
                                    COMEÇA<br />AQUI
                                </Heading>
                            </Stack>
                            <HStack
                                w="100%"
                                gap="8"
                            >
                                <Image w="20%" src={Logo} />
                                <Stack w="100%" alignItems="start" justifyContent="center">
                                    <Heading
                                        color="#006bd9"
                                        fontSize="40px"
                                        fontFamily="Vlated"
                                    >
                                        matrículas <span style={{ fontFamily: 'Vlated', color: '#000000', fontSize: '20px' }}>2024</span>
                                    </Heading>
                                    <Stack
                                        justifyContent="center"
                                        alignItems="center"
                                        w="53%"
                                        mt="-7"
                                    >
                                        <Heading
                                            color="#006bd9"
                                            fontSize="40px"
                                            fontWeight="800"
                                            fontFamily="Vlated"
                                        >
                                            abertas
                                        </Heading>
                                    </Stack>
                                </Stack>
                            </HStack>
                        </VStack>
                        <Stack>
                            <Image w="80%" src={Israel} />
                        </Stack>
                    </HStack>
                </Flex>
            )}

            {isMobileVersion && (
                <Flex
                    w="100%"
                    h="90vh"
                    bgImage={bgHomeMobile}
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    justifyContent="center"
                    alignItems="center"
                >
                    <VStack
                        justifyContent="center"
                        alignItems="center"
                        w="100%"
                        gap={8}
                    >
                        <VStack mt="10">
                            <Stack
                                mb="-14"
                                w="58%"
                                justifyContent="center"
                                alignItems="start"
                            >
                                <Heading fontSize="20px" fontWeight="600" color="#001d3c" fontFamily="ModernType">
                                    MEU
                                </Heading>
                            </Stack>
                            <Heading fontSize="90px" color="#006bd9" fontFamily="Vlated">
                                impacto
                            </Heading>
                            <Stack
                                justifyContent="center"
                                alignItems="end"
                                w="55%"
                                mt="-10"
                            >
                                <Heading fontSize="20px" fontWeight="800" color="#001d3c" fontFamily="ModernType">
                                    COMEÇA<br />AQUI
                                </Heading>
                            </Stack>
                        </VStack>
                        <Stack w="100%" alignItems="center" mt="10" justifyContent="center">
                            <Heading
                                color="#006bd9"
                                fontSize="50px"
                                fontFamily="Vlated"
                            >
                                matrículas<span style={{ fontFamily: 'Vlated', color: '#000000', fontSize: '26px' }}>2024</span>
                            </Heading>
                            <Stack
                                justifyContent="center"
                                alignItems="center"
                                w="53%"
                                mt="-7"
                            >
                                <Heading
                                    color="#006bd9"
                                    fontSize="40px"
                                    fontWeight="800"
                                    fontFamily="Vlated"
                                >
                                    abertas
                                </Heading>
                            </Stack>
                        </Stack>
                        <HStack gap={5} alignItems="center" justifyContent="center" w="100%">
                            <Image w="30%" src={Logo} />
                            <Heading
                                fontSize="15px"
                                color="#001d3c"
                                fontFamily="Kurdis"
                            >
                                EDUCAÇÃO INFANTIL<br />
                                FUNDAMENTAL I & II<br />
                                ENSINO MÉDIO
                            </Heading>
                        </HStack>
                        <Stack
                            justifyContent="end"
                            alignItems="center"
                            w="100%"
                            h="120px"
                        >
                            <Button
                                bg="#fdc73b"
                                w="210px"
                                h="70px"
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
                                ENTRE EM CONTATO
                            </Button>
                        </Stack>
                    </VStack>
                </Flex>
            )}
        </>
    )
}