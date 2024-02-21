import { AppShell, Stack } from "@mantine/core"
import Accordion from "sections/Accordion"

import Header from "sections/Header"
import ManagementSection from "sections/ManagementSection"
import Navbar from "sections/Navbar"

const AppLayout = () => {
  return (
    <AppShell>
      <Stack justify="flex-start" gap={0}>
        <Navbar />
        <Header />
        <Accordion />
        <ManagementSection />
      </Stack>
    </AppShell>
  )
}

export default AppLayout