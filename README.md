### Instructions:

- git clone https://github.com/awolfen/alert-pink-hippo.git
- cd alert-pink-hippo
- npm install
- npm start

### Requirements, please:

- State any assumptions or limitations of your solution in the repository readme
- Put your soluton in git repo & email the link once you are done
- Some form of type checking should be used e.g. flow, propTypes, typescript
- The component should be responsive down to 320px
- The solution should lock once the correct answer is reached so the toggles can no longer be switched
- Ignore the navbar or footer just the toggles component itself
- The toggles should animate between the two states (see attached video)
- The background color should change in proportion to how "correct" the answer is (see video attached)
- The component should be reusable & extendable, it should be able to accomodate the question changing from that in the video to e.g:

Q. "What are the ideal conditions inside an office?"
A. (good pay, bad pay) (lot of meetings, less meetings), (free coffee, expensive coffee), (bear in office, dog in office).

Extension:

- The order of the questions & answer positions should be randomised
- You solution should be able to accomodate answers with both two and three toggle positions in the answers. For example:
  Q. "Which are the best sports people & teams?"
  A. (Liverpool, Chelsea, Man Utd), (Serena Williams, Naomi Osaka)
- You should make it easy to switch between the active question

### Assumptions, limitations:
- only works with questions with 2-3 answers
- animations written with vanilla js/css, could be improved with certain libraries (e.g. React Transition Group Library)
- state currently stored in a mix of local state and redux, depending on context could favor on or the other for continuity
- no unit tests, next step might be to write tests to a specification and then refactor to be consistent with the project with which to integrate

- there may be a fourth background color to be included, but I could not find it on the figma page and it seems trivial to implement so I'll leave it with 3
- on that note the css is not a 100% match to the figma page, I could spend some more time tweaking values but I'm not sure if that is the goal of this execise
