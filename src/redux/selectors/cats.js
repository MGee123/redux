import { CreateSelector } from 'reselect-change-memoize'

export default CreateSelector(
'cats'
(state) => state.cats,
(catsState) => {
return {
...CatsState,
}
}
)
