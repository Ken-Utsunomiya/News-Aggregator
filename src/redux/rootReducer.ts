import ArticlesReducer from "./articles/articlesSlice"
import HeadlinesReducer from "./articles/headlinesSlice"

const rootReducer = {
  articlesReducer: ArticlesReducer,
  headlinesReducer: HeadlinesReducer
}

export default rootReducer