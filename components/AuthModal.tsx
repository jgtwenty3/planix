import React from 'react'
import { ModalType } from '@/types/enums'
import { Text, View } from 'react-native';

interface AuthModalProps {
  authType: ModalType | null;
}

const AuthModal = ({ authType }: AuthModalProps) => {
  return (
    <View>
      <Text>Auth Modal</Text>
    </View>
  )
}

export default AuthModal