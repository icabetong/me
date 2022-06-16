import React from "react"

export type SectionRef = React.LegacyRef<HTMLElement>

export type SectionProps = {
  sectionRef?: SectionRef
}

export type LocaleProps = {
  locale: string
}