import {
    Flex,
    VStack,
    Stack,
    HStack,
    Heading,
    useBreakpointValue,
} from '@chakra-ui/react'

import Retangulo from '../../assets/retangulos.png'

export default function FirstPlace() {

    const isMobileVersion = useBreakpointValue({
        base: true,
        lg: false,
    })

    return (
        <>
            {!isMobileVersion && (
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    bg="#006bd9"
                    w="100%"
                    h="70vh"
                >
                    <HStack
                        justifyContent="center"
                        alignItems="center"
                        w="100%"
                    >
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            w="20%"
                        >
                            <Heading
                                color="white"
                                fontSize="20px"
                                fontWeight="100"
                                data-aos="fade-right"
                                fontFamily="Kurdis"
                            >
                                No Impacto nós firmamos um dos compromissos mais importantes para a vida de qualquer criança ou adolescente: com o seu desenvolvimento pessoal e social.
                            </Heading>
                        </Stack>
                        <VStack w="40%" h="400px" gap={0} justifyContent="center" alignItems="center">
                            <Stack w="20%" alignItems="start" justifyContent="center">
                                <Heading fontSize="24px" data-aos="zoom-in">
                                    AQUI,
                                </Heading>
                            </Stack>
                            <Stack>
                                <Heading fontSize="24px" data-aos="zoom-in" fontFamily="Kurdis">
                                    O ALUNO ESTÁ<br />SEMPRE
                                </Heading>
                            </Stack>
                            <Stack
                                justifyContent="center"
                                alignItems="center"
                                w="100%"
                                h="200px"
                                bgImage={Retangulo}
                                bgSize="60%"
                                bgRepeat="no-repeat"
                                bgPosition="center"
                                data-aos="zoom-in"
                            >
                                <Heading
                                    color="#001d3c"
                                    textAlign="center"
                                    fontSize="50px"
                                    fontWeight="800"
                                    fontFamily="ModernType"
                                >
                                    Primeiro<br />lugar.
                                </Heading>
                            </Stack>
                        </VStack>

                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            w="20%"
                        >
                            <Heading
                                color="white"
                                fontSize="20px"
                                fontWeight="600"
                                data-aos="fade-left"
                                fontFamily="Kurdis"
                            >
                                Nosso currículo escolar potencializa e valoriza as competências individuais de cada um, preparando o aluno para todas os desafios da vida.
                            </Heading>
                        </Stack>
                    </HStack>
                </Flex>
            )}

            {isMobileVersion && (
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    bg="#006bd9"
                    w="100%"
                    h="80vh"
                >
                    <VStack
                        justifyContent="center"
                        alignItems="center"
                        w="100%"
                    >
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            w="70%"
                        >
                            <Heading
                                color="white"
                                fontSize="15px"
                                fontWeight="100"
                                data-aos="fade-down"
                                fontFamily="Kurdis"
                                textAlign="justify"
                            >
                                No Impacto nós firmamos um dos compromissos mais importantes para a vida de qualquer criança ou adolescente: com o seu desenvolvimento pessoal e social.
                            </Heading>
                        </Stack>
                        <VStack w="40%" h="300px" gap={0} justifyContent="center" alignItems="center">
                            <Heading 
                                fontSize="24px" 
                                data-aos="zoom-in" 
                                fontFamily="Kurdis"
                                textAlign="center"
                            >
                                AQUI<br />O ALUNO ESTÁ<br />SEMPRE EM
                            </Heading>
                            <Stack
                                justifyContent="center"
                                alignItems="center"
                                w="350px"
                                h="150px"
                                bgImage={Retangulo}
                                bgSize="330px"
                                bgRepeat="no-repeat"
                                bgPosition="center"
                                data-aos="zoom-in"
                            >
                                <Heading
                                    color="#001d3c"
                                    textAlign="center"
                                    fontSize="40px"
                                    fontWeight="800"
                                    fontFamily="ModernType"
                                >
                                    Primeiro<br />lugar.
                                </Heading>
                            </Stack>
                        </VStack>

                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            w="70%"
                        >
                            <Heading
                                color="white"
                                fontSize="15px"
                                fontWeight="600"
                                data-aos="fade-up"
                                fontFamily="Kurdis"
                                textAlign="justify"
                            >
                                Nosso currículo escolar potencializa e valoriza as competências individuais de cada um, preparando o aluno para todas os desafios da vida.
                            </Heading>
                        </Stack>
                    </VStack>
                </Flex>
            )}
        </>
    )
}