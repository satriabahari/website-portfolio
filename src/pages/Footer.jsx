import { Description } from "../components/Elements/Text/Description";
import { FirstLayout } from "../components/Layouts/FirstLayout";

export const Footer = () => {
  return (
    <FirstLayout classname="h-12 bg-background border-t border-primary dark:border-darkprimary dark:bg-darkbackground">
      <Description classname="flex justify-center items-center text-primary dark:text-white">
        Design & develop by Satria Bahari @2023
      </Description>
    </FirstLayout>
  );
};
