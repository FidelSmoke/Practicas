Algoritmo Registro
	Definir nombre, email, nit, telefono, CONTRASEŅA, ConfirmacionContraseņa Como Cadena
	Definir usuario_nom, usuario_email, usuario_nit, usuario_tel, usuario_pass Como Cadena
	usuario_nom <- 'Fidel'
	usuario_email <- 'fideljoseespi10@gmail.com'
	usuario_nit <- '1028662003'
	usuario_tel <- '3142758305'
	usuario_pass <- 'fidel7777.'
	Escribir 'Ingresar Nombre'
	Leer nombre
	Escribir 'Ingresar Email'
	Leer email
	Escribir 'ingresar Nit'
	Leer nit
	Escribir 'Ingrese Numero De Telefono'
	Leer telefono
	Escribir 'Ingresar Contraseņa'
	Leer CONTRASEŅA
	Escribir 'Confirmar Contraseņa'
	Leer ConfirmacionContraseņa
	Si email=usuario_email Entonces
		Escribir 'Usuario Existente'
	SiNo
		Si CONTRASEŅA<>ConfirmacionContraseņa Entonces
			Escribir 'Las Contraseņas No Coinciden'
		SiNo
			Si Longitud(CONTRASENA)<8 Entonces
				Escribir 'La contraseņa debe tener minimo 8 caracteres'
			SiNo
				si telefono=usuario_tel Entonces
				Escribir 'Este Numero de celular ya existe'
			SiNo
				Escribir 'El Usuario A Sido Registrado Con Exito'
			FinSi
		FinSi
	FinSi
	FinSi
FinAlgoritmo
