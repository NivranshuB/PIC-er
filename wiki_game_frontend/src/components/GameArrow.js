import { Box, HStack, Spacer } from "@chakra-ui/react";

const GameArrow = () => {

    const arrowWidth = '8px';
    const arrowLength = '60px';

    return (
        <Box align='center'>
            <Box width={arrowWidth} bg='accent' height={arrowLength} />
            <Box width='65%' bg='accent' height={arrowWidth} pl='10px'/>
            <HStack justify='center' width='65%'>
                <Box>
                    <Box width={arrowWidth} bg='accent' height={arrowLength} />
                    <Box borderColor='accent' borderWidth='20px' borderBottomColor='transparent' borderLeftColor='transparent' borderRightColor='transparent' />
                </Box>
                <Spacer />
                <Box>
                    <Box width={arrowWidth} bg='accent' height={arrowLength} />
                    <Box borderColor='accent' borderWidth='20px' borderBottomColor='transparent' borderLeftColor='transparent' borderRightColor='transparent' />
                </Box>
                <Spacer />
                <Box>
                    <Box width={arrowWidth} bg='accent' height={arrowLength} />
                    <Box borderColor='accent' borderWidth='20px' borderBottomColor='transparent' borderLeftColor='transparent' borderRightColor='transparent' />
                </Box>
                <Spacer />
                <Box>
                    <Box width={arrowWidth} bg='accent' height={arrowLength} />
                    <Box borderColor='accent' borderWidth='20px' borderBottomColor='transparent' borderLeftColor='transparent' borderRightColor='transparent' />
                </Box>
                <Spacer />
                <Box>
                    <Box width={arrowWidth} bg='accent' height={arrowLength} />
                    <Box borderColor='accent' borderWidth='20px' borderBottomColor='transparent' borderLeftColor='transparent' borderRightColor='transparent' />
                </Box>
            </HStack>
        </Box>
    )
}

export default GameArrow;