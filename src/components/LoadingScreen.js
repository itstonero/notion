import { Box, forwardRef, Container } from "@chakra-ui/react"
import { motion, isValidMotionProp } from "framer-motion"

// 1. Create a custom motion component from Box
const MotionBox = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
    )
    return <Box ref={ref} {...chakraProps} />
  }),
)

// 2. You'll get access to `motion` and `chakra` props in `MotionBox`
export default function LoadingScreen() {
  return (
      <Container
        h="100vh"
        d="flex"
        alignItems="center"
        justifyContent="center"
      >
        <MotionBox
          as="aside"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: [
              "20%",
              "20%",
              "50%",
              "50%",
              "20%"
            ]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1
          }}
          padding="2"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          width="12"
          height="12"
          display="flex"
        />
      </Container>
  )
}