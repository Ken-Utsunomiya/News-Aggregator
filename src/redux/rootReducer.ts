import ArticlesReducer from "./articles/articlesSlice"
import HeadlinesReducer from "./articles/headlinesSlice"
import CategoryReducer from "./category/categorySlice"
import LanguageReducer from "./languages/languageSlice"

const rootReducer = {
  articlesReducer: ArticlesReducer,
  categoryReducer: CategoryReducer,
  headlinesReducer: HeadlinesReducer,
  languageReducer: LanguageReducer
}

export default rootReducer