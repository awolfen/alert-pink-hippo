import answer from '../../shared/answer';
import { useAppSelector } from '../../store';
import './SingleAnswerComponent.css'

const SingleAnswerComponent: React.FC<{ position: number, answer: answer, onclick: (i: number, validity: boolean) => void }> = (props) => {
    const isValid = props.answer.valid;
    const percentCorrect = useAppSelector(state => state.counter.percentCorrect);

    const onClickHandler = () => {
        if (percentCorrect === 1) return;
        props.onclick(props.position, isValid);
    }
    return <>
        <span onClick={onClickHandler}>{props.answer.text}</span>
    </>
}

export default SingleAnswerComponent;