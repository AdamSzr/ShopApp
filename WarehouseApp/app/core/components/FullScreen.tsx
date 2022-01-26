import { AuthenticationError, Link, useMutation, Routes, PromiseReturnType } from "blitz"
import { Box } from "@chakra-ui/react"

export const FullScreen = (props) => {
  return <Box className="full_screen">{props.children}</Box>
}

export default FullScreen