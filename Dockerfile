############################################################
# Dockerfile para configurar aplicación en node.js - Express
############################################################

# Establece la imagen base
FROM node

# Información de Metadata
LABEL maintainer="niko.afv@gmail.cl"
LABEL version="1.0"


# Crear directorio de trabajo
RUN mkdir -p /opt/api

# Se estable el directorio de trabajo
WORKDIR /opt/api

# Instala los paquetes existentes en el package.json
COPY api/package.json .
RUN npm install --quiet

# Instalación de Nodemon en forma Global
# Al realizarse cambios reiniciar el servidor
RUN npm install nodemon -g --quiet

# Copia la Aplicación
COPY api .

# Expone la aplicación en el puerto 8000
EXPOSE 8000

# Inicia la aplicación al iniciar al contenedor
CMD nodemon -L --watch . app.js