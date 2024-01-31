import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, TouchableWithoutFeedback, View } from "react-native"
import { styles } from "../theme/appTheme"
import { HeaderTitle } from "../components"
import { useState } from "react"
import { useForm } from "../hooks"

export const TextInputsScreen = () => {

    const { form, onChange } = useForm({
        name: '',
        email: '',
        phone: ''
    })

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin}>
                        <HeaderTitle title="TextInputs" />

                        <TextInput
                            style={stylesScreen.inputsStyles}
                            placeholder="Ingresa tu nombre"
                            autoCorrect={false}
                            autoCapitalize="words"
                            onChangeText={(value) => onChange(value, 'name')}
                        />
                        <TextInput
                            style={stylesScreen.inputsStyles}
                            placeholder="Ingresa tu nombre"
                            autoCorrect={false}
                            autoCapitalize="words"
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType="email-address"
                        />
                        <TextInput
                            style={stylesScreen.inputsStyles}
                            placeholder="Ingresa tu nombre"
                            autoCorrect={false}
                            autoCapitalize="words"
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType="phone-pad"
                        />

                        <HeaderTitle title={JSON.stringify(form, null, 5)} />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
    inputsStyles: {
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        height: 50,
        marginBottom: 12
    }
});