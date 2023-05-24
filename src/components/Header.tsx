import React from "react"

import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { selectLanguage, setLanguage } from "../redux/languages/languageSlice"

const Header = () => {
  const selectedLanguage = useAppSelector(selectLanguage)
  const dispatch = useAppDispatch()

  const handleLanguageChange = (language: string) => {
    dispatch(setLanguage(language))
  }

  return (
    <div  className="flex items-center justify-between">
      <div>
        Header
      </div>
      <div>
        <button
          onClick={ () => handleLanguageChange("en") }
          disabled={ selectedLanguage === "en" }
        >
          EN
        </button>
        <button
          onClick={ () => handleLanguageChange("jp") }
          disabled={ selectedLanguage === "jp" }
        >
          JP
        </button>
      </div>
    </div>
  )
}

export default Header
