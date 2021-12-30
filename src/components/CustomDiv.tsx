import CustomError from '../error/CustomError';
import './CustomDiv.css'

interface CustomDivProps {
  // children은 JSX.Element로 전달된다.
  children: JSX.Element | JSX.Element[],
  hasError?: boolean
}

const CustomDiv = ({children, hasError}: CustomDivProps): JSX.Element => {
  if(hasError) {
    throw new CustomError();
  }
  return (
    <div className="custom-div">
      { children }
    </div>
  );
}

export default CustomDiv;
