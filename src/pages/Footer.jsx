import Description from "../components/Elements/Text/Description"
import FirstLayout from "../components/Layouts/FirstLayout"

export const Footer = () => {
  return(
    <FirstLayout classname="h-12 bg-primary border-t border-primary">
      <Description classname="flex justify-center items-center text-background">
        Design & develop by Satria Bahari @2023
      </Description>
    </FirstLayout>
  )
}

