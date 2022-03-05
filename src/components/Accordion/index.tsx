import { ReactNode, useState } from "react"
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material"
import { Icon } from "@iconify/react"

export const Accordion = ({
  summary,
  details,
}: {
  summary: ReactNode
  details: ReactNode
}) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)

  return (
    <MuiAccordion
      expanded={isAccordionOpen}
      onChange={() => setIsAccordionOpen((prev) => !prev)}
    >
      <AccordionSummary expandIcon={<Icon icon="dashicons:arrow-down-alt2" />}>
        {summary}
      </AccordionSummary>
      <AccordionDetails>{details}</AccordionDetails>
    </MuiAccordion>
  )
}
