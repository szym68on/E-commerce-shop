import GeneralInfo from "./GeneralInfo";
import GetConnected from "./GetConnected";
import EndFooter from "./EndFooter";
function Footer() {
  return (
    <footer className="bg-lightBlue mt-44 min-h-[300px] overflow-hidden">
      <GetConnected />
      <GeneralInfo />
      <EndFooter />
    </footer>
  );
}

export default Footer;
