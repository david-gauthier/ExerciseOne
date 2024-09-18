import { View, Text, StyleSheet, Platform, Image } from "react-native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
        case "electric":
            return { borderColor: "#FFD700", emoji: "⚡"};
        case "water":
            return { borderColor: "#6493EA", emoji: "💧"};
        case "fire":
            return { borderColor: "#FF713C", emoji: "🔥"};
        case "grass":
            return { borderColor: "#66CC66", emoji: "🍀"};
        case "default":
            return { borderColor: "#A0A0A0", emoji: "❓"};        
    }
}

export default function PokemonCard({
    name,
    image,
    type,
    hp,
    moves,
    weaknesses,
}) {

    const {borderColor, emoji} = getTypeDetails(type);
    


    return (
        <View style={styles.card}>


            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}>❤️️ Hp: {hp}</Text>
            </View>

            <Image style={styles.image} source={image} accessibilityLabel={`${name} pokemon`} resizeMode="contain"></Image>
            
            <View style={styles.typeContainer}>
                <View style={[styles.typeBadge, { borderColor }]}>
                    <Text styles={styles.typeEmoji}>{emoji}</Text>
                    <Text styles={styles.typeText}>{type}</Text>
                </View>
            </View>

            <View style={styles.movesContainer}>
                <Text style={styles.movesText}>Moves: {moves.join(", ")}</Text>
            </View>
  
            <View style={styles.weaknessesContainer}>
                <Text style={styles.weaknessesText}>Weaknesses: {weaknesses.join(", ")}</Text>
            </View>
        
        
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2 },
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            }
        })},    
    image:  {
        width: "100%",
        height: 300,
        marginBottom: 16,
        alignSelf: "center",
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
    },
    hp: {
        fontSize: 28,
    },  
    typeContainer: {
        alignItems: "center",
        marginBottom: 40,
    },
    typeBadge: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 12,
        borderWidth: 4,   
    },
    typeEmoji: {
        fontSize: 30,
        marginRight: 12,
    },
    typeText: {
        fontSize: 22,
        fontWeight: "bold",
    },
    movesContainer: {
        marginBottom: 16,
    },
    movesText: {
        fontSize: 22,
        fontWeight: "bold"
    },
    weaknessesContainer: {
        marginBottom: 8,
    },
    weaknessesText: {
        fontSize: 22,
        fontWeight: "bold"
    },
})
