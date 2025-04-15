import { MentorPage } from '$/pages/mentor'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mentor')({
  component: MentorPage,
})

