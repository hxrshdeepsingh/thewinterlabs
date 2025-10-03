import { LegalPage } from '@/components/LegalPage'
import legalContent from '@data/legal.json'

export default function PrivacyPage() {
  return <LegalPage title={legalContent.privacy.title} sections={legalContent.privacy.sections} />
}
