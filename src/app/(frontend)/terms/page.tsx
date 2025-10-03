import { LegalPage } from '@/components/LegalPage'
import legalContent from '@data/legal.json'

export default function TermsPage() {
  return <LegalPage title={legalContent.terms.title} sections={legalContent.terms.sections} />
}
