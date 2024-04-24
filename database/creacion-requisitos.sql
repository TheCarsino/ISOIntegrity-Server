### CREACION DE REQUISITOS DE LA ISO 37001

USE `iso-test2`;

# 4. CONTEXTO DE LA ORGANIZACION
INSERT INTO StandardRequirement (nombre) VALUES ('4.1 Comprensión de la Organización y de su Contexto');
INSERT INTO StandardRequirement (nombre) VALUES ('4.2 Comprensión de las Necesidades y Expectativas de las Partes Interesadas');
INSERT INTO StandardRequirement (nombre) VALUES ('4.3 Determinación del Alcance del Sistema de Gestión Antisoborno');
INSERT INTO StandardRequirement (nombre) VALUES ('4.4 Sistema de Gestión Antisoborno');
INSERT INTO StandardRequirement (nombre) VALUES ('4.5 Evaluación de Riesgos de Soborno');

# 5. LIDERAZGO
INSERT INTO StandardRequirement (nombre) VALUES ('5.1 Liderazgo Y Compromiso');
INSERT INTO StandardRequirement (nombre) VALUES ('5.2 Política Antisoborno');
INSERT INTO StandardRequirement (nombre) VALUES ('5.3 Roles, Responsablidades Y Autoridades En La Organización');

# 6. PLANIFICACION
INSERT INTO StandardRequirement (nombre) VALUES ('6.1 Acciones Para Tratar Riesgos Y Oportunidades');
INSERT INTO StandardRequirement (nombre) VALUES ('6.2 Objetivos Antisoborno Y Planificación Para Lograrlos');

# 7. APOYO
INSERT INTO StandardRequirement (nombre) VALUES ('7.1 Recursos');
INSERT INTO StandardRequirement (nombre) VALUES ('7.2 Competencia');
INSERT INTO StandardRequirement (nombre) VALUES ('7.3 Toma De Conciencia Y Formación');
INSERT INTO StandardRequirement (nombre) VALUES ('7.4 Comunicación');
INSERT INTO StandardRequirement (nombre) VALUES ('7.5 Información Documentada');

# 8. OPERACION
INSERT INTO StandardRequirement (nombre) VALUES ('8.1 Planificación Y Control Operacional');
INSERT INTO StandardRequirement (nombre) VALUES ('8.2 Debida Diligencia');
INSERT INTO StandardRequirement (nombre) VALUES ('8.3 Controles Financieros');
INSERT INTO StandardRequirement (nombre) VALUES ('8.4 Controles No Financieros');
INSERT INTO StandardRequirement (nombre) VALUES ('8.5 Implementación De Los Controles Antisoborno Por Organizaciones Controladas Y Por Socios De Negocios');
INSERT INTO StandardRequirement (nombre) VALUES ('8.6 Compromisos Antisoborno');
INSERT INTO StandardRequirement (nombre) VALUES ('8.7 Regalos, Hospitalidad, Donaciones Y Beneficios Similares');
INSERT INTO StandardRequirement (nombre) VALUES ('8.8 Manejo De Controles Antisoborno Inadecuados');
INSERT INTO StandardRequirement (nombre) VALUES ('8.9 Planteamiento De Inquietudes');
INSERT INTO StandardRequirement (nombre) VALUES ('8.10 Investigación Y Lucha Contra El Soborno');

# 9. EVALUACION DE DESEMPEÑ
INSERT INTO StandardRequirement (nombre) VALUES ('9.1 Seguimiento, Medición, Análisis Y Evaluación');
INSERT INTO StandardRequirement (nombre) VALUES ('9.2 Auditoría Interna');
INSERT INTO StandardRequirement (nombre) VALUES ('9.3 Revisión Por La Alta Dirección');
INSERT INTO StandardRequirement (nombre) VALUES ('9.4 Revisión Por La Función De Cumplimiento Antisoborno');

# 10. MEJORA
INSERT INTO StandardRequirement (nombre) VALUES ('10.1 No Conformidades Y Acciones Correctivas');
INSERT INTO StandardRequirement (nombre) VALUES ('10.2 Mejora Continua');

# 4.1 Comprensión de la Organización y de su Contexto
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (1, '4.1a) Tamaño, estructura y autoridad delegada con poder de decisión de la organización');
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (1, '4.1b) Lugares y sectores en los que opera la organización o planea operar');
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (1, '4.1c) Naturaleza, escala y complejidad de las actividades y operaciones de la organización');
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (1, '4.1d) Modelo de negocio de la organización');
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (1, '4.1e) Entidades sobre las que la organización tiene el control y entidades que ejercen control sobre la organización');
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (1, '4.1f) Socios de negocios de la organización');
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (1, '4.1g) Naturaleza y alcance de las interacciones con los funcionarios públicos');
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (1, '4.1h) Deberes y obligaciones estatutarias, reglamentarias, contractuales y profesionales aplicables');

# 4.2 Comprensión de las Necesidades y Expectativas de las Partes Interesadas
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (2, '4.2a) Partes interesadas que son pertinentes y relevantes para el sistema de gestión antisoborno');
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (2, '4.2b) Requisitos relevantes de estas partes interesadas');

# 4.3 Determinación del Alcance del Sistema de Gestión Antisoborno
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (3, '4.3a) Cuestiones externas e internas mencionadas en 4.1');
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (3, '4.3b) Requisitos mencionados en 4.2');
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (3, '4.3c) Resultados de la evaluación del riesgo de soborno referenciado en 4.5');

# 4.5 Sistema de Gestión Antisoborno
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (5, '4.5.1a) Identificar el riesgo de soborno que la organización podría anticipar razonablemente, dado los factores enumerados en el apartado 4.1');
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (5, '4.5.1b) Analizar, evaluar y priorizar los riesgos de soborno identificados');
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (5, '4.5.1c) Evaluar la idoneidad y eficacia de los riesgos de soborno evaluados');
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (5, '4.5.3a) La evaluación del riesgo de soborno debe ser evaluada de manera periódica');
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (5, '4.5.3b) La evaluación del riesgo de soborno debe ser evaluada en el caso de un cambio significativo en la estructura o las actividades');

# 6.1 Acciones Para Tratar Riesgos Y Oportunidades
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (9, '6.1a) Asegurar razonablemente que el sistema de gestión antisoborno pueda lograr sus objetivos');
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (9, '6.1b) Prevenir o reducir efectos no deseados relacionados con la política y objetivos del sistema antisoborno');
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (9, '6.1c) Hacer seguimiento a la eficacia del sistema de gestión antisoborno');
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (9, '6.1d) Lograr la mejora continua');

# 8.2 Debida Diligencia
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (17, '8.2a) Aplicar controles con más de un riesgo bajo en relación con determinadas categorías de transacciones, proyectos o actividades');
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (17, '8.2b) Aplicar controles con más de un riesgo bajo con las relaciones existentes o planificadas con categorías específicas de socios de negocios');
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (17, '8.2c) Aplicar controles con más de un riesgo bajo en relación con categorías específicas del personal en determinadas posiciones');

# 9.3 Revisión Por La Alta Dirección
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (28, '9.3.1) Revisión por parte de la alta dirección');
INSERT INTO StandardSubrequirement (std_req_id, nombre)
VALUES (28, '9.3.2) Revisión del órgano de gobierno');

SELECT * FROM standardrequirement;

SELECT std.nombre, sub.nombre 
FROM standardrequirement AS std
INNER JOIN standardsubrequirement AS sub ON sub.std_req_id = std.id;