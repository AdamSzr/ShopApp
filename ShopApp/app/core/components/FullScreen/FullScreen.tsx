import { AuthenticationError, Link, useMutation, Routes, PromiseReturnType } from "blitz"
import { Box } from "@chakra-ui/react"

export const FullScreen = (props) => {
  return <Box className="FullScreen">{props.children}</Box>
}

export default FullScreen