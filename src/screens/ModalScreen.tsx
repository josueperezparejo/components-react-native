import { Button, Modal, Text, View } from "react-native"
import { HeaderTitle } from "../components"
import { styles } from "../theme/appTheme"
import { useState } from "react"

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false)
  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title="Modal" />

        <Button 
            title="Abrir Modal"
            onPress={() => setIsVisible(true)}
        />

        <Modal
            animationType="fade"
            visible={isVisible}
            transparent
        >

            <View style={{
                    flex: 1, 
                    backgroundColor: 'rgba(3,3,3,0.7', 
                    justifyContent: 'center', 
                    alignItems: 'center'
                }}>
                <View style={{backgroundColor: 'white', padding: 20, borderRadius: 12}}>
                    <HeaderTitle title="Modal" />
                    <Text style={{marginBottom: 12}}>Cuerpo del Modal</Text>
                    <Button title="cerrar modal" onPress={() => setIsVisible(false)} />
                </View>
            </View>

        </Modal>
    </View>
  )
}