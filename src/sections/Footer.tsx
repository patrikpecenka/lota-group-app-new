import { Anchor, Group } from "@mantine/core"
import classes from "../styles/Footer.module.css"
import FooterLinks from "constant/FooterLinks"

const Footer = () => {
  const links = FooterLinks.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ))

  return (
    <div className={classes.footer}>
      <div className={classes.innerContainer}>
        <Group className={classes.links}>{links}</Group>
      </div>
    </div>
  )
}

export default Footer