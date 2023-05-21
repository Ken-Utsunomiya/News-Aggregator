import ArticlesReducer from "./articles/articlesSlice"
import HeadlinesReducer from "./articles/headlinesSlice"
import LanguageReducer from "./languages/languageSlice"

const rootReducer = {
  articlesReducer: ArticlesReducer,
  headlinesReducer: HeadlinesReducer,
  languageReducer: LanguageReducer
}

export default rootReducer