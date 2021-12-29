import './CustomDiv.css'

interface CustomDivProps {
  // children은 JSX.Element로 전달된다.
  children: JSX.Element | JSX.Element[]
}

const CustomDiv = ({children}: CustomDivProps): JSX.Element => {
  return (
    <div className="custom-div">
      { children }
    </div>
  );
}

export default CustomDiv;
