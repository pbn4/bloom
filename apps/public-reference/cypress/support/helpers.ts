/* eslint-disable  @typescript-eslint/no-explicit-any */
import { Listing } from "@bloom-housing/core"

type getIncomeReturn = {
  monthlyMin: number
  monthlyMax: number
  annualMin: number
  annualMax: number
} | null

export const setProperty = (
  obj: Record<string, any>,
  replacePath: string | string[],
  value: any
) => {
  if (Object(obj) !== obj) return obj

  let path: string[] = []

  if (!Array.isArray(replacePath)) path = replacePath.toString().match(/[^.[\]]+/g) || []

  path
    .slice(0, -1)
    .reduce(
      (a, c, i) =>
        Object(a[c]) === a[c]
          ? a[c]
          : (a[c] = Math.abs(+path[i + 1]) >> 0 === +path[i + 1] ? [] : {}),
      obj
    )[path[path.length - 1]] = value
  return obj
}

export const getListingIncome = (): getIncomeReturn => {
  const listing = sessionStorage.getItem("bloom-app-listing")

  if (!listing) return null

  const listingObj: Listing = JSON.parse(listing)

  const { units } = listingObj

  const [annualMin, annualMax, monthlyMin] =
    units &&
    units.reduce(
      ([aMin, aMax, mMin], unit) => [
        Math.min(aMin, parseFloat(unit.annualIncomeMin)),
        Math.max(aMax, parseFloat(unit.annualIncomeMax)),
        Math.min(mMin, parseFloat(unit.monthlyIncomeMin)),
      ],
      [Infinity, 0, Infinity]
    )
  const monthlyMax = annualMax / 12.0

  return {
    monthlyMin,
    monthlyMax,
    annualMin,
    annualMax,
  }
}
