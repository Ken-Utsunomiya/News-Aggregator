import configureStore from "redux-mock-store"
import thunk from "redux-thunk"

import reducer, { fetchHeadline, initialState } from "../../../src/redux/articles/headlinesSlice"
import * as NewsAPIClient from "../../../src/services/NewsAPIClient"

import type { HeadlinesState } from "../../../src/types/articles"
import type { AnyAction } from "redux"
import type { MockStoreEnhanced } from "redux-mock-store"
import type { ThunkDispatch } from "redux-thunk"

interface AppState {
  headlines: HeadlinesState
}
type AppDispatch = ThunkDispatch<AppState, void, AnyAction>

const mockStore = configureStore<AppState, AppDispatch>([thunk])

jest.mock("../../../src/services/NewsAPIClient")

describe("async thunks", () => {
  let store: MockStoreEnhanced<AppState, AppDispatch>

  beforeEach(() => {
    store = mockStore({ headlines: initialState })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test("fetchHeadline should dispatch the correct actions", async () => {
    const expectedCategory = "technology"
    const expectedCountry = "us"
    const mockResponse = [{ title: "Headline 1" }, { title: "Headline 2" }]

    jest.spyOn(NewsAPIClient, "getHeadline").mockResolvedValueOnce(mockResponse)

    await store.dispatch(fetchHeadline({
      category: expectedCategory, 
      country: expectedCountry
    }))

    const actions = store.getActions()

    expect(actions).toHaveLength(2)
    expect(actions[0].type).toBe(fetchHeadline.pending.type)
    expect(actions[1].type).toBe(fetchHeadline.fulfilled.type)
    expect(actions[1].payload.category).toBe(expectedCategory)
    expect(actions[1].payload.headline).toEqual(mockResponse)
  })
})

describe("reducer", () => {
  test("should return the initial state", () => {
    const nextState = reducer(undefined, { type: undefined })

    expect(nextState).toEqual(initialState)
  })
})
