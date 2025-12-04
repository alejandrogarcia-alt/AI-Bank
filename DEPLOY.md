# 🚀 Guía de Deployment en Render

## Prerequisitos

- Cuenta en [Render](https://render.com) (gratis)
- Repositorio en GitHub: https://github.com/alejandrogarcia-alt/AI-Bank.git
- API Key de Google Gemini

## Pasos para Deploy

### 1. Conectar con Render

1. Ve a [Render Dashboard](https://dashboard.render.com)
2. Click en **"New +"** → **"Web Service"**
3. Conecta tu cuenta de GitHub si aún no lo has hecho
4. Busca el repositorio: `alejandrogarcia-alt/AI-Bank`
5. Click en **"Connect"**

### 2. Configurar el Servicio

Render detectará automáticamente el archivo `render.yaml`, pero también puedes configurar manualmente:

**Configuración Básica:**
- **Name:** `multiplica-bank` (o el nombre que prefieras)
- **Region:** Oregon (US West) o el más cercano a ti
- **Branch:** `main`
- **Root Directory:** (dejar vacío)

**Build & Deploy:**
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`

### 3. Configurar Variables de Entorno

**IMPORTANTE:** Debes agregar la API Key de Gemini:

1. En la configuración del servicio, ve a **"Environment"**
2. Click en **"Add Environment Variable"**
3. Agrega:
   - **Key:** `GEMINI_API_KEY`
   - **Value:** `tu-api-key-de-gemini-aqui`

4. También agrega (opcional pero recomendado):
   - **Key:** `NODE_VERSION`
   - **Value:** `18.17.0`

### 4. Deploy

1. Click en **"Create Web Service"**
2. Render comenzará a:
   - Clonar el repositorio
   - Instalar dependencias
   - Construir el proyecto
   - Iniciar el servidor

3. El proceso toma aproximadamente 3-5 minutos

### 5. Verificar el Deploy

Una vez completado, Render te dará una URL como:
```
https://multiplica-bank.onrender.com
```

Abre esa URL en tu navegador y verifica que:
- ✅ El sitio carga correctamente
- ✅ El chat flotante aparece
- ✅ Puedes hacer consultas al chat
- ✅ La navegación funciona

## 🔄 Auto-Deploy

Render está configurado para hacer **auto-deploy** cada vez que hagas push a la rama `main`:

```bash
# Hacer cambios en tu código
git add .
git commit -m "Actualización del sitio"
git push origin main

# Render automáticamente:
# 1. Detecta el push
# 2. Construye el proyecto
# 3. Deploya la nueva versión
```

## 🐛 Troubleshooting

### Error: "Build failed"

**Problema:** Las dependencias no se instalaron correctamente

**Solución:**
```bash
# En local, verifica que funcione:
npm install
npm run build
npm start

# Si funciona en local, revisa los logs de Render
```

### Error: "Application failed to respond"

**Problema:** La app no está iniciando correctamente

**Solución:**
1. Verifica que la variable `GEMINI_API_KEY` esté configurada
2. Revisa los logs en Render Dashboard → Logs
3. Asegúrate que el comando de start sea `npm start`

### Error: "Chat no responde"

**Problema:** La API Key de Gemini no está configurada o es inválida

**Solución:**
1. Ve a Environment Variables en Render
2. Verifica que `GEMINI_API_KEY` esté presente y sea correcta
3. Redeploya el servicio

### Logs en Tiempo Real

Para ver los logs en tiempo real:
1. Ve a tu servicio en Render Dashboard
2. Click en **"Logs"** en el menú lateral
3. Verás todos los logs de la aplicación

## 💰 Plan Gratuito de Render

El plan gratuito incluye:
- ✅ 750 horas de servicio por mes
- ✅ Auto-deploy desde GitHub
- ✅ SSL gratuito (HTTPS)
- ✅ Variables de entorno
- ⚠️ El servicio se "duerme" después de 15 minutos de inactividad
- ⚠️ Primera carga después de dormir toma ~30 segundos

Para mantener el servicio activo 24/7, considera:
- Upgrade a plan de pago ($7/mes)
- O usar un servicio como [UptimeRobot](https://uptimerobot.com) para hacer ping cada 5 minutos

## 🔒 Seguridad

**IMPORTANTE:**
- ✅ El archivo `.env` está en `.gitignore` y NO se sube a GitHub
- ✅ La API Key se configura directamente en Render
- ✅ Nunca compartas tu API Key públicamente
- ✅ Si expones tu API Key, genera una nueva inmediatamente

## 📝 Actualizar la Aplicación

Para hacer cambios:

```bash
# 1. Edita los archivos que necesites
# 2. Prueba localmente
npm run dev

# 3. Commit y push
git add .
git commit -m "Descripción de los cambios"
git push origin main

# 4. Render detectará el cambio y hará auto-deploy
```

## 🌐 Dominio Personalizado

Para usar tu propio dominio:

1. En Render Dashboard, ve a tu servicio
2. Click en **"Settings"** → **"Custom Domains"**
3. Agrega tu dominio
4. Configura los DNS records según las instrucciones de Render

---

## 📧 Soporte

Si tienes problemas con el deploy:
1. Revisa los logs en Render Dashboard
2. Consulta la [documentación de Render](https://render.com/docs)
3. Verifica que el proyecto funcione en local primero

**Repositorio:** https://github.com/alejandrogarcia-alt/AI-Bank.git

---

Hecho con ❤️ usando Next.js y Google Gemini
