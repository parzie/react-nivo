export interface ModelResponse {
  model_version: number,
  ts_start: number,
  ts_end: number,
  num_categorical: number,
  job_id: string,
  model_type: string,
  num_continuous: number,
  model_name: string,
  sk: string,
  ts_updated: number,
  pk: string,
}

interface AnalysisValues {
  PetalWidthCm: number,
  SepalWidthCm: number,
  PetalLengthCm: number,
  SepalLengthCm: number,
}

export interface AnalysisResponse {
  origin: string,
  value: string[] | AnalysisValues,
  insight_name: string,
  name: string,
}

export interface AnalysisColors {
  PetalWidthCm: string,
  SepalWidthCm: string,
  PetalLengthCm: string,
  SepalLengthCm: string
}