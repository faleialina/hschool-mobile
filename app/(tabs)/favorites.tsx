import { CodeComponent } from '@/components/CodeComponent'
import { Collapsible } from '@/components/Collapsible'
import { ExternalLink } from '@/components/ExternalLink'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Ionicons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from 'expo-router'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'

interface iDescription {
	readonly id: number
	readonly code: string
	readonly link: string[]
	readonly question: string
	readonly answer: string
}

export default function Favorites() {
	const [favorites, setFavorites] = useState<iDescription[]>([])

	const toggleLike = async (el: iDescription) => {
		const updatedLikes = favorites.some(likeEl => likeEl.id === el.id)
			? favorites.filter(likeEl => likeEl.id !== el.id)
			: [...favorites, el]

		setFavorites(updatedLikes)
		await AsyncStorage.setItem('likedQuestions', JSON.stringify(updatedLikes))
		console.log(updatedLikes)
	}

	const loadFavorites = async () => {
		try {
			const storedFavorites = await AsyncStorage.getItem('likedQuestions')
			if (storedFavorites) setFavorites(JSON.parse(storedFavorites))
			console.log(storedFavorites)
		} catch (error) {
			console.error('Ошибка при загрузке избранных вопросов:', error)
		}
	}

	useFocusEffect(
		React.useCallback(() => {
			loadFavorites()
		}, [])
	)

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#e4edef', dark: '#353636' }}
			headerImage={
				<Ionicons size={310} name='heart' style={styles.headerImage} />
			}
		>
			<ThemedView>
				<ThemedText type='title'>Favorites</ThemedText>

				{favorites.map((el, index) => (
					<Collapsible key={index} title={el.question}>
						<ThemedText>{el.answer}</ThemedText>

						{el.code && <CodeComponent code={el.code} />}

						{el.link &&
							el.link.map((link, linkIndex) => (
								<ExternalLink key={linkIndex} href={link}>
									<ThemedText type='link'>
										{' '}
										Узнать больше #{linkIndex + 1}{' '}
									</ThemedText>
								</ExternalLink>
							))}
						<Ionicons
							size={30}
							name={
								favorites.some(likeEl => likeEl.id === el.id)
									? 'heart'
									: 'heart-outline'
							}
							style={styles.headerFavoritesImage}
							onPress={() => toggleLike(el)}
						/>
					</Collapsible>
				))}
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
	headerFavoritesImage: {
		color: '#A1CEDC',
	},
})
