### CREACION DE DATOS DE LA ORGANIZACION Y CATEGORIAS DE RIESGO

-- USE `iso-test2`;

INSERT INTO Organization (nombre, rubro, tipo, categoria, direccion, ciudad, pais, logo_filename, fecha_creacion, ultima_modificacion, activo)
VALUES ('Mutliverso SIG S.A.C.', 'Consultoría y servicios a empresas', 'Empresa privada', "Sociedad o asociación civil", 
		'Jr. Miguel Grau Nro. 1098 Bar. Santa Ana (Paseo Peatonal de Cajabamba Jr. Grau), Cajabamba', 'Cajamarca', 'Perú', '/assets/multiverso-sig-logo.jpg', CURDATE(), CURDATE(), TRUE);

INSERT INTO RiskTreatment (nombre)
VALUES ('Aceptación'),
		('Explotación'),
		('Mitigación'),
		('Transferencia'),
		('Evasión');

INSERT INTO Role (nombre, descripcion, fecha_creacion, ultima_modificacion, activo)
VALUES ('Administrador', 'Acceso total a la información del sistema.', CURDATE(), CURDATE(), TRUE),
       ('Alta Directiva', 'Gestión de los datos y la información final generada dentro del sistema.', CURDATE(), CURDATE(), TRUE),
       ('Gestor de Proyectos', 'Encargado de la evaluación de riesgos y la asigniación de nuevos riesgos en la organización.', CURDATE(), CURDATE(), TRUE),
       ('Colaborador', 'Usuario común del sistema para la generación de inquietudes en el sistema.', CURDATE(), CURDATE(), TRUE);

INSERT INTO User (usuario, contrasena, nombres, apellidos, correo, fecha_creacion, ultima_modificacion, activo)
VALUES ('adminTest', '122www', 'System', 'Administrator', 'admintest@example.com', CURDATE(), CURDATE(), TRUE);
-- Dont forget to update the user later via API
INSERT INTO User_X_Role_X_Unit (user_id, role_id, unit_area_id, fecha_creacion, ultima_modificacion, activo)
VALUES(1,1,NULL,CURDATE(), CURDATE(), TRUE);
/*
SAMPLE DATA --> DON'T RUN THIS PART OF THE QUERY --> DO IT FROM THE API

INSERT INTO User (usuario, contrasena, nombres, apellidos, correo, fecha_creacion, ultima_modificacion, activo)
VALUES ('altadirectiva1', 'altadirectiva', 'John', 'Doe Roe', 'johndoe@example.com', CURDATE(), CURDATE(), TRUE),
       ('gestorproyecto1', 'gestorproyecto', 'Jane', 'Smith Bench', 'janesmith@example.com', CURDATE(), CURDATE(), TRUE),
       ('colaborador1', 'colaborador', 'Will', 'Smith Table', 'willsmith@example.com', CURDATE(), CURDATE(), TRUE);
*/       

SELECT * FROM Organization;
SELECT * FROM RiskTreatment;

-- Auth Query

SELECT 	uru.id, uru.user_id, u.usuario, u.nombres, u.apellidos, u.correo, 
		uru.role_id, r.nombre AS role_nombre, r.descripcion AS role_descripcion, 
        uru.unit_area_id, COALESCE(a.codigo, 'NULL') AS unit_area_codigo, COALESCE(a.nombre, 'NULL') AS unit_area_nombre
FROM User_X_Role_X_Unit AS uru
INNER JOIN User AS u ON u.id = uru.user_id
INNER JOIN Role AS r ON r.id = uru.role_id
LEFT JOIN UnitArea AS a ON a.id = uru.unit_area_id
WHERE uru.user_id  = 1
AND u.activo = 1
AND r.activo = 1
AND uru.activo = 1;