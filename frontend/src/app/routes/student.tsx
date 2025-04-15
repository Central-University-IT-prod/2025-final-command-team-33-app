import { StudentPage } from '$/pages/student/ui/StudentPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/student')({
  component: StudentPage,
})
