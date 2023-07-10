INSERT INTO salas (N_sala,cupo_min,cupo_max,numero_sala) VALUES 
(1,12,30,12),
(2,6,30,15),
(3,7,30,13),
(4,8,30,9),
(5,9,30,20); 

INSERT INTO roles(id,nombre_rol)VALUES
(1,'Administrador'),
(2,'Profesor'),
(3,'Estudiante'); 


insert into usuarios(id_usuario,direccion_id,nombre,apellidoP,apellidoM,celular,correo,fecha_nacimiento,password,roles_id) values
(1,1,'administrador','admin','administrando',+5694877777,'administrador@admin.cl','1999-12-12','administrador',1),
(2,1,'profesor','profe','teacher',+5694899999,'profesor@profe.cl','1989-2-19','profesor',2),
(3,1,'alumno','alumno','alumn',+5694866666,'alumno@alum.cl','1996-2-4','alumno',3);

Insert Into direcciones (id_direccion,comuna_id,calle,numero) values
(1,1,'Calle Falsa',123);
select * from usuarios;


UPDATE usuarios
SET password ='$$2a$10$Tsni6sXyYJZtxOKenbgNJeKOAZ8AYzFadZi7q7DoObBtHXlPWje3O'
WHERE id_usuario = 3;

INSERT INTO profesores(id_profe,usuario_id,url_imagen) VALUES
(1,2,'https://img.freepik.com/foto-gratis/chicas-tiro-medio-maestra-gimnasio_23-2149038738.jpg?size=626&ext=jpg');

Insert into nombre_clases(id_NC,nombre) values
(1,'boxeo'),
(2,'cardio'),
(3,'Pilates'),
(4,'kickb boxing');


INSERT INTO horarios(clase_id,hora,dia_semana,duracion_minutos,cantidad_dias)VALUES
(NULL,'10:00:00',1,20,1),
(NULL,'11:00:00',1,20,1),
(NULL,'12:00:00',1,20,1),
(NULL,'13:00:00',1,20,1),
(NULL,'14:00:00',1,20,1);


INSERT INTO salas(cupo_min,cupo_max,numero_sala)VALUES
(12,30,12),
(6,30,15),
(7,30,13),
(8,30,9),
(9,30,20);

INSERT INTO clases(sala_id,profe_id,nombre_clase_id,valor,descripcion,horario_id,url_imagen)VALUES
(6,1,1,20000,'pelea de puñoz',1,'https://st2.depositphotos.com/1000423/11915/i/450/depositphotos_119151660-stock-photo-professional-box-match-mixed-media.jpg'),
(7,1,2,26000,'correr como condenado',2,'https://images.unsplash.com/photo-1470468969717-61d5d54fd036?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZGlvfGVufDB8fDB8fHww&w=1000&q=80'),
(8,1,3,27000,'ni idea es pilates',3,'https://as01.epimg.net/deporteyvida/imagenes/2017/05/18/portada/1495103282_934242_1495104063_noticia_normal.jpg'),
(9,1,4,28000,'esto se pone weno a palos',4,'https://media.istockphoto.com/id/1252207646/es/foto/hombre-kick-boxeador-entrenamiento-solo-en-el-gimnasio.jpg?s=612x612&w=0&k=20&c=rq0vwRTFmzDW5rY0cYPhoXiVNxsKJ9qLCqO1rNzL0vc=');