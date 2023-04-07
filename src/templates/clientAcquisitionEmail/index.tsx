import { Html } from '@react-email/html'
import { Head } from '@react-email/head'
import { Font } from '@react-email/font'
import { Text } from '@react-email/text'
import { Section } from '@react-email/section'
import { Container } from '@react-email/container'
import { Img } from '@react-email/img'
import * as S from './styles'
import { Button } from '@react-email/button'
import { BiUserCheck } from 'react-icons/bi'
import { ClientAcquisitionFormData } from '@/components/EmailForm/validationLogic/types'

export default function ClientAcquisitionEmail(
	formData: ClientAcquisitionFormData
) {
	const deploy_url = process.env.VERCEL_URL || 'http://localhost:3000'

	return (
		<Html>
			<Head lang="pt-br">
				<Font
					fontFamily="'Source Pro', sans-serif"
					fallbackFontFamily="Arial"
					webFont={{
						url: 'https://fonts.gstatic.com/s/sourcesanspro/v21/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNa7lqDY.woff2',
						format: 'woff2'
					}}
					fontWeight={400}
				/>
			</Head>
			<Section style={S.Main}>
				<Container style={S.Container}>
					<Container style={S.ImageContainer}>
						<Img
							src={`${deploy_url}/img/minimalistic-logo.jpg`}
							alt="Arquitetura Local Logo"
							height={'94'}
							width={'212'}
						/>
					</Container>
					<Text style={S.Heading}>Aquisição de Clientes - Site Arq Local</Text>
					<br />
					<Text style={S.Paragraph}>
						{deploy_url} Um cliente enviou um email!
					</Text>
					<br />
					<BiUserCheck size={32} style={{ marginTop: 20 }} />
					<Text style={S.FormItem}>
						<strong>Nome:</strong> {formData.name}
					</Text>
					<Text style={S.FormItem}>
						<strong>Email:</strong> {formData.email}
					</Text>
					<Text style={S.FormItem}>
						<strong>Telefone:</strong> {formData.phone}
					</Text>
					<Text style={S.FormItem}>
						<strong>Mensagem:</strong> {formData.message}
					</Text>
					<Button href={`https://wa.me/55${formData.phone}`} style={S.Button}>
						<Img
							src={`${deploy_url}/img/WhatsAppButtonGreenMedium.jpg`}
							alt={'WhatsApp button'}
							height="62"
							width="269"
						/>
					</Button>
				</Container>
			</Section>
		</Html>
	)
}
