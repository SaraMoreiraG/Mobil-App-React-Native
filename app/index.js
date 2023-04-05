import { useState } from 'react'
import { View, ScrollView, SafeAreaView, Text } from 'react-native'
import { Stack, useRouter } from 'expo-router'
// import constants ->
import { COLORS, icons, images, SIZES } from '../constants'
// import components ->
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'
import styles from '../app/index.style'


const Home = () => {
	console.log('Hola')
	const router = useRouter()
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
			{/* <Stack.Screen
				options={{
				headerStyle: { backgroundColor: COLORS.lightWhite },
				headerShadowVisible: false,
				headerLeft: () => (
					<ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
				),
				headerRight: () => (
					<ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
				),
				headerTitle: "",
				}}
			/> */}

			<View style={styles.header}>
				<ScreenHeaderBtn iconUrl={icons.menu} style={styles.headerLeft} dimension='60%' />
				<ScreenHeaderBtn iconUrl={images.profile} style={styles.headerRight} dimension='100%' />
			</View>

			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.scroll}>
					<Welcome />
					<Popularjobs />
					<Nearbyjobs />
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Home;
