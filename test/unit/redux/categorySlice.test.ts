import reducer, { initialState, setCategory } from "../../../src/redux/category/categorySlice"

test("should return the initial state", () => {
  const nextState = reducer(undefined, { type: undefined })
  expect(nextState).toEqual(initialState)
})

test("should handle category change", () => {
  const prevState = initialState
  const expectedCategory = "sports"
  const nextState = reducer(prevState, setCategory(expectedCategory))
  expect(nextState).toEqual(
    { selectedCategory: expectedCategory }
  )
})

test("should handle category change to an unknown category", () => {
  const prevState = initialState
  const nextState = reducer(prevState, setCategory("unknown"))
  expect(nextState).toEqual(initialState)
})
