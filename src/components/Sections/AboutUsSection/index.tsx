import React from 'react'
import * as S from './styles'
import PhilosophySection from '@/components/Sections/AboutUsSection/PhilosophySection'
import TeamSection from '@/components/Sections/AboutUsSection/TeamSection'
import OurJobSection from '@/components/Sections/AboutUsSection/OurJobSection'
import CreativeStepsSection from '@/components/Sections/AboutUsSection/CreativeStepsSection'

const AboutUsSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<S.Wrapper ref={ref}>
			<PhilosophySection />
			<TeamSection />
			<CreativeStepsSection />
			<OurJobSection />
		</S.Wrapper>
	)
})
AboutUsSection.displayName = 'About Us Section'
export default AboutUsSection
