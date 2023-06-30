import Description from "../components/Elements/Text/Description"
import FirstLayout from "../components/Layouts/FirstLayout"

const Footer = () => {
  return(
    <FirstLayout classname="h-12 bg-background border-t border-primary">
      <Description classname="flex justify-center items-center text-primary">
        Design & develop by Satria Bahari @2023
      </Description>
    </FirstLayout>
  )
}

export default Footer