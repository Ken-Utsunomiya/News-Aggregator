import ArticlesReducer from "./articles/articlesSlice"
import HeadlineReducer from "./articles/headlinesSlice"

const rootReducer = {
  articlesReducer: ArticlesReducer,
  headlinesReducer: HeadlineReducer
}

export default rootReducer