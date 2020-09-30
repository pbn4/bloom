import { useRouter } from "next/router"
import { LangItem } from "../navigations/LanguageNav/LanguageNav"

export function useLanguageChange(languages: LangItem[]) {
  const router = useRouter()

  function change(prefix: string): void {
    if (typeof window == "undefined") return

    const pathname = window.location.pathname

    let newPath = pathname

    const pathIncludesLang = languages.filter((item) => {
      const pattern = new RegExp(`(/${item.prefix}/$)|(/${item.prefix}$)|(/${item.prefix}/)`, "gm")

      return item.prefix !== "" && pattern.test(pathname)
    })

    if (pathIncludesLang.length && prefix === "") {
      newPath = pathname.replace(
        `${pathIncludesLang[0].prefix}${pathname.length > 3 ? `/` : ``}`,
        ``
      )
    } else if (!pathIncludesLang.length && prefix !== "") {
      newPath = `/${prefix + pathname}`
    }

    router.replace({
      pathname: newPath,
    })
  }

  return change
}
