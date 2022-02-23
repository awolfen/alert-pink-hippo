import './App.css';
import QuestionComponent from './components/QuestionComponent/QuestionComponent';

const DUMMY_DATA = {
  questionText: 'An animal cell contains:',
  answerList: [
    [{ text: 'Cell Wall', valid: false }, { text: 'Ribosomes', valid: true }, { text: 'Plants', valid: true }],
    [{ text: 'Cytoplasm', valid: true }, { text: 'Chloroplast', valid: false }],
    [{ text: 'Partially permeable membrane', valid: true }, { text: 'Impermeable membrane', valid: false }],
    [{ text: 'Cellulose', valid: false }, { text: 'Mitochondria', valid: true }],
  ]
};

// const DUMMY_DATA2 = {
//   questionText: 'An animal cell contains:',
//   answerList: [
//     [{ text: 'Bad Pay', valid: false }, { text: 'Good Pay', valid: true }],
//     [{ text: 'Less Meetings', valid: true }, { text: 'More Meetings', valid: false }],
//     [{ text: 'Free Coffee', valid: true }, { text: 'Expensive Coffee', valid: false }],
//     [{ text: 'Bear in Office', valid: false }, { text: 'Dog in Office', valid: true }],
//   ]
// };

const App = () => {
  return <>
    <QuestionComponent questionText={DUMMY_DATA.questionText} answerList={DUMMY_DATA.answerList} />
  </>
}

export default App;
