import { createElement, HTMLAttributes } from "react"
import sanitize from "sanitize-html"

type SanitizeHTMLProps = {
  children: string;
  tag: string;
} & HTMLAttributes<HTMLElement>

export const SanitizeHTML = ({ children, tag, ...props }: SanitizeHTMLProps) => {
  const sanitizedHTML = sanitize(children, {
    allowedTags: ['b', 'i', 'em', 'strong'] // Son las etiquetas HTML que dejara pasar
  });

  return createElement(tag,{ ...props }, sanitizedHTML)
}