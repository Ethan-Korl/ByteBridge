import { Pressable, Text } from "react-native"
import { Icon } from "@rneui/themed"

const CloudButton = (props) => {
    const { onPress, iconType="antdesign" , title ="Upload File To Cloud"} = props
  return (
    <Pressable className='bg-slate-800 rounded-lg w-60 p-2' onPress={onPress}>
        <Icon name='cloudupload' color={'white'} type={iconType} />
        <Text className='text-center text-lg text-slate-100'>{title}</Text>
    </Pressable>
  )
}

export default CloudButton;