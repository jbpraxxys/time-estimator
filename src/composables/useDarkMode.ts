import { ref, onMounted, watch } from 'vue'

export function useDarkMode() {
  const isDark = ref(false)

  function updateClass() {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  function toggle() {
    isDark.value = !isDark.value
    localStorage.setItem('dark-mode', isDark.value ? 'dark' : 'light')
    updateClass()
  }

  onMounted(() => {
    const stored = localStorage.getItem('dark-mode')
    if (stored) {
      isDark.value = stored === 'dark'
    } else {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    updateClass()
  })

  watch(isDark, updateClass)

  return { isDark, toggle }
}