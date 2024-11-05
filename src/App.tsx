import { useState } from 'react'
import './App.css'

import {
    Box,
    Text,
    Flex,
} from '@chakra-ui/react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <Box position='fixed' width='100%' height='100%' top='0' left='0' borderColor={"#ff0000"} borderWidth={1}>
            <Flex>
                <Text>
                    Hello World
                </Text>
            </Flex>
        </Box>
    )
}

export default App
