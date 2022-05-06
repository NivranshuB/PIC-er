import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            body: {
                // global background colour and text colour
                bg: 'background',
                color: 'white',
            }
        }
    },
    colors: {
        background: '#1B1B1B',
        lighterBackground: '#333333',
        accent: '#FF6B6B',
    }
});

export default theme;