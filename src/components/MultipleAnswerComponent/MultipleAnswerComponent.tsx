import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import answer from '../../shared/answer';
import shuffle from '../../shared/shuffle';
import SingleAnswerComponent from '../SingleAnswerComponent/SingleAnswerComponent';

import './MultipleAnswerComponent.css';

const MultipleAnswerComponent: React.FC<{ position: number, answerSet: answer[], setAnswerValidity: (i: number, validity: boolean) => void }> = (props) => {
    const { position, answerSet, setAnswerValidity } = props;
    const [shuffledAnswerSet, setShuffledAnswerSet] = useState<answer[]>([]);
    const [highlighterHeight, setHighlighterHeight] = useState(76);
    const highlighterRef = useRef<HTMLDivElement>(null);

    const setSize = () => {
        setHighlighterHeight(document.getElementsByClassName('MultipleAnswerComponent')[0].clientHeight);
        const { current } = highlighterRef;
        if (current && current.parentNode) {
            if (current.parentNode.childNodes.length === 3) current.classList.add("DHigh");
            if (current.parentNode.childNodes.length === 4) current.classList.add("THigh");
            current.setAttribute('style', `height: ${highlighterHeight}px`);
        }
    }

    const onClickHandler = (i: number, validity: boolean) => {
        const { current } = highlighterRef;
        if (current && current.parentNode) {
            if (current.parentNode.childNodes.length === 3) current.className = `Highlighter DHigh DPos${i}`;
            if (current.parentNode.childNodes.length === 4) current.className = `Highlighter THigh TPos${i}`;
        }
        setAnswerValidity(position, validity);
    };

    useEffect(() => {
        setShuffledAnswerSet(shuffle(answerSet));
    }, []);

    useLayoutEffect(() => {
        setSize()
    }, [])

    return <>
        <div className='MultipleAnswerComponent'>
            <div ref={highlighterRef} className='Highlighter initial'></div>
            {shuffledAnswerSet.map((answer, idx) => {
                return <SingleAnswerComponent key={idx} onclick={onClickHandler} answer={answer} position={idx} />
            })}
        </div>
    </>
}

export default MultipleAnswerComponent;