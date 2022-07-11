import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { StorageSerializers, useStorage } from '@vueuse/core'

let user = useStorage('user', null, undefined, {
  serializer: StorageSerializers.object
})

const useUser = () => {
  const loginModel = ref({
    username: '',
    password: '',
  })
  const login = async () => {
    user.value = { id: 1, username: loginModel.value.username };
    ElMessage.success('login success')
  }
  const loggedIn = computed(() => user.value?.id)
  const logout = async () => {
    user.value = null;
    ElMessage.success('logout success')
  }

  return {
    login,
    loginModel,
    loggedIn,
    logout,
    user,
  }
}

export default useUser
