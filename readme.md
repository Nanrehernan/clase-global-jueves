
## Lista de comandos GIT

git init (Comando para inicializar git en nuestro proyecto)

git remote add origin https://github.com/Lirico/clase-global-jueves.git
(comando para conectar nuestro proyecto con X repositorio)

git add "nombre archivo" (registar cambio un archivo)

git add . (para registrar cambios en todos los archivos)

git commit (abre una pantalla donde coloco titulo y descripcion del commit)

git commit -m "nombre" (registra un backup automatico solo con nombre, sin descrip.)

git log (nos permite visualizar todos commits)

git push origin "nombre" (actualizar la rama origen)

git push (actualiza los cambios de pc a repo)

git branch "nombre" (comando para crear una nueva rama)

git checkout "nombre rama" (comando para cambiar de rama)

git checkout -b "nombre rama" (crear rama y movernos directamente a ella)

git pull (descargamos los cambios de repo a PC)

git clone "enlace repo" (clona el contenido de un respositorio en nuestra compu)


## NOTA

Si te aparecen estas opciones cuando estas configurando git en tu proyecto, solo necesitas
definirle un nombre nombre de usuario y una contraseña. Una vez listo eso -> Enter -> Y continuas 
con los comandos convencionales.

git config --global user.name "John Doe"
git config --global user.email johndoe@example.com