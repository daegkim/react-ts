import styled, { keyframes } from 'styled-components'

interface ProgressbarProps {
  width: number,
  now: number,
}

const progressbarAni = (finalWidth: number) => keyframes`
  from {
    width: 0px;
  }
  to {
    width: ${finalWidth}px;
  }
`
// width: ${(props) => {return props.now * props.width / 100}}px;
// transition: 3000ms;
const Bar = styled.div<ProgressbarProps>`
  background-color: #09B864;
  height:20px;
  width:200px;
  border-radius: 8px;
  animation: ${(props) => {return progressbarAni(props.now * props.width / 100)}};
  animation-duration: 2s;
  animation-fill-mode: forwards;
`

const WrapperBar = styled.div<ProgressbarProps>`
  display: inline-block;
  background-color: #ececec;
  height:20px;
  width:200px;
  border-radius: 8px;
`

const Progressbar = ({width, now}: ProgressbarProps) => {
  return (
    <WrapperBar width={width} now={now}>
      <Bar width={width} now={now}>
        {now}
      </Bar>
    </WrapperBar>
  )
}

export default Progressbar