import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),dts({
    include:['src/index.ts']
  })],
  publicDir:false,
  build:{
    lib:{
      entry: 'src/index.ts',
      name:'GeLog',
      fileName:(format)=>`index.${format}.js`
    }
  }
})
