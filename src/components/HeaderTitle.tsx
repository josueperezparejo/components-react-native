import React from 'react'
import { styles } from '../theme/appTheme'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store';

interface Props {
    title: string
}

export const HeaderTitle = ({ title }: Props) => {

    const { top } = useSafeAreaInsets()
    const {theme: {colors}}= useSelector((state:RootState) => state)

    return (
        <View style={{ marginTop: top + 20, marginBottom: 20 }}>
            <Text style={{...styles.title, color: colors.text }}>{title}</Text>
        </View>
    )
}
