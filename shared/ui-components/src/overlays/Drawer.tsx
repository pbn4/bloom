import * as React from "react"
import "./Drawer.scss"
import { Icon } from "../icons/Icon"
import { Overlay, OverlayProps } from "./Overlay"

export interface DrawerProps extends OverlayProps {
  title?: string
  subtitle?: string
  className?: string
  actions?: React.ReactNode[]
}

const Drawer = (props: DrawerProps) => {
  const drawerClasses = ["drawer"]
  if (props.className) drawerClasses.push(props.className)

  return (
    <Overlay
      ariaLabel={props.ariaLabel || props.title}
      ariaDescription={props.ariaDescription}
      open={props.open}
      onClose={props.onClose}
      backdrop={props.backdrop}
      className="has-fullsize-inner"
    >
      <div className={drawerClasses.join(" ")}>
        <header className="drawer__header">
          {props.title && <h1 className="drawer__title">{props.title}</h1>}
          <button onClick={props.onClose} className="drawer__close" aria-label="Close" tabIndex={0}>
            <Icon size="medium" symbol="close" />
          </button>
        </header>

        <div className="drawer__body">
          <div className="drawer__content">{props.children}</div>
        </div>
      </div>
    </Overlay>
  )
}

export { Drawer as default, Drawer }