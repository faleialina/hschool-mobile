import { TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  // const topics = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'SQL', 'noSQL', 'Node.js'];
  const topics = ['HTML', 'CSS', 'JavaScript'];
  const router = useRouter()

  const handleTopicPress = (topic: string) => {
    router.navigate(topic);
  };

  return (
    <LinearGradient
      colors={['#A1CEDC', '#e4edef']}
      style={styles.container}
    >

      <Image source={require('@/assets/images/HS.png')} style={{ width: '75%', resizeMode: 'contain', position: 'relative', bottom: '10%' }} />

      <View style={{ justifyContent: 'center', alignItems: 'center', gap: 10 }}>
        <ThemedText type='title'>Выберите тему:</ThemedText>

        <View style={styles.topicList}>
          {topics.map((topic, index) => (
            <TouchableOpacity
              key={index}
              style={styles.topicButton}
              onPress={() => handleTopicPress(topic)}
            >
              <ThemedText>{topic}</ThemedText>
            </TouchableOpacity>
          ))}
        </View>
      </View>

    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  topicList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
    zIndex: 100
  },
  topicButton: {
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    padding: 10,
    margin: 5,
  },

  reactLogo: {
    height: 40,
    width: '70%',
    position: 'relative',
    left: '12%',
    marginBottom: 50
  },
});
