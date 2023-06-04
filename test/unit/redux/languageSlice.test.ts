import reducer, { initialState, setLanguage } from "../../../src/redux/languages/languageSlice"

test("should return the initial state", () => {
  const nextState = reducer(undefined, { type: undefined })
  expect(nextState).toEqual(initialState)
})

test("should handle language change", () => {
  const prevState = initialState
  const nextState = reducer(prevState, setLanguage("jp"))
  expect(nextState).toEqual(
    { selectedLanguage: "jp" }
  )
})