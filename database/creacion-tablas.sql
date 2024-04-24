### CREACION DE ROLES Y USUARIOS

-- USE `iso-test2`;

CREATE TABLE User (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuario VARCHAR(50) NOT NULL,
  contrasena BINARY(64) NOT NULL,
  nombres VARCHAR(100) NOT NULL,
  apellidos VARCHAR(100) NOT NULL,
  correo VARCHAR(100) NOT NULL,
  fecha_creacion DATE NOT NULL,
  ultima_modificacion DATE NOT NULL,
  activo BOOLEAN NOT NULL
);
CREATE TABLE Role (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  descripcion VARCHAR(150) NOT NULL,
  fecha_creacion DATE NOT NULL,
  ultima_modificacion DATE NOT NULL,
  activo BOOLEAN NOT NULL
);

### CREACION DE ESTRUCTURA ORGANIZACIONAL

CREATE TABLE Organization (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  rubro VARCHAR(150),
  tipo VARCHAR(50),
  categoria VARCHAR(50),
  direccion VARCHAR(250),
  ciudad VARCHAR(100),
  pais VARCHAR(60),
  logo_filename VARCHAR(255),
  fecha_creacion DATE NOT NULL,
  ultima_modificacion DATE NOT NULL,
  activo BOOLEAN NOT NULL
);
CREATE TABLE GroupedArea (
  id INT PRIMARY KEY AUTO_INCREMENT,
  codigo VARCHAR(8) NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  fecha_creacion DATE NOT NULL,
  ultima_modificacion DATE NOT NULL,
  activo BOOLEAN NOT NULL
);
CREATE TABLE Area (
  id INT PRIMARY KEY AUTO_INCREMENT,
  grouped_area_id INT NOT NULL,
  codigo VARCHAR(8) NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  descripcion VARCHAR(300),
  responsable VARCHAR(150),
  fecha_creacion DATE NOT NULL,
  ultima_modificacion DATE NOT NULL,
  activo BOOLEAN NOT NULL,
  
  FOREIGN KEY (grouped_area_id) REFERENCES GroupedArea(id)
);
CREATE TABLE UnitArea (
  id INT PRIMARY KEY AUTO_INCREMENT,
  area_id INT NOT NULL,
  codigo VARCHAR(8) NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  descripcion VARCHAR(300),
  responsable VARCHAR(150),
  es_area BOOLEAN NOT NULL,
  fecha_creacion DATE NOT NULL,
  ultima_modificacion DATE NOT NULL,
  activo BOOLEAN NOT NULL,

  FOREIGN KEY (area_id) REFERENCES Area(id)
);
CREATE TABLE Process (
  id INT PRIMARY KEY AUTO_INCREMENT,
  unit_area_id INT NOT NULL,
  codigo VARCHAR(8) NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  descripcion VARCHAR(300),
  tiene_controles BOOLEAN NOT NULL,
  fecha_creacion DATE NOT NULL,
  ultima_modificacion DATE NOT NULL,
  activo BOOLEAN NOT NULL,

  FOREIGN KEY (unit_area_id) REFERENCES UnitArea(id)
);
# RELACION ENTRE USER, ROLE, UNIT
CREATE TABLE User_X_Role_X_Unit (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  role_id INT NOT NULL,
  unit_area_id INT NULL,
  fecha_creacion DATE NOT NULL,
  ultima_modificacion DATE NOT NULL,
  activo BOOLEAN NOT NULL,

  FOREIGN KEY (user_id) REFERENCES User(id),
  FOREIGN KEY (role_id) REFERENCES Role(id),
  FOREIGN KEY (unit_area_id) REFERENCES UnitArea(id)
);

### CREACION DE INDICADORES DE RIESGO

