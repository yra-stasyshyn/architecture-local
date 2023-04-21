import React from 'react'
import * as S from './styles'
import PhilosophySection from '@/Sections/AboutUsSection/PhilosophySection'
import TeamSection from '@/Sections/AboutUsSection/TeamSection'
import OurJobSection from '@/Sections/AboutUsSection/OurJobSection'
import CreativeStepsSection from '@/Sections/AboutUsSection/CreativeStepsSection'

const AboutUsSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<S.Wrapper ref={ref}>
			<PhilosophySection />
			<TeamSection />
			<OurJobSection />
			<CreativeStepsSection />
		</S.Wrapper>
	)
})
AboutUsSection.displayName = 'About Us Section'
export default AboutUsSection
