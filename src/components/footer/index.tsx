import {
    Flex,
    VStack,
    Stack,
    HStack,
    Heading,
    Image,
    Button,
    useBreakpointValue,
} from '@chakra-ui/react'

import { AiOutlineInstagram } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'

import Logo from '../../assets/Logos-Impacto.png'

export default function Footer() {

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
                    bg="#001d3c"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    <VStack
                        w="80%"
                        justifyContent="center"
                        alignItems="center"
                        gap="60px"
                    >
                        <HStack
                            justifyContent="center"
                            alignItems="center"
                            gap="20"
                        >
                            <Image w="12%" src={Logo} />
                            <VStack>
                                <Stack
                                    mb="-45"
                                    w="78%"
                                    justifyContent="center"
                                    alignItems="start"
                                >
                                    <Heading fontSize="15px" color="white" fontFamily="ModernType">
                                        MEU
                                    </Heading>
                                </Stack>
                                <Heading fontSize="80px" color="white" fontFamily="Vlated">
                                    impacto
                                </Heading>
                                <Stack
                                    justifyContent="center"
                                    alignItems="end"
                                    w="74%"
                                    mt="-5"
                                >
                                    <Heading fontSize="15px" color="white" fontFamily="ModernType">
                                        COMEÇA<br />AQUI
                                    </Heading>
                                </Stack>
                            </VStack>
                            <Heading
                                fontSize="15px"
                                color="white"
                                fontFamily="Kurdis"
                            >
                                EDUCAÇÃO INFANTIL<br />
                                ENSINO FUNDAMENTAL E<br />
                                ENSINO MÉDIO
                            </Heading>
                        </HStack>
                        <Stack w="100%" alignItems="center" justifyContent="center">
                            <Heading
                                color="#fdc73b"
                                fontSize="90px"
                                fontFamily="Vlated"
                            >
                                matrículas <span style={{ fontFamily: 'Vlated', color: '#006bd9', fontSize: '40px' }}>2024</span>
                            </Heading>
                            <Stack
                                justifyContent="center"
                                alignItems="end"
                                w="35%"
                                mt="-12"
                            >
                                <Heading
                                    color="#fdc73b"
                                    fontSize="90px"
                                    fontWeight="800"
                                    fontFamily="Vlated"
                                >
                                    abertas
                                </Heading>
                            </Stack>
                        </Stack>
                        <HStack gap={20}>
                            <VStack>
                                <Stack
                                    flexDirection="row"
                                    color="white"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <AiOutlineInstagram size="20px" />
                                    <Heading fontSize="14px" fontWeight="400" fontFamily="Physis">
                                        @IMPACTORN
                                    </Heading>
                                </Stack>
                                <Stack
                                    flexDirection="row"
                                    color="white"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <BsFillTelephoneFill size="15px" />
                                    <Heading fontSize="14px" fontWeight="400" fontFamily="Physis">
                                        (84) 3205-1574
                                    </Heading>
                                </Stack>
                                <Stack
                                    flexDirection="row"
                                    color="white"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <BsWhatsapp size="15px" />
                                    <Heading fontSize="14px" fontWeight="400" fontFamily="Physis">
                                        (84) 99460-6377
                                    </Heading>
                                </Stack>
                            </VStack>
                            <VStack alignItems="center">
                                <Heading textAlign="center" color="#006bd9" fontSize="14px" fontWeight="700" fontFamily="Physis">
                                    UNIDADE I <br />ENSINO FUNDAMENTAL E MÉDIO
                                </Heading>
                                <Heading color="white" fontSize="14px" fontWeight="400" fontFamily="Physis">
                                    RUA CARUARU, 48
                                </Heading>
                                <Heading color="white" fontSize="14px" fontWeight="400" fontFamily="Physis">
                                    CIDADE DA ESPERANÇA
                                </Heading>
                                <Heading color="white" fontSize="14px" fontWeight="400" fontFamily="Physis">
                                    NATAL/RN
                                </Heading>
                            </VStack>
                            <VStack alignItems="center">
                                <Heading textAlign="center" color="#006bd9" fontSize="14px" fontWeight="700" fontFamily="Physis">
                                    UNIDADE II<br />EDUCAÇÃO INFANTIL
                                </Heading>
                                <Heading color="white" fontSize="14px" fontWeight="400" fontFamily="Physis">
                                    RUA JOSÉ AMÉRICO, 1470
                                </Heading>
                                <Heading color="white" fontSize="14px" fontWeight="400" fontFamily="Physis">
                                    CIDADE DA ESPERANÇA
                                </Heading>
                                <Heading color="white" fontSize="14px" fontWeight="400" fontFamily="Physis">
                                    NATAL/RN
                                </Heading>
                            </VStack>
                        </HStack>
                        <a href="https://api.whatsapp.com/send/?phone=5584994606377&text&type=phone_number&app_absent=0"
                            target="_blank">
                            <Button
                                bg="#fdc73b"
                                fontWeight="700"
                                transition="0.2s"
                                _hover={{
                                    bg: 'transparent',
                                    border: '2px solid #fdc73b',
                                    color: '#fdc73b',
                                    transform: 'scale(1.1)'
                                }}
                            >
                                CLIQUE AQUI E FAÇA A MATRÍCULA DO SEU FILHO
                            </Button>
                        </a>
                    </VStack>
                </Flex>
            )}

            {isMobileVersion && (
                <Flex
                    w="100%"
                    h="115vh"
                    bg="#001d3c"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    <VStack
                        w="80%"
                        justifyContent="center"
                        alignItems="center"
                        gap="60px"
                    >
                        <VStack
                            justifyContent="center"
                            alignItems="center"
                            gap={10}
                        >
                            <Image w="60%" src={Logo} />
                            <a href="https://api.whatsapp.com/send/?phone=5584994606377&text&type=phone_number&app_absent=0"
                                target="_blank">
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
                            </a>
                        </VStack>
                        <VStack gap={10}>
                            <VStack textAlign="center">
                                <Stack
                                    flexDirection="row"
                                    color="white"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <AiOutlineInstagram size="20px" />
                                    <Heading fontSize="14px" fontWeight="400" fontFamily="Physis">
                                        @IMPACTORN
                                    </Heading>
                                </Stack>
                                <Stack
                                    flexDirection="row"
                                    color="white"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <BsFillTelephoneFill size="15px" />
                                    <Heading fontSize="14px" fontWeight="400" fontFamily="Physis">
                                        (84) 3205-1574
                                    </Heading>
                                </Stack>
                                <Stack
                                    flexDirection="row"
                                    color="white"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <BsWhatsapp size="15px" />
                                    <Heading fontSize="14px" fontWeight="400" fontFamily="Physis">
                                        (84) 99460-6377
                                    </Heading>
                                </Stack>
                            </VStack>
                            <VStack alignItems="center" textAlign="justify">
                                <Heading textAlign="center" color="#006bd9" fontSize="14px" fontWeight="700" fontFamily="Physis">
                                    UNIDADE I <br />ENSINO FUNDAMENTAL E MÉDIO
                                </Heading>
                                <Heading color="white" fontSize="14px" fontWeight="400" fontFamily="Physis">
                                    RUA CARUARU, 48
                                </Heading>
                                <Heading color="white" fontSize="14px" fontWeight="400" fontFamily="Physis">
                                    CIDADE DA ESPERANÇA
                                </Heading>
                                <Heading color="white" fontSize="14px" fontWeight="400" fontFamily="Physis">
                                    NATAL/RN
                                </Heading>
                            </VStack>
                            <VStack alignItems="center" textAlign="justify">
                                <Heading textAlign="center" color="#006bd9" fontSize="14px" fontWeight="700" fontFamily="Physis">
                                    UNIDADE II<br />EDUCAÇÃO INFANTIL
                                </Heading>
                                <Heading color="white" fontSize="14px" fontWeight="400" fontFamily="Physis">
                                    RUA JOSÉ AMÉRICO, 1470
                                </Heading>
                                <Heading color="white" fontSize="14px" fontWeight="400" fontFamily="Physis">
                                    CIDADE DA ESPERANÇA
                                </Heading>
                                <Heading color="white" fontSize="14px" fontWeight="400" fontFamily="Physis">
                                    NATAL/RN
                                </Heading>
                            </VStack>
                        </VStack>
                    </VStack>
                </Flex>
            )}
        </>
    )
}