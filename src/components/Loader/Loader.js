import { Oval } from 'react-loader-spinner';

const Loader = () => (
  <Oval
    height={60}
    width={60}
    color="#2196f3"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel="oval-loading"
    secondaryColor="#2196f3"
    strokeWidth={2}
    strokeWidthSecondary={2}
  />
);

export default Loader;
