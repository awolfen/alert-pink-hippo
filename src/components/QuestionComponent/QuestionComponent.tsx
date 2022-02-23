import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store";

import shuffle from "../../shared/shuffle";
import answer from "../../shared/answer";
import { counterActions } from "../../store/counter-slice";
import MultipleAnswerComponent from "../MultipleAnswerComponent/MultipleAnswerComponent";

import './QuestionComponent.css';

const QuestionComponent: React.FC<{ questionText: string, answerList: answer[][] }> = (props) => {
    const { answerList, questionText } = props;
    const dispatch = useDispatch();
    const percentCorrect = useAppSelector(state => state.counter.percentCorrect);
    const [allValid, setAllValid] = useState<Boolean[]>([]);
    const [shuffledAnswerList, setShuffledAnswerList] = useState<answer[][]>([]);

    const setAnswerValidity = (i: number, validity: boolean) => {
        let emptyArr = allValid;
        emptyArr[i] = validity;
        setAllValid(emptyArr);
        let correct = allValid.filter(Boolean).length;
        dispatch(counterActions.setCounter(correct));
    }

    useEffect(() => {
        let emptyArr: boolean[] = [];
        for (let i = 0; i < answerList.length; i++) {
            emptyArr[i] = false;
        }
        dispatch(counterActions.setCounterMax(emptyArr.length));
        setAllValid(emptyArr);
    }, []);

    useEffect(() => {
        setShuffledAnswerList(shuffle(answerList));
    }, []);

    return <>
        <div className={`QuestionComponent ${(percentCorrect <= 0.33) ? 'Background0' : ''}${(0.33 < percentCorrect && percentCorrect < 1) ? 'Background1' : ''}${(percentCorrect === 1) ? 'Background2' : ''}`}>
            <h1 className="QuestionText">{questionText}</h1>
            {shuffledAnswerList.map((set, idx) => {
                return <MultipleAnswerComponent key={idx} position={idx} answerSet={set} setAnswerValidity={setAnswerValidity} />
            })}
            <h1 className="AnswerText">The answer is {percentCorrect === 1 ? 'correct' : 'incorrect'}.</h1>
        </div>
    </>
}

export default QuestionComponent;