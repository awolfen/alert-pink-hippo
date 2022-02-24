import answer from "../../shared/answer";
import { useAppSelector } from "../../store";
import "./SingleAnswerComponent.css";

const SingleAnswerComponent: React.FC<{
  position: number;
  answer: answer;
  onclick: (i: number, validity: boolean) => void;
}> = (props) => {
  //prop destructuring mostly useful for not having to put all props in useEffect dependency arrays, but also looks cleaner to me
  const { valid, text } = props.answer;
  //fetching store state to disable click when all answers are correct
  const percentCorrect = useAppSelector(
    (state) => state.counter.percentCorrect
  );
  const onClickHandler = () => {
    if (percentCorrect === 1) return;
    props.onclick(props.position, valid);
  };
  return (
    <>
      <span onClick={onClickHandler}>{text}</span>
    </>
  );
};

export default SingleAnswerComponent;