CREATE TABLE RiskIndicatorCategory (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL
);
CREATE TABLE RiskIndicator (
  id INT PRIMARY KEY AUTO_INCREMENT,
  riskind_cat_id INT NOT NULL,
  codigo VARCHAR(8) NOT NULL,
  nombre VARCHAR(200) NOT NULL,
  escala INT,
  impacto FLOAT NOT NULL,
  
  FOREIGN KEY (riskind_cat_id) REFERENCES RiskIndicatorCategory(id)
);
CREATE TABLE StandardRequirement (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(110) NOT NULL
);
CREATE TABLE StandardSubrequirement (
  id INT PRIMARY KEY AUTO_INCREMENT,
  std_req_id INT NOT NULL,
  nombre VARCHAR(200) NOT NULL,
  
  FOREIGN KEY (std_req_id) REFERENCES StandardRequirement(id)
);
CREATE TABLE RiskIndicator_X_StandardSubRequirement (
  id INT PRIMARY KEY AUTO_INCREMENT,
  riskind_id INT NOT NULL,
  std_req_id INT NOT NULL,
  std_sub_id INT NULL,
  
  FOREIGN KEY (riskind_id) REFERENCES RiskIndicator(id),
  FOREIGN KEY (std_req_id) REFERENCES StandardRequirement(id),
  FOREIGN KEY (std_sub_id) REFERENCES StandardSubrequirement(id)
);
CREATE TABLE SurveyScale (
  id INT PRIMARY KEY AUTO_INCREMENT,
  risks_indicator_id INT NOT NULL,
  descripcion_e1 VARCHAR(150) NULL,
  descripcion_e2 VARCHAR(150) NULL,
  descripcion_e3 VARCHAR(150) NULL,
  descripcion_e4 VARCHAR(150) NULL,
  descripcion_e5 VARCHAR(150) NULL,
  descripcion_e6 VARCHAR(150) NULL,
  
  FOREIGN KEY (risks_indicator_id) REFERENCES RiskIndicator(id)
);
# TABLA HERENCIA DE LA ANTERIOR -- PARA ESTABLECER RESULTADOS HISTORICOS
CREATE TABLE SurveyResult (
  id INT PRIMARY KEY AUTO_INCREMENT,
  survey_scale_id INT NOT NULL,
  escala_seleccion INT NOT NULL,
  fecha_creacion DATE NOT NULL,
  
  FOREIGN KEY (survey_scale_id) REFERENCES SurveyScale(id)
);

### CREACION DE REPORTES Y CASOS

CREATE TABLE Report_WhistleAlert (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_role_unit_id INT NOT NULL,
  codigo VARCHAR(8) NOT NULL,
  nombre_contacto VARCHAR(100),
  numero_contacto VARCHAR(20),
  correo_contacto VARCHAR(100),
  posicion_contacto VARCHAR(100),
  detalles_cargo TEXT,
  divulgacion TEXT,
  informacion_adicional TEXT,
  fecha_registro DATE NOT NULL,
  activo BOOLEAN NOT NULL,
  
  FOREIGN KEY (user_role_unit_id) REFERENCES User_X_Role_X_Unit(id)
);
CREATE TABLE Report_RiskFactor (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_role_unit_id INT NOT NULL,
  codigo VARCHAR(8) NOT NULL,
  descripcion_corta VARCHAR(150),
  detalle TEXT,
  informacion_adicional TEXT,
  fecha_registro DATE NOT NULL,
  activo BOOLEAN NOT NULL,
  
  FOREIGN KEY (user_role_unit_id) REFERENCES User_X_Role_X_Unit(id)
);

### CREACION DE RIESGOS Y ASOCIACIONES

CREATE TABLE RiskTreatment (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(20) NOT NULL
);
CREATE TABLE Risk (
  id INT PRIMARY KEY AUTO_INCREMENT,
  risk_indicator_id INT NOT NULL,
  process_id INT NOT NULL,
  risk_treatment_id INT,
  codigo VARCHAR(8) NOT NULL,
  nombre VARCHAR(150) NOT NULL,
  descripcion VARCHAR(300),
  probabilidad FLOAT DEFAULT 0,
  impacto FLOAT DEFAULT 0,
  severidad_riesgo FLOAT DEFAULT 0,
  escala_indicador FLOAT DEFAULT 0,
  sintomas TEXT,
  causas TEXT,
  plan_accion TEXT,
  responsables_encargados TEXT,
  especificacion TEXT,
  nivel_riesgo FLOAT DEFAULT 0,
  fecha_creacion DATE NOT NULL,
  ultima_modificacion DATE NOT NULL,
  ultima_evaluacion_riesgo DATE,
  activo BOOLEAN NOT NULL,
  
  FOREIGN KEY (risk_indicator_id) REFERENCES RiskIndicator(id),
  FOREIGN KEY (process_id) REFERENCES Process(id),
  FOREIGN KEY (risk_treatment_id) REFERENCES RiskTreatment(id)
);
# TABLA DE RELACION ENTRE CASOS REPORTADOS Y RISK
CREATE TABLE Risk_X_Report (
  id INT PRIMARY KEY AUTO_INCREMENT,
  risk_id INT NOT NULL,
  report_whistlealert_id INT NULL,
  report_riskfactor_id INT NULL,
  fecha_creacion DATE NOT NULL,
  activo BOOLEAN NOT NULL,
  
  FOREIGN KEY (risk_id) REFERENCES Risk(id),
  FOREIGN KEY (report_whistlealert_id) REFERENCES Report_WhistleAlert(id),
  FOREIGN KEY (report_riskfactor_id) REFERENCES Report_RiskFactor(id)
);
# TABLA DE RELACION ENTRE REQUISITOS ISO Y RISK
CREATE TABLE Risk_X_StandardRequirement (
  id INT PRIMARY KEY AUTO_INCREMENT,
  risk_id INT NOT NULL,
  std_req_id INT NOT NULL,
  activo BOOLEAN NOT NULL,
  
  FOREIGN KEY (risk_id) REFERENCES Risk(id),
  FOREIGN KEY (std_req_id) REFERENCES StandardRequirement(id)
);
