### CREACION DE ESCALAS DE MEDICION DE LA ISO 37001

-- USE `iso-test2`;

INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (1, 
		'Ninguno', 
		'Muy bajo', 
		'Incapaz de estimar', 
		'Alto', 
		'Muy alto', 
		'');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (2, 
		'El mínimo, la mayoría de las tareas laborales se realizan en equipo o en cooperación con el supervisor', 
		'Bajo, menos de la mitad de las tareas laborales se realizan por su cuenta',  
		'Alto, más de la mitad de las tareas laborales son realizadas por el empleado por su cuenta',  
		'El máximo, todas las tareas laborales son realizadas por el empleado por su cuenta', 
		'',
		'');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (3, 
		'Ninguno o mínimo', 
		'Mínimo o verificación aleatoria',  
		'Control continuo de tareas seleccionadas',  
		'Alto nivel de control sobre todas las tareas laborales', 
		'',
		'');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (4, 
		'Sin control', 
		'Medio',  
		'Alto',  
		'', 
		'',
		'');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (5, 
		'Muy bajo, el empleado toma solo algunas decisiones menores por sí mismo', 
		'Bajo, el empleado rara vez decide por sí mismo, o sus decisiones tienen un bajo impacto en las actividades de la organización',  
		'Medio, el empleado decide a menudo por sí mismo, pero sus decisiones no tienen un impacto importante en las actividades de la organización',  
		'Alto, el empleado suele decidir por sí mismo y sus decisiones afectan las actividades de la organización', 
		'Muy alto, el empleado toma la mayoría de las decisiones por sí mismo y tienen un impacto importante en las actividades de la organización',
		'');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (6, 
		'Menos de 1 año', 
        '1–3 años',  
        '4–10 años',  
        '11 o más años', 
        '',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (7, 
		'Muy alto', 
        'Alto',  
        'Bajo',  
        'Muy bajo', 
        'Inexistente',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (8, 
		'Ningún contacto con personas fuera de la organización', 
        'Contacto solo unas pocas veces al mes',  
        'Contacto varias veces a la semana',  
        'Contacto varias veces al día', 
        '',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (9, 
		'Ninguno', 
        'Muy bajo',  
        'Incapaz de estimar',  
        'Alto', 
        'Muy alto',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (10, 
		'El empleado no le gusta arriesgar mucho y si se le da la opción siempre evitaría una situación de riesgo', 
        'El empleado no le gusta arriesgar y si se le da la opción preferiría evitar una situación de riesgo',  
        'El empleado ni busca ni evita situaciones de riesgo',  
        'El empleado le gusta arriesgar y si se le da la opción preferiría situaciones de riesgo', 
        'El empleado le gusta arriesgar mucho y si se le da la opción siempre buscaría una situación de riesgo',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (11, 
		'Ninguno', 
        'Muy bajo',  
        'Incapaz de estimar',  
        'Alto', 
        'Muy alto',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (12, 
		'Implementado y certificado', 
        'En proceso de implementación o implementado pero no certificado',  
        'No',  
        '', 
        '',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (13, 
		'Sí', 
        'No',  
        '',  
        '', 
        '',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (14, 
		'Sí', 
        'No', 
        '',  
        '', 
        '',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (15, 
		'Posibilidad de terminación inmediata de la relación sin graves consecuencias para la organización', 
        'Posibilidad de terminación inmediata de la relación pero con consecuencias para la organización',  
        'La terminación de la relación es posible pero con algunas complicaciones y pocas consecuencias para la organización',  
        'La terminación de la relación es complicada y tiene consecuencias significativas para la organización', 
        'Incapacidad para terminar la relación sin graves consecuencias para la organización',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (16, 
		'Hemos trabajado con este socio más de ocho veces', 
        'Hemos trabajado con este socio cuatro a siete veces',  
        'Hemos trabajado con este socio dos a tres veces',  
        'Hemos trabajado con este socio una vez', 
        'Es un nuevo socio',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (17, 
		'El socio no tiene experiencia negativa demostrable con el soborno', 
        'Incapaz de estimar',  
        'El socio tiene experiencia negativa demostrable con el soborno',  
        '', 
        '',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (18, 
		'Nuestra organización está en mejor posición para negociar con el socio', 
        'Igualdad de condiciones',  
        'Nuestra organización está en una posición menos favorable para negociar con el socio',  
        '', 
        '',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (19, 
		'No es necesario tener una relación comercial con el socio', 
        'Incapaz de estimar',  
        'La relación comercial con el socio es importante para la organización',  
        '', 
        '',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (20, 
		'Posibilidad de sustitución inmediata', 
        'Incapaz de estimar',  
        'La sustitución del socio es muy difícil o no hay una sustitución adecuada',  
        '', 
        '',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (21, 
		'1 - 5', 
        '6 - 10',  
        '11 - 20',  
        '21 - 50', 
        'Más de 51',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (22, 
		'Ninguno o muy bajo', 
        'Bajo',  
        'Incapaz de estimar',  
        'Alto', 
        'Muy alto',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (23, 
		'Ninguno o muy bajo', 
        'Bajo',  
        'Incapaz de estimar',  
        'Alto', 
        'Muy alto',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (24, 
		'Ninguno o muy bajo', 
        'Bajo',  
        'Incapaz de estimar',  
        'Alto', 
        'Muy alto',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (25, 
		'Se implementó exactamente el mismo proyecto', 
        'Se implementó un proyecto con parámetros similares pero no exactos',  
        'Proyecto completamente nuevo',  
        '', 
        '',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (26, 
		'Alto', 
        'Incapaz de estimar',  
        'Bajo',  
        '', 
        '',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (27, 
		'1 - 10', 
        '11 - 30',  
        '31 y más',  
        '', 
        '',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (28, 
		'Bajo impacto indirecto o solo expectativas informativas', 
        'Impacto medio, más que solo expectativas informativas',  
        'Alto impacto directo o expectativas',  
        'Muy alto impacto directo o expectativas', 
        '',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (29, 
		'Menos de 9', 
        '10 - 49',  
        '50 - 249',  
        'Más de 249', 
        '',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (30, 
		'1', 
        '2',  
        '3',  
        '4', 
        '5',
        '6');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (31, 
		'0.01 - 0.25', 
        '0.25 - 0.39',  
        '0.4 - 0.59',  
        '0.6 - 0.79', 
        '0.8 - 0.99',
        'Más de 1');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (32, 
		'Asociación sin ánimo de lucro/cívica', 
        'Empresa/cooperativa',  
        'Organización autónoma',  
        'Una organización pública', 
        'Una organización contribuyente',
        'Una organización estatal');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (33, 
		'Producción', 
        'Servicios',  
        'Producción y servicios',  
        'Otro', 
        '',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (34, 
		'Menos de 1', 
        '1 - 3',  
        '4 - 10',  
        '11 - 20', 
        '21 - 49',
        'Más de 50');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (35, 
		'', 
        '',  
        'Hay un organismo de control directo',  
        'Hay un órgano de gobierno directo', 
        'No hay un organismo de control directo',
        'No hay un órgano de gobierno directo');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (36, 
		'1 - 5', 
        '6 - 15',  
        '16 - 30',  
        '31 - 59', 
        '60 - 99',
        'Más de 100');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (37, 
		'Sin influencia de funcionarios públicos', 
        'Los funcionarios públicos son solo partes interesadas externas',  
        'Los funcionarios públicos proponen empleados en la gestión',  
        'Los funcionarios públicos aprueban el presupuesto', 
        'Los funcionarios públicos están al frente de la organización',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (38, 
		'Sin influencia de funcionarios públicos', 
        'Los funcionarios públicos son solo partes interesadas externas',  
        'Los funcionarios públicos proponen empleados para realizar control',  
        'Los funcionarios públicos aprueban el informe final de actividades', 
        'Los funcionarios públicos están en los órganos de gobierno',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (39, 
		'La organización tiene su propio abogado', 
        'La organización tiene servicios legales externos',  
        'La organización no tiene abogado ni servicios legales externos',  
        '', 
        '',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (40, 
		'0 - 1', 
        '2 - 10',  
        '11 - 20',  
        '21 - 30', 
        '31 - 40',
        'Más de 41');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (41, 
		'La organización no tiene competencia', 
        'La organización tiene competencia potencial',  
        'La organización tiene competencia de sustitución',  
        'La organización tiene competencia directa con un producto idéntico', 
        '',
        '');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (42, 
		'Menos de 99,999', 
        '100,000 - 999,999',  
        '1,000,000 - 9,999,999',  
        '10,000,000 - 999,999,999', 
        'Mil millones - 10 mil millones',
        'Más de 10 mil millones');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (43, 
		'Menos de 9', 
        '10 - 999',  
        '1,000 - 9,999',  
        '10,000 - 99,999', 
        '100,000 - 999,999',
        'Más de un millón');
INSERT INTO SurveyScale (risks_indicator_id, descripcion_e1, descripcion_e2, descripcion_e3, descripcion_e4, descripcion_e5, descripcion_e6)
VALUES (44, 
		'Menos de 9,999', 
        '10,000 - 99,999', 
        '100,000 - 999,999',
        'Un millón - 9,999,999', 
        '10 millones - 999,999,999',
        'Más de 100 millones');

        
SELECT ind.id, ind.codigo, sca. descripcion_e1, sca. descripcion_e2, sca. descripcion_e3, sca. descripcion_e4, sca. descripcion_e5, sca. descripcion_e6 FROM surveyscale AS sca
INNER JOIN riskindicator AS ind ON ind.id = sca.risks_indicator_id