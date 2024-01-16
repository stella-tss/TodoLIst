import { ActivityIndicator, View } from 'react-native'
import { theme } from '../../themes'
import { styles } from './styles'

export function Loading() {
	return (
		<View style={styles.container}>
			<ActivityIndicator size={'large'} color={theme.colors.brand.blue} />
		</View>
	)
}