import answer from "../../shared/answer";
import { useAppSelector } from "../../store";
import "./SingleAnswerComponent.css";

const SingleAnswerComponent: React.FC<{
  position: number;
  answer: answer;
  onclick: (i: number, validity: boolean) => void;
}> = (props) => {
  const { valid, text } = props.answer;
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
