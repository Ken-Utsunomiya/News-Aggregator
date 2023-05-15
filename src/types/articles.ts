export interface Article {
  source: string
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export interface ArticlesState {
  articles: Article[]
  selectedArticle: Article
  loading: boolean
  error: string | undefined
}
