//CONSTANTS
export const NIVEL_RIESGO_BAJO = 33.33;
export const NIVEL_RIESGO_MEDIO = 66.66;
export const NIVEL_RIESGO_ALTO = 100.0;

export const ADMINISTADOR = 1;
export const ALTA_DIRECTIVA = 2;
export const GESTOR_PROYECTOS = 3;
export const COLABORADOR = 4;

const SEVERITY_FACTOR_LOG = 0.125;
const SEVERITY_FACTOR = 0.5;
const MIN_CASES_LOG = 2;

//ARITHMETIC FUNCTIONS

export function logaritmicCalculation(severity, num_cases) {
  let riskLevel = 0;

  if (num_cases > 0) {
    const naturalLog = Math.log((num_cases + MIN_CASES_LOG) * (1 + severity));
    riskLevel = (severity * SEVERITY_FACTOR_LOG + (1 - 1 / naturalLog)) * 100;
  } else {
    riskLevel = severity * SEVERITY_FACTOR * 100;
  }

  return riskLevel;
}

export function evaluateRiskLevelbyReports(risk, reportList) {
  let riskLevel = 0.0;

  const severity = risk.severidad_riesgo / 10;
  if (severity == null || severity === 0) return 0;
  let numWhistle = 0,
    numFactor = 0;
  for (const report of reportList) {
    if (report.report_whistlealert_id != null) numWhistle++;
    if (report.report_riskfactor_id != null) numFactor++;
  }

  riskLevel = logaritmicCalculation(severity, numWhistle + numFactor);
  return riskLevel;
}

export function calculateRiskCases(reportList) {
  let numWhistle = 0,
    numFactor = 0;
  for (const report of reportList) {
    if (report.report_whistlealert_id != null) numWhistle++;
    if (report.report_riskfactor_id != null) numFactor++;
  }

  return [numWhistle, numFactor];
}
