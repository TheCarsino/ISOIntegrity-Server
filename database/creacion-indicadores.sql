### CREACION DE INDICADORES DE RIESGO

-- USE `iso-test2`;

INSERT INTO RiskIndicatorCategory (nombre) VALUES ('La debida diligencia relacionado con los casos de soborno en empleados');
INSERT INTO RiskIndicatorCategory (nombre) VALUES ('La debida diligencia relacionado con los casos de soborno con los socios del negocio');
INSERT INTO RiskIndicatorCategory (nombre) VALUES ('La debida diligencia relacionado con los casos de soborno en evaluación de proyectos');
INSERT INTO RiskIndicatorCategory (nombre) VALUES ('Entendiendo las necesidades y expectativas de las partes interesadas');
INSERT INTO RiskIndicatorCategory (nombre) VALUES ('La naturaleza, escala y complejidad de las actividades de la organización y operaciones');

INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (1, 'BRIDD01', 'Posición del empleado en la estructura organizativa (nivel jerárquico)', 5, 1.536);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (1, 'BRIDD02', 'Autonomía del empleado en la toma de decisiones', 4, 0.768);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (1, 'BRIDD03', 'Grado de responsabilidad por las consecuencias de las decisiones del empleado', 3, 0.768);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (1, 'BRIDD04', 'Alcance del control de la actividad laboral por un superior directo', 4, 0.576);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (1, 'BRIDD05', 'Grado de autonomía del empleado en la implementación de las tareas laborales', 5, 0.576);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (1, 'BRIDD06', 'Antigüedad del empleado en la organización', 4, 0.192);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (1, 'BRIDD07', 'Nivel de conocimiento del empleado sobre el soborno', 5, 0.768);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (1, 'BRIDD08', 'Intensidad del contacto del empleado con personas fuera de la organización durante el desempeño de las tareas laborales', 4, 1.920);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (1, 'BRIDD09', 'Evaluación subjetiva de esas características seleccionadas del empleado por un superior directo (enfoque responsable del trabajo, confianza, legado, experiencia previa en relación con el soborno)', 5, 0.960);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (1, 'BRIDD10', 'Actitud del empleado ante el riesgo', 5, 1.920);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (1, 'BRIDD11', 'Grado de severidad de las consecuencias para la organización si el empleado en cuestión aceptara un soborno', 5, 4.800);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (2, 'BRIDD12', 'Implementación de un sistema de gestión antisoborno por parte del socio comercial de la organización de acuerdo con la ISO 37001', 3, 3.840);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (2, 'BRIDD13', 'Implementación de medidas antisoborno por parte del socio comercial de la organización', 2, 2.880);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (2, 'BRIDD14', 'La obligación contractual de los socios comerciales de prevenir el soborno mediante la obtención de beneficios de la asociación en relación con una transacción, proyecto, actividad o relación', 2, 1.920);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (2, 'BRIDD15', 'Opciones de la organización para terminar la relación con el socio comercial en caso de soborno', 5, 1.536);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (2, 'BRIDD16', 'Experiencia de la organización con el socio comercial (cantidad y calidad de la relación con la organización)', 5, 0.960);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (2, 'BRIDD17', 'Experiencia del socio comercial con el soborno', 3, 1.728);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (2, 'BRIDD18', 'Grado de poder de negociación de la organización en relación con un socio comercial', 3, 0.576);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (2, 'BRIDD19', 'Importancia de la relación con el socio comercial para la organización', 3, 1.344);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (2, 'BRIDD20', 'Posibilidad de sustituir a un socio comercial', 3, 0.960);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (3, 'BRIDD21', 'Número de empleados de la organización que participan en el proyecto', 5, 1.920);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (3, 'BRIDD22', 'Costos que la organización debe gastar para implementar el proyecto', 5, 1.728);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (3, 'BRIDD23', 'Beneficios económicos esperados del proyecto', 5, 1.728);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (3, 'BRIDD24', 'Beneficios no económicos esperados del proyecto', 5, 1.536);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (3, 'BRIDD25', 'Experiencia con proyectos similares en la organización', 3, 2.496);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (3, 'BRIDD26', 'Tasa de transparencia estimada de la implementación del proyecto', 3, 2.304);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (4, 'BRISH01', 'Número total de partes interesadas de la organización', 3, 4.000);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (4, 'BRISH02', 'Comprensión de las necesidades y expectativas de las partes interesadas específicas de las actividades y operaciones de la organización', 4, 19.200);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (5, 'BRIAO01', 'Tamaño de la organización (número de empleados)', 4, 1.920);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (5, 'BRIAO02', 'Estructura organizativa (número de niveles jerárquicos de gestión)', 6, 1.920);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (5, 'BRIAO03', 'Delegación de la toma de decisiones en la organización (relación entre puestos directivos y no directivos)', 6, 1.920);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (5, 'BRIAO04', 'Forma jurídica', 6, 1.920);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (5, 'BRIAO05', 'Alcance de la actividad', 4, 1.920);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (5, 'BRIAO06', 'Establecimiento de competencia (número de entidades sobre las que la organización tiene control y entidades que ejercen control sobre la organización)', 6, 1.920);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (5, 'BRIAO07', 'Órgano de gobierno', 4, 1.920);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (5, 'BRIAO08', 'Socios comerciales de la organización (número de socios comerciales permanentes)', 6, 1.920);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (5, 'BRIAO09', 'Participación de funcionarios públicos en la gestión de la organización', 5, 1.920);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (5, 'BRIAO10', 'Participación de funcionarios públicos en el control de la organización', 5, 1.920);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (5, 'BRIAO11', 'Requisitos legislativos aplicables (existencia de servicios legales)', 3, 1.920);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (5, 'BRIAO12', 'Requisitos contractuales aplicables (número de demandas judiciales en curso)', 6, 1.920);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (5, 'BRIAO13', 'Organizaciones competidoras', 4, 1.920);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (5, 'BRIAO14', 'Presupuesto de la organización (dólares/año)', 6, 1.920);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (5, 'BRIAO15', 'Clientes de la organización (número promedio de demandas/año)', 6, 1.920);
INSERT INTO RiskIndicator (riskind_cat_id, codigo, nombre, escala, impacto)
VALUES (5, 'BRIAO16', 'Proyectos de la organización (presupuesto total del proyecto en dólares/año)', 6, 1.920);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (1, 17, 25);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (1, 1, 1);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (2, 17, 25);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (2, 1, 1);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (2, 1, 4);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (3, 17, 25);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (3, 1, 1);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (3, 1, 4);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (3, 1, 8);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (4, 17, 25);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (4, 1, 1);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (4, 1, 4);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (4, 1, 8);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (4, 2, NULL);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (5, 17, 25);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (5, 1, 1);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (5, 1, 4);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (5, 1, 8);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (6, 17, 25);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (6, 1, 1);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (6, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (6, 1, 4);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (6, 1, 8);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (6, 9, 20);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (7, 17, 25);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (7, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (7, 1, 8);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (8, 17, 25);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (8, 1, 2);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (8, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (8, 1, 4);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (8, 1, 5);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (8, 1, 6);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (8, 1, 7);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (8, 1, 8);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (8, 2, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (8, 9, 19);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (8, 9, 20);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (9, 17, 25);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (9, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (9, 1, 4);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (9, 2, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (9, 5, 14);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (10, 17, 25);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (10, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (10, 1, 4);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (10, 2, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (10, 5, 14);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (11, 17, 25);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (11, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (11, 1, 4);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (11, 1, 5);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (11, 1, 6);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (11, 1, 7);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (11, 1, 8);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (11, 2, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (10, 5, 14);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (12, 17, 24);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (12, 1, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (12, 2, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (12, 5, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (12, 9, NULL);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (13, 17, 24);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (13, 1, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (13, 2, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (13, 5, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (13, 9, NULL);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (14, 17, 24);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (14, 1, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (14, 2, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (14, 5, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (14, 9, NULL);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (15, 17, 24);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (15, 1, 2);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (15, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (15, 1, 4);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (15, 1, 5);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (15, 1, 6);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (15, 1, 7);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (15, 1, 8);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (15, 2, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (15, 9, 19);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (15, 9, 20);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (16, 17, 24);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (16, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (16, 1, 4);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (16, 1, 6);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (16, 1, 7);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (16, 1, 8);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (16, 2, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (16, 9, 19);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (16, 9, 20);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (17, 17, 24);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (17, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (17, 1, 4);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (17, 1, 6);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (17, 1, 7);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (17, 1, 8);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (17, 2, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (17, 9, 19);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (17, 9, 20);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (18, 17, 24);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (18, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (18, 1, 4);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (18, 1, 5);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (18, 1, 6);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (18, 1, 7);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (18, 1, 8);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (18, 2, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (18, 9, 22);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (19, 17, 24);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (19, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (19, 1, 4);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (19, 1, 5);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (19, 1, 6);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (19, 1, 7);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (19, 1, 8);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (19, 2, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (19, 9, 22);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (20, 17, 24);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (20, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (20, 1, 4);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (20, 1, 5);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (20, 1, 6);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (20, 1, 7);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (20, 1, 8);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (20, 2, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (20, 9, 22);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (21, 17, 23);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (21, 17, 25);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (21, 1, 1);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (21, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (21, 1, 4);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (21, 2, NULL);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (22, 17, 23);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (22, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (22, 1, 4);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (22, 2, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (22, 5, NULL);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (23, 17, 23);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (23, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (23, 1, 4);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (23, 2, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (23, 5, NULL);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (24, 17, 23);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (24, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (24, 1, 4);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (24, 2, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (24, 5, NULL);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (25, 17, 23);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (25, 1, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (25, 2, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (25, 5, NULL);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (26, 17, 23);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (26, 1, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (26, 2, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (26, 5, NULL);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (26, 9, NULL);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (27, 2, NULL);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (28, 2, NULL);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (29, 1, 1);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (29, 1, 3);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (30, 1, 1);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (30, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (30, 1, 4);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (31, 1, 1);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (31, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (31, 1, 4);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (32, 1, 1);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (32, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (32, 1, 4);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (33, 1, 1);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (33, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (33, 1, 4);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (34, 1, 1);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (34, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (34, 1, 4);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (34, 1, 5);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (35, 1, 1);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (35, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (35, 1, 4);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (35, 1, 8);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (35, 28, 27);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (36, 1, 1);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (36, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (36, 1, 4);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (36, 1, 6);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (37, 1, 1);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (37, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (37, 1, 4);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (37, 1, 7);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (38, 1, 1);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (38, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (38, 1, 4);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (38, 1, 7);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (39, 1, 1);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (39, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (39, 1, 4);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (39, 1, 8);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (40, 1, 1);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (40, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (40, 1, 4);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (40, 1, 8);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (41, 1, 1);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (41, 1, 2);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (41, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (41, 1, 4);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (42, 1, 1);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (42, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (42, 1, 4);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (43, 1, 1);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (43, 1, 2);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (43, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (43, 1, 4);

INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (44, 1, 1);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (44, 1, 3);
INSERT INTO RiskIndicator_X_StandardSubRequirement (riskind_id, std_req_id, std_sub_id) VALUES (44, 1, 4);

SELECT DISTINCT rxs.id, rsk.codigo, rsk.nombre, std.nombre, sub.nombre 
FROM RiskIndicator_X_StandardSubRequirement AS rxs
INNER JOIN RiskIndicator AS rsk ON rsk.id = rxs.riskind_id
INNER JOIN StandardRequirement AS std ON std.id = rxs.std_req_id
LEFT JOIN StandardSubrequirement AS sub ON (sub.id = rxs.std_sub_id);
