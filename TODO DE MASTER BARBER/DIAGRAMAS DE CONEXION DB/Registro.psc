Algoritmo Registro
	Definir nombre, email, nit, telefono, CONTRASE�A, ConfirmacionContrase�a Como Cadena
	Definir nombre_usuario, email_usuario, nit_usuario, telefono_usuario, pass_usuario Como Cadena
	nombre_usuario <- 'Fidel'
	email_usuario <- 'fideljoseespi10@gmail.com'
	nit_usuario <- '1028662003'
	telefono_usuario <- '3142758305'
	pass_usuario <- 'fidel7777.'
	Escribir 'Ingresar Nombre'
	Leer nombre
	Escribir 'Ingresar Email'
	Leer email
	Escribir 'ingresar Nit'
	Leer nit
	Escribir 'Ingrese Numero De Telefono'
	Leer telefono
	Escribir 'Ingresar Contrase�a'
	Leer CONTRASE�A
	Escribir 'Confirmar Contrase�a'
	Leer ConfirmacionContrase�a
	Si email=email_usuario Entonces
		Escribir 'Usuario Existente'
	SiNo
		Si CONTRASE�A<>ConfirmacionContrase�a Entonces
			Escribir 'Las Contrase�as No Coinciden'
		SiNo
			Si Longitud(CONTRASENA)<8 Entonces
				Escribir 'La contrase�a debe tener minimo 8 caracteres'
			SiNo
				si telefono=telefono_usuario Entonces
				Escribir 'Este Numero de celular ya existe'
			SiNo
				Escribir 'El Usuario A Sido Registrado Con Exito'
			FinSi
		FinSi
	FinSi
	FinSi
FinAlgoritmo
