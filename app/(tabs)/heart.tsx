import { Ionicons } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'

import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'

export default function Heart() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#e4edef', dark: '#353636' }}
			headerImage={
				<Ionicons size={310} name='heart' style={styles.headerImage} />
			}
		>
			<ThemedView>
				<ThemedText type='title'>Favorites</ThemedText>
			</ThemedView>
		</ParallaxScrollView>
	)
}

const styles = StyleSheet.create({
	headerImage: {
		color: '#A1CEDC',

		bottom: -90,
		left: -27,
		position: 'absolute',
	},
})
