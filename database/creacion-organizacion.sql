### CREACION DE DATOS DE LA ORGANIZACION Y CATEGORIAS DE RIESGO

-- USE `iso-test2`;

INSERT INTO Organization (nombre, rubro, tipo, categoria, direccion, ciudad, pais, logo_filename, fecha_creacion, ultima_modificacion, activo)
VALUES ('Generic AB Organization S.A.C.', 'Consultoras en Mercadotecnia / Marketing / Comercialización', 'Empresa privada', "Sociedad o asociación civil", 
		'Calle 200, Carretera de Ciudad Real-Almadén, Castilla-La Mancha', 'Abenójar', 'España', '/assets/company-logo.png', CURDATE(), CURDATE(), TRUE);

INSERT INTO RiskTreatment (nombre)
VALUES ('Tratamiento'),
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
VALUES ('admin', '122www', 'System', 'Administrator', 'admin@example.com', CURDATE(), CURDATE(), TRUE);

INSERT INTO User_x_Role_x_Unit (user_id, role_id, unit_area_id, fecha_creacion, ultima_modificacion, activo)
VALUES (1, 1, NULL, CURDATE(), CURDATE(), TRUE);

/*
SAMPLE DATA --> DON'T RUN THIS PART OF THE QUERY --> DO IT FROM THE API

INSERT INTO User (usuario, contrasena, nombres, apellidos, correo, fecha_creacion, ultima_modificacion, activo)
VALUES ('altadirectiva1', 'altadirectiva', 'John', 'Doe Roe', 'johndoe@example.com', CURDATE(), CURDATE(), TRUE),
       ('gestorproyecto1', 'gestorproyecto', 'Jane', 'Smith Bench', 'janesmith@example.com', CURDATE(), CURDATE(), TRUE),
       ('colaborador1', 'colaborador', 'Will', 'Smith Table', 'willsmith@example.com', CURDATE(), CURDATE(), TRUE);
*/       

SELECT * FROM organization;
SELECT * FROM risktreatment;

-- Auth Query
SELECT 	uru.id, uru.user_id, u.usuario, u.nombres, u.apellidos, u.correo, 
		uru.role_id, r.nombre AS role_nombre, r.descripcion AS role_descripcion, 
        uru.unit_area_id, COALESCE(a.codigo, 'NULL') AS unit_area_codigo, COALESCE(a.nombre, 'NULL') AS unit_area_nombre
FROM user_x_role_x_unit AS uru
INNER JOIN user AS u ON u.id = uru.user_id
INNER JOIN role AS r ON r.id = uru.role_id
LEFT JOIN unitarea AS a ON a.id = uru.unit_area_id
WHERE uru.user_id  = 4
AND u.activo = 1
AND r.activo = 1
AND uru.activo = 1;