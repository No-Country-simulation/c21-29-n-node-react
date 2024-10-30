import SectionExams from "../components/SectionExams";
import SectionInfo from "../components/SectionInfo";
import SectionServices from "../components/SectionServices";
import SectionCardSpecialists from "../components/SectionCardSpecialists";

const DashboardMain = () => {
  return (
    <>
      <SectionServices />
      <SectionInfo />
      <SectionExams />
      <SectionCardSpecialists />
    </>
  );
};

export default DashboardMain;
